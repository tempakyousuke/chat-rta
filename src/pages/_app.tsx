import { AppProps } from "next/app";
import Layout from "../components/Layout";
import { AuthProvider } from "../context/auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ToastContainer />
    </AuthProvider>
  );
}

export default MyApp;
