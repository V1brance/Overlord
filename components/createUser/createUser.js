import React, { useState } from "react";

import styles from "./createUser.module.css";
import sword from "../../public/images/login-sword.png";
import Image from "next/image";
import Link from "next/link";

const CreateUser = (props) => {
  return (
    <>
      <div className={styles.formArea}>
        <Image src={sword} width={400} height={600} alt="" />
        <h2 className={styles.createHeader}>Create</h2>
        <form className={styles.createForm}>
          <input
            type="text"
            name="createUser"
            id="createUser"
            className={styles.userInput}
            placeholder="Username"
          />
          <input
            type="password"
            name="createPass"
            id="createPass"
            className={styles.passInput}
            placeholder="Password"
          />
          <input
            type="password"
            name="createPassConfirm"
            id="createPassConfirm"
            className={styles.passInput}
            placeholder="Confirm Password"
          />
          <input
            type="email"
            name="createEmail"
            id="createEmail"
            className={styles.emailInput}
            placeholder="Email"
          />
          <input
            type="email"
            name="createEmailConfirm"
            id="createEmailConfirm"
            className={styles.emailInput}
            placeholder="Confirm Email"
          />
          <label htmlFor="createEmailConfirm" className={styles.emailConfirm}>
            This is just for password reset purposes. I won&apos;t annoy you.
          </label>
          <button type="submit" className={styles.submitButton}>
            Create
          </button>
          <Link href="/login">
            <a className={styles.loginLink}>
              Already have an account? Login here!
            </a>
          </Link>
        </form>
      </div>
    </>
  );
};

export default CreateUser;
