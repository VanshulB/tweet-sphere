import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import LoginModel from "@/components/models/LoginModel";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <LoginModel />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
