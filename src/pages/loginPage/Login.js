import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { firebaseAuth } from "../../Firebase";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        firebaseAuth,
        loginEmail,
        loginPassword
      );
      console.log(user, "로그인 성공");
    } catch (error) {
      alert('이메일 또는 비밀번호가 잘못되었습니다.');
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(firebaseAuth);
    console.log("로그아웃");
  };

  return (
    <>
      <h1>로그인</h1>
      <input
        placeholder="Email"
        onChange={(e) => {
          setLoginEmail(e.target.value);
        }}
      />
      <input
        placeholder="Password"
        type='password'
        onChange={(e) => {
          setLoginPassword(e.target.value);
        }}
      />
      <button onClick={login}>로그인</button>
      <button onClick={logout}>로그아웃</button>
    </>
  );
};

export default Login;
