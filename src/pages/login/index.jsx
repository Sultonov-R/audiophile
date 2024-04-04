import React, { useState, useRef } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase";
import { fetchSignInMethodsForEmail } from "firebase/auth";
import { Navigate, useNavigate } from "react-router-dom";
import "./index.css";

function Login({ user }) {
  const [isSignUpActive, setIsSignUpActive] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleMethodChange = () => {
    setIsSignUpActive(!isSignUpActive);
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSignUp = () => {
    const emailValue = emailRef.current.value.trim();
    const passwordValue = passwordRef.current.value.trim();

    if (!emailValue || !passwordValue) {
      alert("Email or password are required.");
      return;
    }
    if (!validateEmail(emailValue)) {
      setError("Please enter a valid email address.");
      return;
    } else {
      navigate("/");
    }

    fetchSignInMethodsForEmail(auth, emailValue)
      .then((signInMethods) => {
        if (signInMethods.length > 0) {
          setError("Bu email allaqachon mavjud.");
          isSignUpActive(false);
        } else {
          createUserWithEmailAndPassword(auth, emailValue, passwordValue)
            .then((userCredential) => {
              const user = userCredential.user;
              console.log("User signed up:", user);
            })
            .catch((error) => {
              if (error.code == "auth/email-already-in-use") {
                alert("The email address is already in use");
              } else if (error.code == "auth/invalid-email") {
                alert("The email address is not valid.");
              } else if (error.code == "auth/operation-not-allowed") {
                alert("Operation not allowed.");
              } else if (error.code == "auth/weak-password") {
                alert("The password is too weak.");
              }
            });
        }
      })
      .catch((error) => {
        console.error("Error fetching sign-in methods:", error);
      });
  };

  const handleSignIn = () => {
    const emailValue = emailRef.current.value.trim();
    const passwordValue = passwordRef.current.value.trim();

    if (!emailValue || !passwordValue) {
      alert("Email and password are required.");
      return;
    }

    if (!validateEmail(emailValue)) {
      alert("Please enter a valid email address.");
      return;
    }

    signInWithEmailAndPassword(auth, emailValue, passwordValue)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User signed in:", user);
      })
      .catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
        console.error("Sign-in error:", errorCode, errorMessage);
        setError(errorMessage);
        alert(errorMessage);
      });
  };

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <div className="container">
        <div className="login_page">
          <div className="login_input">
            {isSignUpActive ? <h3>Sign Up</h3> : <h3>Sign In</h3>}

            <div className="label_input_class">
              <label htmlFor="email">Email</label>
              <input
                ref={emailRef}
                type="email"
                placeholder="Email"
                id="email"
              />
            </div>
            <div className="label_input_class">
              <label htmlFor="password">Password</label>
              <input
                ref={passwordRef}
                type="password"
                placeholder="Password"
                id="password"
              />
            </div>

            {isSignUpActive ? (
              <button type="button" onClick={handleSignUp}>
                Sign Up
              </button>
            ) : (
              <button onClick={handleSignIn} type="button">
                Sign In
              </button>
            )}

            <div className="span-login">
              {isSignUpActive ? (
                <span onClick={handleMethodChange}>Login</span>
              ) : (
                <span onClick={handleMethodChange}>Create an account</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
