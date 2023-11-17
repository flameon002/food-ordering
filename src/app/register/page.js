"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const registerPage = () => {
  const [email, setEmail] = useState("test@test.com");
  const [password, setPassword] = useState("test");
  const [userCreated, setUserCreated] = useState(false);
  const [creatingUser, setCreatingUser] = useState(false);
  const [error, setError] = useState(false);

  async function handleFormSubmit(ev) {
    setCreatingUser(true);
    setError(false)
    setUserCreated(false);
    ev.preventDefault();

      const response = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        setUserCreated(true);
      }
      else {
        setError(true);
      }
      setCreatingUser(false);
    

    
  }

  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl font-semibold mb-4">
        Register
      </h1>

      {userCreated && (
        <div className="mt-4 mb-4 flex justify-center text-justify-center text-green-600">
          <h3 className="text-xl">
            User Created. Now you can
            <Link href={"/login"}>
              {/* <span className="text-white font-bold mx-2 p-2 rounded-md bg-green-600"> */}
              {"  "}Login
              {/* </span> */}
            </Link>
          </h3>
        </div>
      )}

        {error && (
                  <div className="mt-4 mb-4 flex justify-center text-justify-center text-red-700">
                  <h3 className="text-xl">
                    An error has ocurred.<br/> Please try again later
                  </h3>
                </div>

        )}

      <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          disabled={creatingUser}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          disabled={creatingUser}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="subbmit" disabled={creatingUser}>
          Register
        </button>

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
