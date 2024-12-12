import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useState } from 'react';

function Header(props) {

  // Function to get user login data from localStorage
  let getUserLoginData = () => {
    let token = localStorage.getItem("E-commerce Application for Organic Dog Treats");
    if (token == null) {
      return false;
    } else {
      try {
        let result = jwtDecode(token);
        return result;
      } catch (error) {
        localStorage.removeItem("E-commerce Application for Organic Dog Treats");
        return false;
      }
    }
  };

  let [user] = useState(getUserLoginData());

  // Success handler for Google Login
  const onSuccess = (response) => {
    let token = response.credential;
    localStorage.setItem('E-commerce Application for Organic Dog Treats', token);
    alert("Login successful");
    window.location.assign("/"); // Redirect to the home page
  };

  // Error handler for Google Login
  const onError = () => {
    console.log('Login Failed');
  };

  // Logout function
  const logout = () => {
    let doLogout = window.confirm("Are you sure you want to logout?");
    if (doLogout === true) {
      localStorage.removeItem("E-commerce Application for Organic Dog Treats");
      window.location.assign("/"); // Redirect to the home page
    }
  };

  return (
    <GoogleOAuthProvider clientId="906025590542-g3ti1q14rc9cl07lvm7j9vu0c695urov.apps.googleusercontent.com">
      {/* Removed the app-header div */}
      <div className="d-flex justify-content-between align-items-center py-3">
      

        {/* Login/Logout Button */}
        <div className="login-btn">
          {user === false ? (
            <button className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#google-login">
              Login
            </button>
          ) : (
            <>
              <span className="fw-bold text-blue">
                Welcome, {user.email.split("@")[0]}
              </span>
              <button onClick={logout} className="logout btn btn-outline-primary m-3 ms-3 btn-sm">
                Logout
              </button>
            </>
          )}
        </div>
      </div>

      {/* Google Login Modal */}
      <div className="modal fade" id="google-login" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Login</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <GoogleLogin onSuccess={onSuccess} onError={onError} />
            </div>
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}

export default Header;
