import React, { useState } from 'react';
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase";

const Login = () => {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="login">
      <Link to="/">
                <img
                    className="login__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt=""
                />
            </Link>
            <div className="login__container">
              <h1>Sign in</h1>
              <form>
              <h5>E-mail</h5>
              <input value={email} onChange={e => setEmail(e.target.value)} type="text" />
              <h5>Password</h5>
              <input value={password} onChange={e => setPassword(e.target.value)} type="password" />

              <button onClick={login} type="submit" className="login__signInButton">Sign In</button>

              </form>
              <p>By signing-in here, you agree to Adam's Fake Amazon Page Terms & Conditions</p>

              <button onClick={register} className="login__registerButton">Create your fake Amazon Account</button>

            </div>
    </div>
  )
}

export default Login;