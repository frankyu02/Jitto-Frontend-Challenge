import LoginForm from "@/components/loginPage/loginForm";
import ShopLayout from "@/components/shopPage/shopComponent";
import Head from "next/head";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - min(10vh, 150px));
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    function updatePage() {
      setLoggedIn(
        JSON.parse(localStorage.getItem("jitto_logged_in")) == true ?? false
      );
    }
    updatePage();
    window.addEventListener("storage", updatePage);
    return () => {
      window.removeEventListener("storage", updatePage);
    };
  });
  return (
    <>
      <Head>
        <title>{loggedIn ? "Search for Products!" : "Login Here!"}</title>
        <meta name="description" content="Login Content" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Wrapper>{loggedIn ? <ShopLayout /> : <LoginForm />}</Wrapper>
      </main>
    </>
  );
}
