import { useState } from "react";

export default function LoginPage({ role }) {
  console.log("loginPage render");
  const [submitted, setSubmitted] = useState(false);

  function login(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formJson = Object.fromEntries(formData.entries());

    // TODO: should we use 'useEffect' hook ?
    fetch("http://localhost:8000/api/v1/user/login", {
      method: e.target.method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formJson),
    })
      .then(async (res) => {
        const json = await res.json();
        console.log(json);
        if (json.authenticated) {
          setSubmitted(true);
        } else {
          console.log("else part of error");
          console.error("Error: ", res.status);
        }
      })
      .catch((err) => {
        console.log("catch part of error");
        console.log("Error: ", err);
      });
  }

  if (submitted) {
    return <div>hello admin</div>;
  }

  return (
    <div className="flex justify-center">
      <form method="post" onSubmit={login}>
        <input type="hidden" name="role" value={role} />
        <div className="flex justify-center">
          <h1>Login as {role}</h1>
        </div>
        <div className="m-5">
          <input
            className="bg-slate-200 p-2 px-4 pr-20 border border-sky-500 focus:outline-none hover:border-sky-800"
            type="text"
            name="username"
            placeholder="Username"
            required
          />
        </div>
        <div className="m-5">
          <input
            className="bg-slate-200 p-2 px-4 pr-20 border border-sky-500 focus:outline-none hover:border-sky-800"
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </div>
        <div className="flex justify-center">
          <button className="m-5 rounded bg-blue-500 p-2" type="submit">
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
}
