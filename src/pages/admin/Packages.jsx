import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Packages = () => {
  const [modal, setModal] = useState(false);
  const nav = useNavigate();
  const handleClose = () => {
    setModal(false);
  };

  return (
    <>
      <div className={`Packages ${modal ? "active" : ""}`}>
        <div className="package_container">
          <div className="package_header">Paketlar</div>
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
                <option value="">Standard</option>
                <option value="">Comfort</option>
                <option value="">VIP</option>
              </select>
            </div>
            <div onClick={() => setModal(true)} className="add">
              <span className="material-symbols-outlined">add</span>
              <div>{"Qo'shish"}</div>
            </div>
          </div>
          <div className="package_main">
            <div className="row">
              <div className="col-3">
                <div className="pack_item">
                  <div className="ag-courses-item_bg"></div>
                  <div className="pack_name">Rahmat Toplami</div>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="pack_date">24-05-2024</div>
                    <div className="pack_type">Standard</div>
                  </div>
                  <div className="pack_price">1190$</div>
                  <div className="pack_edit">
                    <div className="count">12/100</div>
                    <img src="/img/pen.svg" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="pack_item">
                  <div className="ag-courses-item_bg active"></div>
                  <div className="pack_name">Rahmat Toplami</div>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="pack_date">24-05-2024</div>
                    <div className="pack_type">Standard</div>
                  </div>
                  <div className="pack_price">1190$</div>
                  <div className="pack_edit">
                    <div className="count">12/100</div>
                    <img src="/img/pen.svg" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="pack_item">
                  <div className="ag-courses-item_bg active"></div>
                  <div className="pack_name">Rahmat Toplami</div>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="pack_date">24-05-2024</div>
                    <div className="pack_type">Standard</div>
                  </div>
                  <div className="pack_price">1190$</div>
                  <div className="pack_edit">
                    <div className="count">12/100</div>
                    <img src="/img/pen.svg" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="pack_item">
                  <div className="ag-courses-item_bg active"></div>
                  <div className="pack_name">Rahmat Toplami</div>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="pack_date">24-05-2024</div>
                    <div className="pack_type">Standard</div>
                  </div>
                  <div className="pack_price">1190$</div>
                  <div className="pack_edit">
                    <div className="count">12/100</div>
                    <img src="/img/pen.svg" alt="" />
                  </div>
                </div>
              </div>

              <div className="col-3">
                <div className="pack_item">
                  <div className="ag-courses-item_bg active"></div>
                  <div className="pack_name">Rahmat Toplami</div>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="pack_date">24-05-2024</div>
                    <div className="pack_type">Standard</div>
                  </div>
                  <div className="pack_price">1190$</div>
                  <div className="pack_edit">
                    <div className="count">12/100</div>
                    <img src="/img/pen.svg" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="pack_item">
                  <div className="ag-courses-item_bg active"></div>
                  <div className="pack_name">Rahmat Toplami</div>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="pack_date">24-05-2024</div>
                    <div className="pack_type">Standard</div>
                  </div>
                  <div className="pack_price">1190$</div>
                  <div className="pack_edit">
                    <div className="count">12/100</div>
                    <img src="/img/pen.svg" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="pack_item">
                  <div className="ag-courses-item_bg active"></div>
                  <div className="pack_name">Rahmat Toplami</div>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="pack_date">24-05-2024</div>
                    <div className="pack_type">Standard</div>
                  </div>
                  <div className="pack_price">1190$</div>
                  <div className="pack_edit">
                    <div className="count">12/100</div>
                    <img src="/img/pen.svg" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="pack_item">
                  <div className="ag-courses-item_bg active"></div>
                  <div className="pack_name">Rahmat Toplami</div>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="pack_date">24-05-2024</div>
                    <div className="pack_type">Standard</div>
                  </div>
                  <div className="pack_price">1190$</div>
                  <div className="pack_edit">
                    <div className="count">12/100</div>
                    <img src="/img/pen.svg" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="pack_item">
                  <div className="ag-courses-item_bg activee"></div>
                  <div className="pack_name">Rahmat Toplami</div>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="pack_date">24-05-2024</div>
                    <div className="pack_type">Standard</div>
                  </div>
                  <div className="pack_price">1190$</div>
                  <div className="pack_edit">
                    <div className="count">12/100</div>
                    <img src="/img/pen.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {modal ? (
        <>
          <div className={`modalcha_box`}>
            <div onClick={() => setModal(false)} className="mod_shadow"></div>
            <form className="modalcha">
              <div className="mod_name_box">
                <div className="modal_header">Paket {"Qo'shish"}</div>
                <img onClick={handleClose} src="/img/icon_x.png" alt="" />
              </div>{" "}
              <div className="inp_wr_box">
                <div className="inputWrap1">
                  <div className="input_label">Tur Paket Nomi</div>
                  <input type="text" placeholder="Tur Paket Nomi" />
                </div>
                <div className="inputWrap1">
                  <div className="input_label">Safar davomiyligi kun</div>
                  <input type="text" placeholder="Safar davomiyligi kun" />
                </div>
              </div>
              <div className="inp_wr_box">
                <div className="inputWrap1">
                  <div className="input_label">Uchish kuni va vaqti</div>
                  <input type="date" placeholder="Uchish kuni va vaqti" />
                </div>
                <div className="inputWrap1">
                  <div className="input_label">Qaytish kuni va vaqti</div>
                  <input type="date" placeholder="Qaytish kuni va vaqti" />
                </div>
              </div>
              <div className="inp_wr_box">
                <div className="inputWrap1">
                  <div className="input_label">Paket Turi</div>
                  <select className="inp_inp" name="" id="">
                    <option value="">Standart</option>
                  </select>
                </div>
                <div className="inputWrap1">
                  <div className="input_label">Narxi $</div>
                  <input type="text" placeholder="Tur Paket Nomi" />
                </div>
              </div>
              <div className="inp_wr_box">
                <div className="inputWrap1">
                  <div className="input_label">Reys Ma’lumotlari</div>
                  <input type="text" placeholder="Reys Ma’lumotlari" />
                </div>
                <div className="inputWrap1">
                  <div className="input_label">Avia kompaniya</div>
                  <input type="text" placeholder="Avia kompaniya" />
                </div>
              </div>
              <div className="inp_wr_box">
                <div className="inputWrap1">
                  <div className="input_label">Paket Joylar soni _ ta</div>
                  <input type="text" placeholder="Paket Joylar soni _ ta" />
                </div>
                <div className="inputWrap1">
                  <div className="input_label">Madina Hotel</div>
                  <input type="text" placeholder="Madina Hotel" />
                </div>
              </div>
              <div className="inp_wr_box">
                <div className="inputWrap1">
                  <div className="input_label">Madina da davomiyligi</div>
                  <input type="text" placeholder="Madina da davomiyligi" />
                </div>
                <div className="inputWrap1">
                  <div className="input_label">Madinada ovqatlanish</div>
                  <input type="text" placeholder="Madinada ovqatlanish" />
                </div>
              </div>
              <div className="inp_wr_box">
                <div className="inputWrap1">
                  <div className="input_label">Makka Hotel</div>
                  <input type="text" placeholder="Makka Hotel" />
                </div>
                <div className="inputWrap1">
                  <div className="input_label">Makka da davomiyligi</div>
                  <input type="text" placeholder="Makka da davomiyligi" />
                </div>
              </div>
              <div className="inp_wr_box">
                <div className="inputWrap1">
                  <div className="input_label">Makkada ovqatlanish</div>
                  <input type="text" placeholder="Makkada ovqatlanish" />
                </div>
                <div className="inputWrap1">
                  <div className="input_label">{`Qo'shimcha`}</div>
                  <input type="text" placeholder="Qo'shimcha" />
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

export default Packages;
