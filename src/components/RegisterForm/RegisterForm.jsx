import React, { useState } from 'react';
import { rootApi } from "../../api"
import axios from "axios";

const RegisterForm = ({ styles }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [username, setUserName] = useState("")

  const authServices = () => {
    const registration = (userData) => {
      return axios.post(`${rootApi}/register`, userData);
    };

    const handleSubmit = async (event) => {
      event.preventDefault();
      const userData = { email, username, password };
      try {
        const response = await registration(userData);
        console.log(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };

    return {
      registration,
      handleSubmit,
    }
  };
  return (
    <form className={styles.form} onSubmit={authServices().handleSubmit}>
      <h2 className={styles.title}>Register</h2>
      <div className={styles.control}>
        <label htmlFor="email" className={styles.label}>
          Email address
        </label>
        <input
          type="email"
          placeholder="email"
          name="email"
          className={styles.input}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className={styles.control}>
        <label htmlFor="password" className={styles.label}>
          Login
        </label>
        <input
          type="text"
          placeholder="login"
          name="login"
          className={styles.input}
          value={username}
          onChange={(event) => setUserName(event.target.value)}
        />
      </div>
      <div className={styles.control}>
        <label htmlFor="password" className={styles.label}>
          Password
        </label>
        <input
          type="password"
          placeholder="password"
          name="password"
          className={styles.input}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <input type="submit" value="Register" className={styles.submit} />
    </form>
  );
};

export default RegisterForm;