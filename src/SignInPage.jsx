import React, { useRef } from "react";
import { auth } from "./firebase";
import "./SignInPage.css";

function SignInPage() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const signin = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="signin">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder="email" />
        <input ref={passwordRef} type="password" placeholder="password" />
        <button onClick={signin} type="submit">
          Sign In
        </button>
        <h4>
          <span className="signin__grey">New to Netflix? </span>
          <span onClick={register} className="signin__link">
            Sign Up now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignInPage;
