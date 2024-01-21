import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

const AdminLogin = lazy(() => import("./components/AdminLogin"));
const AdminRegistration = lazy(() => import("./components/AdminRegistration"));
const ButtonComponent = lazy(() => import("./components/ButtonComponent"));
const CleanerLogin = lazy(() => import("./components/CleanerLogin"));
const Homepage = lazy(() => import("./components/Homepage"));
const LoginPage = lazy(() => import("./components/LoginPage"));
const SetBuilding = lazy(() => import("./components/SetBuilding"));

function App() {
  const routes = [
    {
      path: "/",
      component: Homepage,
    },
    {
      path: "/building-details",
      component: SetBuilding,
    },
    {
      path: "/login",
      component: CleanerLogin,
    },
    {
      path: "/login/admin",
      component: AdminLogin
    },
    {
      path: "/register",
      component: AdminRegistration,
    },
  ];

  return (
    <BrowserRouter>
      <AppBar />
      <Suspense fallback={"loading..."}>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

function AppBar() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-around mb-5 p-5">
      <ButtonComponent
        className={"bg-green-400 p-2 rounded"}
        onSelect={() => navigate("/")}
      >
        Go to homepage
      </ButtonComponent>
      <ButtonComponent className={"bg-red-400 p-2 rounded"} onSelect={() => navigate("/building-details")}>
        Building Details
      </ButtonComponent>
      <ButtonComponent className={"bg-blue-400 p-2 rounded"} onSelect={() => navigate("/register")}>
        Admin Registration
      </ButtonComponent>
      <ButtonComponent className={"bg-green-500 p-2 rounded"} onSelect={() => navigate("/login")}>
        Login
      </ButtonComponent>
      <ButtonComponent className={"bg-yellow-500 p-2 rounded"} onSelect={() => navigate("/login/admin")}>
        Login
      </ButtonComponent>

    </div>
  );
}
export default App;
