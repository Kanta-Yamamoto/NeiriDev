import { useRouter } from "next/router";
import Link from 'next/link'
import { useState, useEffect } from "react";
import { signOut } from "../lib/api/auth";
import Cookies from "js-cookie"
import { useRecoilState } from "recoil";
import { authState } from "../components/atoms";


export default function header() {

  const [auth, setAuth] = useRecoilState(authState)

  const router = useRouter();
  // const [loginButtonName, setLoginButtonName] = useState()

  const handleSignOut = async () => {

    try {
      const res = await signOut();

      if (res.status === 200) {
        Cookies.remove("_access_token")
        Cookies.remove("_client")
        Cookies.remove("_uid")
        router.replace("/signin");
        setAuth(false)
      }
    } catch (err) {
    }
  };


  const LoginButton = () => {
    if (auth) {
      return (<button className="text-white" onClick={() => handleSignOut()}>ログアウト</button>)
    } else if (router.asPath == "/signin") {
      return (<Link href="/signup"><a>新規登録</a></Link>)
    } else if (router.asPath == "/signup") {
      return (<Link href="/signin"><a>ログイン</a></Link>)
    } else {
      return (<><Link href="/signup"><a>新規登録</a></Link> / <Link href="/signin"><a>ログイン</a></Link></>)
    }
  }



  useEffect(() => {
    {
      LoginButton();
    }
  }, [router.asPath]);





  return (
    <div className="w-full h-16 bg-black px-3" >
      <div className="my-0 mx-auto max-w-screen-lg h-full flex items-center justify-between">
        <div className="text-white font-bold text-4xl w-auto"><Link href="/"><a>Neiri dev</a></Link></div>

        <div
          className="text-white font-bold text-lg w-auto border-2 border-white px-2 py-1 rounded-md">
          <LoginButton />
        </div>
      </div>
    </div>)
}
