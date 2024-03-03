import { Outlet } from "react-router-dom";
import PageNav from "../components/PageNav";

function LoginLayout({ userType }) {
  return (
    <div className={`bg ${userType === 'admin' ? 'bg-red-200' : 'bg-blue-200'}`}>
      <PageNav userType={userType} />
      <Outlet />
    </div>
  );
}

export default LoginLayout;
