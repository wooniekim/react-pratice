import React from "react";
import { useState } from "react";
import {firebaseAuth, createUserWithEmailAndPassword } from '../../Firebase';

const Register = () => {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    // 회원가입 버튼의 onClick에 할당
    const register = async () => {
        try {
            const createdUser = await createUserWithEmailAndPassword(firebaseAuth, registerEmail, registerPassword);
            console.log(createdUser);
            setRegisterEmail("");
            setRegisterPassword("");
        } catch(e) {
            console.log(e.message);
        }
    }
  return (
    <div>
        <input
            placeholder="Email"
            onChange={(e) => {
                setRegisterEmail(e.target.value);
            }}
        />
        <input
            placeholder="EmailPassword"
            onChange={(e) => {
                setRegisterPassword(e.target.value);
            }}
        />
        <button onClick={register}>회원가입</button>
    </div>
  );
};

export default Register;
