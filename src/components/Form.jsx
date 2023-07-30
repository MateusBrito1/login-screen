import { useState } from "react";
import style from "./Form.module.css";

export function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const logins = [
    {
      user: "mateusbrito@gmail.com",
      pass: "strowt68",
    },
    {
      user: "mariana",
      pass: "petrovich",
    },
    {
      user: "admin",
      pass: "admin",
    },
  ];

  function validate(event) {
    event.preventDefault();

    const verifiedLogin = logins.some(login => login.user === email && login.pass === password);

    if (verifiedLogin) {
      window.location.href = "./assets/home/home.html";
    } else {
      setErrorMessage("Usúario ou senha incorretas.");
    }
  }

  return (
    <div>
      <form autoComplete="on" className={style.form} onSubmit={validate}>
        <label htmlFor="iemail">Email</label>
        <input
          type="email"
          placeholder="E-mail..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errorMessage && <p className={style.erro}>{errorMessage}</p>}

        <label htmlFor="isen">Password</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        <a href="#">Already have an account?</a>
        <a href="#">Forgot password?</a>
        <button>Register</button>
      </form>
    </div>
  );
}
