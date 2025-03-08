import { Link } from "react-router-dom";
import Battery from "../images/battery.png"
const LoginPage = () => {
  return (
    <div className="h-[100vh] bg-green-400">
      <div className="text-center flex flex-col justify-center items-center">
        <div className="header">
          <div className="text-center flex justify-center items-center">
            <h2>"It's not WASTE until it's WASTED"</h2>
          </div>
          <div className="logo-container">
            <div className="logo-inner">
              <img
                src={Battery}
                alt="error"
                className="user-avatar"
              />
            </div>
          </div>
        </div>

        <div className="form-container">
          <h3 className="form-title">Welcome Back</h3>

          <form>
            <input
              type="email"
              placeholder="Email Address"
              className="input"
            />

            <input
              type="password"
              placeholder="Password"
              className="input"
            />

            <button type="submit" className="button">
              <span>Login</span>
              <span className="icon">→</span>
            </button>
          </form>

          <div className="toggle-text">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;