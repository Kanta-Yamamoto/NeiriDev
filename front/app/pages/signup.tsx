import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from "next/router";
import Outline from "../components/organisms/outline";
import UnderlineLink from "../components/atoms/underlineLink"
import { signUp } from "../lib/api/auth";
import { SignUpParams } from "../interfaces/index"
import Cookies from "js-cookie"


export default function signup() {

  const router = useRouter();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (data: SignUpParams) => {
    reset();
    try {
      const res = await signUp(data)

      if (res.status === 200) {
        Cookies.set("_access_token", res.headers["access-token"])
        Cookies.set("_client", res.headers["client"])
        Cookies.set("_uid", res.headers["uid"])
        router.replace("/mypage");
      } else {

      }
    } catch (err) {
    }
  }



  return (<>
    <Outline>
      <h1 className="mx-auto my-5 text-2xl font-semibold w-auto text-center">
        新規登録</h1>

      <form className="text-center" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col max-w-[70%] mx-auto">
          <label className="text-left" htmlFor='email'>メールアドレス</label>
          <input
            className=" indent-2 border-2 border-black h-10 mb-2"
            id='email'
            type='text'
            {...register('email', { required: true, maxLength: 20 })}
          />
          {errors.email && 'Email is required'}
        </div>
        <div className="flex flex-col max-w-[70%] mx-auto">
          <label className="text-left" htmlFor='password'>パスワード</label>
          <input
            className=" indent-2 border-2 border-black h-10"
            type='password'
            id='password'
            {...register('password', { required: true, pattern: /^[A-Za-z]+$/i })}
          />
          {errors.password && 'password is required'}
        </div>
        <input className="font-bold text-lg w-auto border-2 border-black px-5 py-1 rounded-md mt-5 mb-4" type='submit' />
      </form>
      <UnderlineLink url="/signin">ログインページはこちら</UnderlineLink>
    </Outline>
  </>)
}
