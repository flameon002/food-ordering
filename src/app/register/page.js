"use client";

import Image from "next/image";
import React, { useState } from "react";

const registerPage = () => {
  const [email, setEmail] = useState("test@test.com");
  const [password, setPassword] = useState("test");

  async function handleFormSubmit(ev) {
    ev.preventDefault();
    const response = await fetch('/api/register', {
      method: "POST",
      body: JSON.stringify({email, password}),
      headers: {'Content-Type': 'application/json'}
    
    })
  }

  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl font-semibold mb-4">
        Register
      </h1>

      <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e => setEmail(e.target.value))}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e => setPassword(e.target.value))}
        />

        <button type="subbmit">Register</button>

        <div className="my-4 text-center text-gray-700">
          Or login whit provider
        </div>
        <button className="flex justify-center gap-4 ">
          <Image src={"/google.png"} width={24} height={24} alt="Google" />
          Login whit google
        </button>
      </form>
    </section>
  );
};

export default registerPage;
