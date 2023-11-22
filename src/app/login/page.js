'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
const LoginPage = () => {

  const [email, setEmail] = useState("test@test.com");
  const [password, setPassword] = useState("test");
const [loginInProgres, setLogininProgres] =useState(false)


  async function handleFormSubmit(e){
    e.preventDefault();
    setLogininProgres(true)
    const response = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (!response.ok) {
      
    }else{

    }
    setLogininProgres(false)
  }

  return (
    <section className='mt-8'>
      <h1 className="text-center text-primary text-4xl font-semibold mb-4">
        Login
      </h1>

    <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
    <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="subbmit" 
        // disabled={creatingUser}
        >
          Login
        </button>

        <div className="my-4 text-center text-gray-700">
          Or login whit provider
        </div>
        <button className="flex justify-center gap-4 ">
          <Image src={"/google.png"} width={24} height={24} alt="Google" />
          Login whit google
        </button>

        <div className="text-center my-4 text-gray-500 border-t pt-4">
          Don´t have an account?{' '}
          <Link className="underline" href={'/login'}>Register here &raquo;</Link>
        </div>

    </form>

    </section>
  )
}

export default LoginPage