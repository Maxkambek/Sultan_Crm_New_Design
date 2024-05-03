import { Outlet, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
// import alert from "../assets/alert.svg";
import uz from "../assets/uz.png";
import profile from "../assets/profile.png";

const AdminLayout = () => {
  const nav = useNavigate();
  const location = useLocation();

  return (
    <>
      <div className="AdminLayout">
        <div className="box">
          <div className="left">
            <div className="sidebar_box">
              <div className="logo">
                <img src={logo} alt="" />
              </div>
              <div
                onClick={() => nav("/dashboard")}
                className={`sidebar_item ${
                  location.pathname === "/dashboard" && "active"
                }`}
              >
                <img
                  src={
                    location.pathname === "/dashboard"
                      ? "/img/wdash.svg"
                      : "/img/dash.svg"
                  }
                  alt=""
                />
                <div className={`sidebar_p`}>Asosiy</div>
              </div>
              <div
                onClick={() => nav("/package")}
                className={`sidebar_item ${
                  location.pathname === "/package" && "active"
                }`}
              >
                <img
                  src={
                    location.pathname === "/package"
                      ? "/img/wpack.svg"
                      : "/img/pack.svg"
                  }
                  alt=""
                />
                <div className={`sidebar_p`}>Paketlar</div>
              </div>
              <div
                onClick={() => nav("/staff")}
                className={`sidebar_item ${
                  location.pathname === "/staff" && "active"
                }`}
              >
                <img
                  src={
                    location.pathname === "/staff"
                      ? "/img/wstaff.svg"
                      : "/img/staff.svg"
                  }
                  alt=""
                />
                <div className={`sidebar_p`}>Hodimlar</div>
              </div>
              <div
                onClick={() => nav("/branch")}
                className={`sidebar_item ${
                  location.pathname === "/branch" && "active"
                }`}
              >
                <img
                  src={
                    location.pathname === "/branch"
                      ? "/img/wbranch.svg"
                      : "/img/branch.svg"
                  }
                  alt=""
                />
                <div className={`sidebar_p`}>Filiallar</div>
              </div>
              <div
                onClick={() => nav("/clients")}
                className={`sidebar_item ${
                  location.pathname === "/clients" && "active"
                }`}
              >
                <img
                  src={
                    location.pathname === "/clients"
                      ? "/img/wclients.svg"
                      : "/img/clients.svg"
                  }
                  alt=""
                />
                <div className={`sidebar_p`}>Mijozlar</div>
              </div>
              <div
                onClick={() => nav("/faq")}
                className={`sidebar_item ${
                  location.pathname === "/faq" && "active"
                }`}
              >
                <img
                  src={
                    location.pathname === "/faq"
                      ? "/img/wfaq.svg"
                      : "/img/faq.svg"
                  }
                  alt=""
                />
                <div className={`sidebar_p`}>FAQ</div>
              </div>
              <div
                onClick={() => nav("/profile")}
                className={`sidebar_item ${
                  location.pathname === "/profile" && "active"
                }`}
              >
                <img
                  src={
                    location.pathname === "/profile"
                      ? "/img/wprofile.svg"
                      : "/img/profile.svg"
                  }
                  alt=""
                />
                <div className={`sidebar_p`}>Profile</div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="navbar">
              <div className="navbar_left">
                <img src="/img/bar.svg" alt="" />
                {/* <div className="group">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
                    <g>
                      <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                    </g>
                  </svg>
                  <input className="input" type="search" placeholder="Search" />
                </div> */}
              </div>
              <div className="navbar_right">
                {/* <div className="notification">
                  <img src={alert} alt="" />
                </div> */}
                <div className="language">
                  <img className="lan_icon" src={uz} alt="" />
                  <select name="" id="">
                    <option defaultChecked value="Uzbek">
                      Uzbek
                    </option>
                    <option value="Latin">Latin</option>
                    <option value="Russian">Russian</option>
                  </select>
                </div>
                <div className="profile">
                  <img src={profile} alt="" />
                  <div className="p_box">
                    <div className="p_box_h">Moni Roy</div>
                    <div className="p_box_p">Admin</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="main">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
