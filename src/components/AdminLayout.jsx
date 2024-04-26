import { Outlet } from "react-router-dom";
import logo from "../assets/logo.png";
import alert from "../assets/alert.svg";
import uz from "../assets/uz.png";
import profile from "../assets/profile.png";

const AdminLayout = () => {
  return (
    <>
      <div className="AdminLayout">
        <div className="box">
          <div className="left">
            <div className="sidebar_box">
              <div className="logo">
                <img src={logo} alt="" />
              </div>
              <div className="sidebar_item active">
                <img src="/img/dash.svg" alt="" />
                <div className="sidebar_p">Asosiy</div>
              </div>
              <div className="sidebar_item">
                <img src="/img/pack.svg" alt="" />
                <div className="sidebar_p">Paketlar</div>
              </div>
              <div className="sidebar_item">
                <img src="/img/clients.svg" alt="" />
                <div className="sidebar_p">Mijozlar</div>
              </div>
              <div className="sidebar_item">
                <img src="/img/staff.svg" alt="" />
                <div className="sidebar_p">Hodimlar</div>
              </div>
              <div className="sidebar_item">
                <img src="/img/branch.svg" alt="" />
                <div className="sidebar_p">Filiallar</div>
              </div>
              <div className="sidebar_item">
                <img src="/img/faq.svg" alt="" />
                <div className="sidebar_p">FAQ</div>
              </div>
              <div className="sidebar_item">
                <img src="/img/profile.svg" alt="" />
                <div className="sidebar_p">Pofile</div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="navbar">
              <div className="navbar_left">
                <img src="/img/bar.svg" alt="" />
                <div className="group">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
                    <g>
                      <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                    </g>
                  </svg>
                  <input className="input" type="search" placeholder="Search" />
                </div>
              </div>
              <div className="navbar_right">
                <div className="notification">
                  <img src={alert} alt="" />
                </div>
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
