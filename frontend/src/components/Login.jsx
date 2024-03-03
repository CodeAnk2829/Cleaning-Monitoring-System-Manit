import Header from "./Header";
import { useState } from "react";
import { loginFields } from "../constants/formFields";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import Input from "./Input";
import { redirect } from "react-router-dom";

const fields = loginFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

function Login({ userType }) {
  const [loginState, setLoginState] = useState(fieldsState);

  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    authenticateUser();
  };

  //Handle Login API Integration here
  const authenticateUser = () => {
    // Your authentication logic here
    // Assuming authentication is successful, redirect the user
    // For demonstration purposes, I'll use a setTimeout to simulate authentication
    setTimeout(() => {
      // Redirect the user based on userType
      if (userType === "user") {
        redirect("/user/upload");
      } else {
        // Redirect admin to a different route if needed
        // history.push("/admin/dashboard");
      }
    }, 1000); // Simulate authentication delay
  };

  return (
    <>
      <Header
        heading={`Login to your ${
          userType === "admin" ? "admin" : "user"
        } account`}
        paragraph={`Don't have an account yet? `}
        linkName="Signup"
        linkUrl={`${userType === "user" ? "/user/signup" : "/admin/signup"}`}
      />
      <form className="mt-8 space-y-6">
        <div className="-space-y-px">
          {fields.map((field) => (
            <Input
              key={field.id}
              handleChange={handleChange}
              value={loginState[field.id]}
              labelText={field.labelText}
              labelFor={field.labelFor}
              id={field.id}
              name={field.name}
              type={field.type}
              isRequired={field.isRequired}
              placeholder={field.placeholder}
            />
          ))}
        </div>

        <FormExtra />
        <FormAction handleSubmit={handleSubmit} text="Login" />
      </form>
    </>
  );
}

export default Login;
