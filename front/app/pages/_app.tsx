import '../styles/globals.css'
import { RecoilRoot } from "recoil";
import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import { getCurrentUser } from "../lib/api/auth";


function MyApp({ Component, pageProps }) {

  const [isSignedIn, setIsSignedIn] = useState<boolean>();
  const [currentUser, setCurrentUser] = useState<String>();

  const handleGetCurrentUser = async () => {
    try {
      const res = await getCurrentUser();

      if (res.status === 200) {
        setCurrentUser(res.data.data);
        setIsSignedIn(true);
      } else {
        setIsSignedIn(false);
      }
    } catch (error) {
      setIsSignedIn(false);
    }
  };

  useEffect(() => {
    handleGetCurrentUser();
  }, []);

  const getLayout = Component.getLayout || ((page) => page);

  return (
    <RecoilRoot>
      <Layout>
        {(function () {
          return getLayout(
            <Component {...pageProps} />
          )
        })()}
      </Layout>
    </RecoilRoot>
  )
}

export default MyApp
