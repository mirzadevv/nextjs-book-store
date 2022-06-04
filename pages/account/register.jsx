import { useState, useContext } from "react";
import Link from "next/link";
import styles from "../../styles/pages/account/account.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  function handleErrors() {
    if (
      formData.username.trim() === "" ||
      formData.email.trim() === "" ||
      formData.password.trim() === "" ||
      formData.passwordConfirm.trim() === ""
    ) {
      toast.error("You need to fill all fields");
      return true;
    } else if (formData.passwordConfirm !== formData.password) {
      toast.error("Your password is not match");
      return true;
    } else {
      return false;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errors = handleErrors();
    if (!errors) {
      console.log("submitted");
    }
  }

  function handleChange(e) {
    const newFormData = { ...formData };
    newFormData[e.currentTarget.name] = e.currentTarget.value;
    setFormData(newFormData);
  }

  return (
    <div className={styles.login}>
      <ToastContainer />
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1>Register</h1>
        <div className={styles.inputContainer}>
          <input
            type="text"
            className={styles.input}
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
          />
        </div>
        <div className={styles.inputContainer}>
          <input
            type="email"
            className={styles.input}
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />
        </div>
        <div className={styles.inputContainer}>
          <input
            type="password"
            className={styles.input}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
          />
        </div>
        <div className={styles.inputContainer}>
          <input
            type="password"
            className={styles.input}
            name="passwordConfirm"
            value={formData.passwordConfirm}
            onChange={handleChange}
            placeholder="Password Confirm"
          />
        </div>
        <button className={styles.button}>Register</button>
        <div>
          <p>
            You've already have an account?
            <Link href="/account/login">
              <a> Login</a>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
