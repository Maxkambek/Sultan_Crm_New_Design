import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
const Branchs = () => {
  const [modal, setModal] = useState(false);
  const nav = useNavigate();
  return (
    <>
      <div className={`Branchs ${modal ? "active" : ""}`}>
        <div className="branchs_container">
          <div className="branches_header">Filiallar {"ro'yhati"}</div>
          <div className="branch_function_box">
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
            <div onClick={() => setModal(true)} className="add">
              <button className="">
                <span className="transition"></span>
                <span className="gradient"></span>
                <span className="label">{"Qo'shish"}</span>
              </button>
            </div>
          </div>
          <div className="row branch_main">
            <div onClick={() => nav("/branch/1")} className="col-3 parent">
              <div className="card">
                <div className="content-box">
                  <div className="card-title">IT Park Filiali</div>
                  <div className="card-content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptas autem sapiente voluptates, reprehenderit quos nemo,
                    doloribus dignissimos iste ullam rem ex eaque modi fugit
                    perferendis iure odit distinctio! Quod, sapiente?
                  </div>
                  <span className="see-more">See More</span>
                </div>
                <div className="date-box">
                  <span className="month">JUNE</span>
                  <span className="date">29 </span>
                </div>
              </div>
            </div>
            <div className="col-3 parent active">
              <div className="card">
                <div className="content-box">
                  <div className="card-title">IT Park Filiali</div>
                  <div className="card-content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptas autem sapiente voluptates, reprehenderit quos nemo,
                    doloribus dignissimos iste ullam rem ex eaque modi fugit
                    perferendis iure odit distinctio! Quod, sapiente?
                  </div>
                  <span className="see-more">See More</span>
                </div>
                <div className="date-box">
                  <span className="month">JUNE</span>
                  <span className="date">29 </span>
                </div>
              </div>
            </div>
            <div className="col-3 parent activee">
              <div className="card">
                <div className="content-box">
                  <div className="card-title">IT Park Filiali</div>
                  <div className="card-content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptas autem sapiente voluptates, reprehenderit quos nemo,
                    doloribus dignissimos iste ullam rem ex eaque modi fugit
                    perferendis iure odit distinctio! Quod, sapiente?
                  </div>
                  <span className="see-more">See More</span>
                </div>
                <div className="date-box">
                  <span className="month">JUNE</span>
                  <span className="date">29 </span>
                </div>
              </div>
            </div>
            <div className="col-3 parent activeee">
              <div className="card">
                <div className="content-box">
                  <div className="card-title">IT Park Filiali</div>
                  <div className="card-content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptas autem sapiente voluptates, reprehenderit quos nemo,
                    doloribus dignissimos iste ullam rem ex eaque modi fugit
                    perferendis iure odit distinctio! Quod, sapiente?
                  </div>
                  <span className="see-more">See More</span>
                </div>
                <div className="date-box">
                  <span className="month">JUNE</span>
                  <span className="date">29 </span>
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
                <div className="modal_header">Filiall {"Qo'shish"}</div>
                <img
                  onClick={() => setModal(false)}
                  src="/img/icon_x.png"
                  alt=""
                />
              </div>
              <div className="inp_wr_box mt-5">
                <div className="inputWrap1">
                  <div className="input_label">Filiall Nomi</div>
                  <input type="text" placeholder="Filiall Nomi" />
                </div>
                <div className="inputWrap1 mt-3">
                  <div className="input_label">Boshligi</div>{" "}
                  <select className="inp_inp" name="" id="">
                    <option value="">Tanlang</option>
                  </select>
                </div>
              </div>
              <div className="inp_wr_box mt-2">
                <div className="inputWrap1 mt-3">
                  <div className="input_label">Address</div>
                  <input type="text" placeholder="Address" />
                </div>
                <div className="inputWrap1 mt-3">
                  <div className="input_label">Telefon Raqami</div>
                  <input type="text" placeholder="Telefon Raqami" />
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

export default Branchs;
