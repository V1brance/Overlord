import styles from "./login.module.css";
import sword from "../../public/images/login-sword.png";
import Image from "next/image";

export default function Login() {
  return (
    <>
      <div className={styles.formArea}>
        <Image src={sword} width={400} height={600} />
        <h2 className={styles.loginHeader}>Login</h2>
        <form className={styles.loginForm}>
          <input
            type="text"
            name="loginUser"
            id="loginUser"
            class={styles.userInput}
            placeholder="Username"
          />
          <input
            type="password"
            name="loginPass"
            id="loginPass"
            class={styles.passInput}
            placeholder="Password"
          />
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
