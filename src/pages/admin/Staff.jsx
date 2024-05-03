import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Staff = () => {
  const [modal, setModal] = useState(false);
  const nav = useNavigate();
  return (
    <>
      <div className={`Staff ${modal ? "active" : ""}`}>
        <div className="staff_container">
          <div className="staff_header">Hodimlar</div>
          <div className="package_function_box">
            <div className="search">
              <div className="group">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
                  <g>
                    <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                  </g>
                </svg>
                <input className="input" type="search" placeholder="Search" />
              </div>
            </div>
            <div className="filter">
              <select name="" id="">
                <option defaultChecked value="">
                  Filiall
                </option>
                <option value="">Comfort</option>
                <option value="">VIP</option>
              </select>
            </div>
            <div onClick={() => setModal(true)} className="add">
              <span className="material-symbols-outlined">add</span>
              <div>{"Qo'shish"}</div>
            </div>
          </div>
          <div className="staff_box">
            <div className="row">
              <div className="col-2 mb-3" onClick={() => nav("/staff/1")}>
                <div className="staff_item">
                  <div className="stafff_img">
                    <img src="/img/avatar.svg" alt="" />
                  </div>
                  <div className="stafff_name">Abdulaziz Kasimov</div>
                  <div className="stafff_role">Admin</div>
                  <div className="stafff_phone">+998977165434</div>
                  <div className="stafff_filiall">IT Park Filialli</div>
                </div>
              </div>
              <div className="col-2 mb-3">
                <div className="staff_item">
                  <div className="stafff_img">
                    <img src="/img/avatar.svg" alt="" />
                  </div>
                  <div className="stafff_name">Abdulaziz Kasimov</div>
                  <div className="stafff_role">Admin</div>
                  <div className="stafff_phone">+998977165434</div>
                  <div className="stafff_filiall">IT Park Filialli</div>
                </div>
              </div>
              <div className="col-2 mb-3">
                <div className="staff_item">
                  <div className="stafff_img">
                    <img src="/img/avatar.svg" alt="" />
                  </div>
                  <div className="stafff_name">Abdulaziz Kasimov</div>
                  <div className="stafff_role">Admin</div>
                  <div className="stafff_phone">+998977165434</div>
                  <div className="stafff_filiall">IT Park Filialli</div>
                </div>
              </div>
              <div className="col-2 mb-3">
                <div className="staff_item">
                  <div className="stafff_img">
                    <img src="/img/avatar.svg" alt="" />
                  </div>
                  <div className="stafff_name">Abdulaziz Kasimov</div>
                  <div className="stafff_role">Admin</div>
                  <div className="stafff_phone">+998977165434</div>
                  <div className="stafff_filiall">IT Park Filialli</div>
                </div>
              </div>
              <div className="col-2 mb-3">
                <div className="staff_item">
                  <div className="stafff_img">
                    <img src="/img/avatar.svg" alt="" />
                  </div>
                  <div className="stafff_name">Abdulaziz Kasimov</div>
                  <div className="stafff_role">Admin</div>
                  <div className="stafff_phone">+998977165434</div>
                  <div className="stafff_filiall">IT Park Filialli</div>
                </div>
              </div>
              <div className="col-2 mb-3">
                <div className="staff_item">
                  <div className="stafff_img">
                    <img src="/img/avatar.svg" alt="" />
                  </div>
                  <div className="stafff_name">Abdulaziz Kasimov</div>
                  <div className="stafff_role">Admin</div>
                  <div className="stafff_phone">+998977165434</div>
                  <div className="stafff_filiall">IT Park Filialli</div>
                </div>
              </div>
              <div className="col-2 mb-3">
                <div className="staff_item">
                  <div className="stafff_img">
                    <img src="/img/avatar.svg" alt="" />
                  </div>
                  <div className="stafff_name">Abdulaziz Kasimov</div>
                  <div className="stafff_role">Admin</div>
                  <div className="stafff_phone">+998977165434</div>
                  <div className="stafff_filiall">IT Park Filialli</div>
                </div>
              </div>
              <div className="col-2 mb-3">
                <div className="staff_item">
                  <div className="stafff_img">
                    <img src="/img/avatar.svg" alt="" />
                  </div>
                  <div className="stafff_name">Abdulaziz Kasimov</div>
                  <div className="stafff_role">Admin</div>
                  <div className="stafff_phone">+998977165434</div>
                  <div className="stafff_filiall">IT Park Filialli</div>
                </div>
              </div>
              <div className="col-2 mb-3">
                <div className="staff_item">
                  <div className="stafff_img">
                    <img src="/img/avatar.svg" alt="" />
                  </div>
                  <div className="stafff_name">Abdulaziz Kasimov</div>
                  <div className="stafff_role">Admin</div>
                  <div className="stafff_phone">+998977165434</div>
                  <div className="stafff_filiall">IT Park Filialli</div>
                </div>
              </div>
              <div className="col-2 mb-3">
                <div className="staff_item">
                  <div className="stafff_img">
                    <img src="/img/avatar.svg" alt="" />
                  </div>
                  <div className="stafff_name">Abdulaziz Kasimov</div>
                  <div className="stafff_role">Admin</div>
                  <div className="stafff_phone">+998977165434</div>
                  <div className="stafff_filiall">IT Park Filialli</div>
                </div>
              </div>
              <div className="col-2 mb-3">
                <div className="staff_item">
                  <div className="stafff_img">
                    <img src="/img/avatar.svg" alt="" />
                  </div>
                  <div className="stafff_name">Abdulaziz Kasimov</div>
                  <div className="stafff_role">Admin</div>
                  <div className="stafff_phone">+998977165434</div>
                  <div className="stafff_filiall">IT Park Filialli</div>
                </div>
              </div>
              <div className="col-2 mb-3">
                <div className="staff_item">
                  <div className="stafff_img">
                    <img src="/img/avatar.svg" alt="" />
                  </div>
                  <div className="stafff_name">Abdulaziz Kasimov</div>
                  <div className="stafff_role">Admin</div>
                  <div className="stafff_phone">+998977165434</div>
                  <div className="stafff_filiall">IT Park Filialli</div>
                </div>
              </div>
              <div className="col-2 mb-3">
                <div className="staff_item">
                  <div className="stafff_img">
                    <img src="/img/avatar.svg" alt="" />
                  </div>
                  <div className="stafff_name">Abdulaziz Kasimov</div>
                  <div className="stafff_role">Admin</div>
                  <div className="stafff_phone">+998977165434</div>
                  <div className="stafff_filiall">IT Park Filialli</div>
                </div>
              </div>
              <div className="col-2 mb-3">
                <div className="staff_item">
                  <div className="stafff_img">
                    <img src="/img/avatar.svg" alt="" />
                  </div>
                  <div className="stafff_name">Abdulaziz Kasimov</div>
                  <div className="stafff_role">Admin</div>
                  <div className="stafff_phone">+998977165434</div>
                  <div className="stafff_filiall">IT Park Filialli</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {modal ? (
        <>
          <div className={`modalcha_box StaffModal`}>
            <div onClick={() => setModal(false)} className="mod_shadow"></div>
            <form className="modalcha">
              <div className="mod_name_box">
                <div className="modal_header">Hodim {"Qo'shish"}</div>
                <img
                  onClick={() => setModal(false)}
                  src="/img/icon_x.png"
                  alt=""
                />
              </div>
              <div className="inp_wr_box mt-5">
                <div className="inputWrap1">
                  <div className="input_label">F.I.O</div>
                  <input type="text" placeholder="F.I.O" />
                </div>
                <div className="inputWrap1 mt-3">
                  <div className="input_label">Tel (Login)</div>
                  <input type="text" placeholder="Tel (Login)" />
                </div>
              </div>
              <div className="inp_wr_box mt-2">
                <div className="inputWrap1 mt-3">
                  <div className="input_label">Filiall</div>
                  <select className="inp_inp" name="" id="">
                    <option value="">Tanlang</option>
                  </select>
                </div>
                <div className="inputWrap1 mt-3">
                  <div className="input_label">Rol</div>
                  <select className="inp_inp" name="" id="">
                    <option value="">Tanlang</option>
                  </select>
                </div>
              </div>
              <div className="btn_group">
                <button type="submit">Saqlash</button>
              </div>
            </form>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Staff;
