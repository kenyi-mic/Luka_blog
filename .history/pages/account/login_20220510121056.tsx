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
      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-2 gap-3 lg:gap-6">
        <div className="bg-[url('/image/login.jpg')]">
          <h2>Information for Login</h2>
          <p>
            means any and all State Records not subject to disclosure under
            CORA. State Confidential Information shall include, but is not
            limited to, PII, PHI, PCI, Tax Information, CJI, and State personnel
            records not subject to disclosure under CORA. State Confidential
            Information shall not include information or data concerning
            individuals that is not deemed confidential but nevertheless belongs
            to the State, which has been communicated, furnished, or disclosed
            by the State to Contractor which (i) is subject to disclosure
            pursuant to CORA; (ii) is already known to Contractor without
            restrictions at the time of its disclosure to Contractor; (iii) is
            or subsequently becomes publicly available without breach of any
            obligation owed by Contractor to the State; (iv) is disclosed to
            Contractor, without confidentiality obligations, by a third party
            who has the right to disclose such information; or (v) was
            independently developed without reliance on any State Confidential
            Information.
          </p>
        </div>
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
