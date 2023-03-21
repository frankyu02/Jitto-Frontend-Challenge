import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NavBarComponent from "./navbarComponent";
import { notLoggedIn, loggedIn } from "@/pageInfos/navBarContent";
const Wrapper = styled.section`
  width: 100vw;
  height: min(10vh, 150px);
  background-color: var(--background-primary);
  display: flex;
  justify-content: space-around;
  align-items: center;
  a {
    position: relative;
    /* background: white; */
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5em 5%;
    font-weight: bold;
    font-size: 1.25rem;
    div {
      visibility: hidden;
    }
    &:hover {
      color: var(--background-secondary);
    }
  }
  .currentLink {
    color: var(--background-secondary);
  }
  .currentTabBar {
    visibility: visible;
    position: absolute;
    width: 100%;
    height: 10%;
    bottom: 0;
    background-color: var(--background-secondary);
  }
  a::after {
    content: "";
    position: absolute;
    background-color: var(--background-secondary);
    height: 10%;
    width: 0%;
    bottom: 0;
    transition: 0.3s;
  }
  a:hover:after {
    width: 100%;
  }
  .detailContainer {
    display: flex;
    width: 25%;
    justify-content: space-around;
    align-items: center;
    button {
      width: 60%;
      background-color: var(--background-secondary);
      border: none;
      color: black;
      font-size: 1.1em;
      border-radius: 10px;
      margin-left: 5%;
      &:hover {
        cursor: pointer;
      }
    }
    p {
      font-size: 1.25em;
      font-weight: bold;
    }
  }
`;
export default function NavBar() {
  const router = useRouter();
  const currentRoute = router.pathname;
  const [navContent, setNavContent] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState("");
  useEffect(() => {
    function updateNav() {
      const loggedInFromStorage = JSON.parse(
        localStorage.getItem("jitto_logged_in")
      );
      setNavContent(loggedInFromStorage ? loggedIn : notLoggedIn);
      setIsLoggedIn(loggedInFromStorage ?? false);
      setName(JSON.parse(localStorage.getItem("jitto_logged_in")) ?? "");
    }
    updateNav();
    window.addEventListener("storage", updateNav);
    return () => {
      window.removeEventListener("storage", updateNav);
    };
  }, []);
  const handleLogout = () => {
    localStorage.setItem("jitto_logged_in", false);
    window.dispatchEvent(new Event("storage")); //fire localstorage change event
  };
  return (
    <Wrapper>
      {navContent.map((val, idx) => {
        return (
          <NavBarComponent
            key={idx}
            href={val.href ?? "/"}
            title={val.title ?? ""}
            current={currentRoute === val.href}
          />
        );
      })}
      {isLoggedIn && (
        <div className="detailContainer">
          <p>Hi {name}!</p>
          {/* create option to logout */}
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </Wrapper>
  );
}
