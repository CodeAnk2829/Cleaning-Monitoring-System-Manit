// import { lazy, Suspense } from "react";
// import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

// const AdminLogin = lazy(() => import("./components/AdminLogin"));
// const AdminRegistration = lazy(() => import("./components/AdminRegistration"));
// const ButtonComponent = lazy(() => import("./components/ButtonComponent"));
// const CleanerLogin = lazy(() => import("./components/CleanerLogin"));
// const FeedbackPageHandle = lazy(() => import("./components/FeedbackPageHandling"));
// const Homepage = lazy(() => import("./components/Homepage"));
// const LoginPage = lazy(() => import("./components/LoginPage"));
// const SetBuilding = lazy(() => import("./components/SetBuilding"));

// function App() {
//   const routes = [
//     {
//       path: "/",
//       component: Homepage,
//     },
//     {
//       path: "/building-details",
//       component: SetBuilding,
//     },
//     {
//       path: "/feedback",
//       component: FeedbackPageHandle
//     },
//     {
//       path: "/login",
//       component: CleanerLogin,
//     },
//     {
//       path: "/login/admin",
//       component: AdminLogin
//     },
//     {
//       path: "/register",
//       component: AdminRegistration,
//     },
//   ];

//   return (
//     <BrowserRouter>
//       <AppBar />
//       <Suspense fallback={"loading..."}>
//         <Routes>
//           {routes.map((route, index) => (
//             <Route
//               key={index}
//               path={route.path}
//               element={<route.component />}
//             />
//           ))}
//         </Routes>
//       </Suspense>
//     </BrowserRouter>
//   );
// }

// function AppBar() {
//   const navigate = useNavigate();
//   return (
//     <div className="flex justify-around mb-5 p-5">
//       <ButtonComponent
//         className={"bg-green-400 p-2 rounded"}
//         onSelect={() => navigate("/")}
//       >
//         Go to homepage
//       </ButtonComponent>
//       <ButtonComponent className={"bg-red-400 p-2 rounded"} onSelect={() => navigate("/building-details")}>
//         Building Details
//       </ButtonComponent>
//       <ButtonComponent className={"bg-blue-400 p-2 rounded"} onSelect={() => navigate("/register")}>
//         Admin Registration
//       </ButtonComponent>
//       <ButtonComponent className={"bg-green-500 p-2 rounded"} onSelect={() => navigate("/login")}>
//         Login
//       </ButtonComponent>
//       <ButtonComponent className={"bg-yellow-500 p-2 rounded"} onSelect={() => navigate("/login/admin")}>
//         Login
//       </ButtonComponent>
//       <ButtonComponent className={"bg-purple-500 p-2 rounded"} onSelect={() => navigate("/feedback")}>
//         Feedback
//       </ButtonComponent>

//     </div>
//   );
// }
// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginLayout from "./pages/LoginLayout";
import Feedback from "./pages/Feedback";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import Signup from "./components/Signup";
import Login from "./components/Login";
import UserUpload from "./components/UserUpload";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="user/" element={<LoginLayout userType="user" />}>
          <Route index element={<Login userType="user" />} />
          <Route path="signup" element={<Signup userType="user" />} />{" "}
          <Route path="upload" element={<UserUpload />} />
        </Route>

        <Route path="admin/" element={<LoginLayout userType="admin" />}>
          <Route index element={<Login userType="admin" />} />
          <Route path="signup" element={<Signup userType="admin" />} />
        </Route>

        <Route path="feedback" element={<Feedback />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
