import React, { useState } from "react";

import styles from "./login.module.css";
import sword from "../../public/images/login-sword.png";
import Image from "next/image";
import Link from "next/link";

const Login = (props) => {
  const [state, setState] = useState({ loginUser: "", loginPass: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  return (
    <>
      <div className={styles.formArea}>
        <Image src={sword} width={400} height={600} alt="" />
        <h2 className={styles.loginHeader}>Login</h2>
        <form className={styles.loginForm}>
          <input
            type="text"
            name="loginUser"
            id="loginUser"
            className={styles.userInput}
            placeholder="Username"
            onChange={handleChange}
          />
          <input
            type="password"
            name="loginPass"
            id="loginPass"
            className={styles.passInput}
            placeholder="Password"
            onChange={handleChange}
          />
          <button type="submit" className={styles.submitButton}>
            Login
          </button>
          <Link href="/newUser">
            <a className={styles.newUserLink}>
              Need to make an account? Click here!
            </a>
          </Link>
        </form>
      </div>
    </>
  );
};

export default Login;
