// export default function Homepage() {
//   console.log("homepage render");

//   return (
//     <div>
//       <h1>Homepage</h1>
//     </div>
//   );
// }


// import React, { useState } from 'react';
// import './styles-login.css';

// export default function Homepage() {
//   const [isLogin, setIsLogin] = useState(true);

//   function handleLoginClick() {
//     setIsLogin(true);
//   }

//   function handleRegisterClick() {
//     setIsLogin(false);
//   }

//   return (
//     <div className="wrapper">
//       <div className="form-box">
//         {/* Login Form */}
//         <div className={isLogin ? "login-container" : "login-container hidden"}>
//           <div className="top">
//             <span>Don't have an account? <a href="#" onClick={handleRegisterClick}>Sign Up</a></span>
//             <header>Login</header>
//           </div>
//           <div className="input-box">
//             <input type="text" className="input-field" placeholder="Username or Email" id="loginname" />
//             <i className="bx bx-user"></i>
//           </div>
//           <div className="input-box">
//             <input type="password" className="input-field" placeholder="Password" />
//             <i className="bx bx-lock-alt"></i>
//           </div>
//           <div className="input-box">
//             <a href="cleaner-dashboard.html">
//               <input type="submit" className="submit" value="Sign In" />
//             </a>
//           </div>
//           <div className="two-col">
//             <div className="one"></div>
//             <div className="two">
//               <label><a href="Admin-login.html">Admin Login</a></label>
//             </div>
//           </div>
//         </div>

//         {/* Registration Form */}
//         <div className={isLogin ? "register-container hidden" : "register-container"}>
//           <div className="top">
//             <span>Have an account? <a href="login.html" onClick={handleLoginClick}>Login</a></span>
//             <header>Sign Up</header>
//           </div>
//           <div className="two-forms">
//             <div className="input-box">
//               <input type="text" className="input-field" placeholder="Firstname" id="registername" />
//               <i className="bx bx-user"></i>
//             </div>
//             <div className="input-box">
//               <input type="text" className="input-field" placeholder="Lastname" />
//               <i className="bx bx-user"></i>
//             </div>
//           </div>
//           <div className="input-box">
//             <input type="text" className="input-field" placeholder="Email" />
//             <i className="bx bx-envelope"></i>
//           </div>
//           <div className="input-box">
//             <input type="password" className="input-field" placeholder="Password" />
//             <i className="bx bx-lock-alt"></i>
//           </div>
//           <div className="input-box">
//             <a href="login.html">
//               <input type="submit" className="submit" value="Register" />
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState } from 'react';
import UserLogin from './UserLogin';
import AdminLogin from './AdminLogin';

export default function Homepage() {
  const [isUserLogin, setIsUserLogin] = useState(true);

  function handleLoginToggle() {
    setIsUserLogin(!isUserLogin);
  }

  return (
    <div className="wrapper">
      <div className="form-box">
        {isUserLogin ? <UserLogin /> : <AdminLogin />}
        <div className="two-col">
          <div className="one"></div>
          <div className="two">
            <label><a href="#" onClick={handleLoginToggle}>{isUserLogin ? 'Admin Login' : 'User Login'}</a></label>
          </div>
        </div>
      </div>
    </div>
  );
}
