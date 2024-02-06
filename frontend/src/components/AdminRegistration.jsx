export default function AdminRegistration() {
  console.log("adminRegister render");
  function registerUser(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);

    // TODO: Replace 'fetch' syntax by 'axios'
    fetch("http://localhost:8000/api/v1/user/register", {
      method: e.target.method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formJson),
    })
      .then(async (res) => {
        if (res.ok) {
          const json = await res.json();
          console.log(json);
          // render the necessary component
        } else {
          console.error("Error: ", res.status);
        }
      })
      .catch((err) => {
        console.error("Error: ", err);
      });
  }

  return (
    <div className="flex justify-center items-stretch">
      <form method="post" onSubmit={registerUser}>
        <div className="flex justify-center">
          <h1>Register</h1>
        </div>
        <div className="m-5">
          <input
            className="bg-slate-200 p-2 px-4 pr-20 border border-sky-500 focus:outline-none hover:border-sky-800"
            type="text"
            name="name"
            placeholder="Enter your full name"
            required
          />
        </div>
        <div className="m-5 flex justify-around">
          <label htmlFor="male">M</label>
          <input
            className="bg-slate-200 p-2 px-4 pr-20 border border-sky-500 focus:outline-none hover:border-sky-800"
            type="radio"
            name="gender"
            id="male"
            value="M"
            required
          />

          <label htmlFor="female">F</label>
          <input
            className="bg-slate-200 p-2 px-4 pr-20 border border-sky-500 focus:outline-none hover:border-sky-800"
            type="radio"
            name="gender"
            id="female"
            value="F"
            required
          />
        </div>
        <div className="m-5">
          <input
            className="bg-slate-200 p-2 px-4 pr-20 border border-sky-500 focus:outline-none hover:border-sky-800"
            type="text"
            name="username"
            placeholder="Mobile No."
            required
          />
          <input type="hidden" name="role" value="admin" />
        </div>

        <div className="m-5">
          <input
            className="bg-slate-200 p-2 px-4 pr-20 border border-sky-500 focus:outline-none hover:border-sky-800"
            type="password"
            name="password"
            placeholder="New Password"
            required
          />
        </div>
        <div className="m-5">
          <input
            className="bg-slate-200 p-2 px-4 pr-20 border border-sky-500 focus:outline-none hover:border-sky-800"
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            required
          />
        </div>
        <div className="flex justify-center">
          <button className="m-5 rounded bg-blue-500 p-2" type="submit">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
