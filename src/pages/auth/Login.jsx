import { useState } from "react";
import closeEye from "../../assets/closeEye.svg";
import openEye from "../../assets/opneEye.svg";

const Login = () => {
  const [isPassword, setIsPassword] = useState(true);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <div className="Login">
        <div className="container">
          <div className="row">
            <div className="col-2"></div>
            <form className="col-8 login_form" action="">
              <div className="form_header">
                <div className="form_h">Login to Account</div>
                <div className="form_p">
                  Please enter your email and password to continue
                </div>
                <div className="inputWrap">
                  <div className="input_h">Login</div>
                  <input
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                    required
                    type="text"
                    id="Логин"
                    className="form-control mb-3"
                  />
                </div>

                <div className="inputWrap">
                  <div className="input_h">Password</div>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    type={isPassword ? "password" : "text"}
                    id="Пароль"
                    className="form-control"
                  />
                  {isPassword ? (
                    <div
                      onClick={() => setIsPassword(false)}
                      className="openEye eye"
                    >
                      <img src={openEye} alt="" />
                    </div>
                  ) : (
                    <div
                      onClick={() => setIsPassword(true)}
                      className="closeEye eye"
                    >
                      <img src={closeEye} alt="" />
                    </div>
                  )}
                </div>
                <button
                  disabled={isLoading}
                  className="btn myBtn"
                  type="submit"
                >
                  {isLoading && (
                    <i className="spinner-border spinner-border-sm text-blue text-dark me-2"></i>
                  )}
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
