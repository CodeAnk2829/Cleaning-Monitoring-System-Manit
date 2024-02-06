import LoginPage from "./LoginPage";

export default function AdminLogin() {
  console.log("admin-login render");

  return (
    <>
      <LoginPage role={"admin"} />
    </>
  );
}
