import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 50%;
  height: 50%;
  outline: 3px solid var(--background-primary);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  .loginBanner {
    width: 100%;
    height: 15%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--background-primary);
    color: white;
    font-size: 1.5em;
  }
  form {
    width: 100%;
    height: 85%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    input {
      background-color: var(--background-secondary);
      border: none;
      height: min(25%, 50px);
      width: 80%;
      margin: 2.5em 0;
      color: black;
      padding: 0px 1.5em;
      &::placeholder {
        text-align: center;
      }
    }
    *:focus {
      outline: none;
    }
    button {
      width: 50%;
      background-color: var(--background-primary);
      border-radius: 5px;
      border: none;
      height: min(10%, 30px);
      &:hover {
        cursor: pointer;
      }
    }
    a {
      color: var(--background-primary);
      text-decoration: underline;
      &:hover {
        cursor: pointer;
      }
    }
  }
`;
export default function LoginForm() {
  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      //fake API call
      console.debug("making fake api call");
      localStorage.setItem("jitto_logged_in", true);
      localStorage.setItem("jitto_username", inputs.username);
      window.dispatchEvent(new Event("storage")); //fire localstorage change event
      setLoading(false);
    }, "1500");
    console.log(inputs);
  };
  return (
    <Wrapper>
      <div className="loginBanner">Login</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={inputs.username || ""}
          onChange={handleChange}
          name="username"
          required
        ></input>
        <input
          type="password"
          placeholder="Password"
          value={inputs.password || ""}
          onChange={handleChange}
          name="password"
          required
        ></input>
        <button disabled={loading} type="submit">
          Login
        </button>
        <p>
          Don&apos;t have an account? <Link href={"/"}>Make One Here!</Link>
        </p>
      </form>
    </Wrapper>
  );
}
