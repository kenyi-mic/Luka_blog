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
      <div className="max-w-6xl mx-auto py-10 ">
        <form action="">
          <h1 title="Enter your credentials!">Login Form</h1>
          <div>
            <label htmlFor="username">Username:</label>
            <input type="text" name="username" />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" />
          </div>

          <div>
            <input type="checkbox" name="checkbox" />
            <label htmlFor="checkbox">Remember me</label>
          </div>
          <div>
            <a href="#">Sign up</a>
          </div>
          <div>
            <input type="submit" name="submit" value="Submit" />
          </div>
        </form>
      </div>
    </main>
  );
}

export default login;
