import '../styles/globals.css'
import { RecoilRoot } from "recoil";
import Layout from "../components/layout";

function MyApp({ Component, pageProps }) {

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
