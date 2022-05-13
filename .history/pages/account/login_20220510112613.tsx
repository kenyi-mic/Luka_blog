import Head from "next/head";
import React from "react";
import Header from "../../components/Header";

function login() {
  return (
    <main>
      <Head>
        <title>Login Page</title>
      </Head>
      <Header />
      <hr />
      <div>
        <h1>Login Form</h1>
      </div>
    </main>
  );
}

export default login;
