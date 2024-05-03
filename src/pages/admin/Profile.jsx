import { LineChart, lineElementClasses } from "@mui/x-charts/LineChart";
import { useState } from "react";

const Profile = () => {
  const [modal, setModal] = useState(false);
  const [image, setImage] = useState("");
  const uData = [
    4000, 3000, 2000, 2780, 1890, 2390, 3490, 2450, 2600, 2070, 2190, 3000,
  ];
  const xLabels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return (
    <div className="StaffDetail">
      <div className="staff_container">
        <div className="staff_header">Mening profilim</div>
        <div className="staff_profile_box">
          <div className="row d-flex">
            <div className={`col-4 ${modal ? "d-none" : ""}`}>
              <div className="for_bg">
                <div className="staff_prof">
                  <img src="/img/avatar.svg" alt="" />
                  <div className="staff_name">
                    <div className="staff_name_h">Abdulaziz Mamadaliyev</div>
                    <div className="staff_name_p">Operator</div>
                  </div>
                </div>
                <div className="prof_item">
                  <div className="prof_item_h">Filiall</div>
                  <div className="prof_item_p">IT Park Filialli</div>
                </div>
                <div className="prof_item">
                  <div className="prof_item_h">{"Qo'shilgan vaqti"}</div>
                  <div className="prof_item_p">12.01.2024</div>
                </div>
                <div className="prof_item">
                  <div className="prof_item_h">{"Telefon raqami"}</div>
                  <div className="prof_item_p">+998977165434</div>
                </div>
                <div className="prof_btn_box">
                  <div onClick={() => setModal(true)} className="btn_edit">
                    <img src="/img/settings.svg" alt="" />
                    <div>{"O'zgartirish"}</div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`col-4 profile_first ${modal ? "active" : "d-none"}`}
            >
              <div className="for_bg">
                <div className="prof_item_avatar">
                  <label htmlFor="fileField">
                    <img
                      className="user_image"
                      src={image ? URL.createObjectURL(image) : "/img/user.png"}
                      alt=""
                    />
                  </label>
                  <input
                    onChange={(e) => setImage(e.target.files[0])}
                    hidden
                    type="file"
                    id="fileField"
                    name="file"
                    accept="image/*"
                  />
                  <input type="file" hidden />
                  <div className="prof_item_h">Profile rasm</div>
                </div>
                <div className="prof_item">
                  <div className="prof_item_h">F.I.O</div>
                  <input type="text" placeholder="Ism Familiya" />
                </div>
                <div className="prof_item">
                  <div className="prof_item_h">Filiall</div>
                  <div className="prof_item_p">IT Park Filialli</div>
                </div>
                <div className="prof_item">
                  <div className="prof_item_h">{"Qo'shilgan vaqti"}</div>
                  <div className="prof_item_p">12.01.2024</div>
                </div>
                <div className="prof_item">
                  <div className="prof_item_h">{"Telefon raqami"}</div>
                  <div className="prof_item_p">+998977165434</div>
                </div>
                <div className="prof_btn_box">
                  <div onClick={() => setModal(false)} className="btn_edit">
                    <img src="/img/settings.svg" alt="" />
                    <div>{"O'zgartirish"}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-8">
              <div className="stat_box for_bg">
                <div className="filter_select">
                  <select name="" id="">
                    <option value="">2024</option>
                    <option value="">2025</option>
                    <option value="">2026</option>
                  </select>
                </div>
                <div className="chart">
                  <LineChart
                    height={400}
                    series={[{ data: uData, area: true, showMark: false }]}
                    xAxis={[{ scaleType: "point", data: xLabels }]}
                    sx={{
                      [`& .${lineElementClasses.root}`]: {
                        display: "none",
                      },
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="latest_box">
          <div className="latest_header">
            <div className="latest_name">{"Mening mijozlarim"}</div>
            <div className="filter_select">
              <select name="" id="">
                <option value="">October</option>
                <option value="">October</option>
                <option value="">October</option>
              </select>
            </div>
          </div>
          <div className="latest_main">
            <div className="main_header">
              <div className="main_h_1">#</div>
              <div className="main_h_2">F.I.O</div>
              <div className="main_h_2">Pass Num</div>
              <div className="main_h_2">Paket</div>
              <div className="main_h_2">Narxi</div>
              <div className="main_h_2">Status</div>
            </div>
            <div className="main_body">
              <div className="main_p_1">1</div>
              <div className="main_p_2">Kasimov Mahkam</div>
              <div className="main_p_2">KA0973135</div>
              <div className="main_p_2">25.04.2024</div>
              <div className="main_p_2">1130$</div>
              <div className="main_p_2 btn">Bajarilgan</div>
            </div>
            <div className="main_body">
              <div className="main_p_1">1</div>
              <div className="main_p_2">Kasimov Mahkam</div>
              <div className="main_p_2">KA0973135</div>
              <div className="main_p_2">25.04.2024</div>
              <div className="main_p_2">1130$</div>
              <div className="main_p_2 btn">Bajarilgan</div>
            </div>
            <div className="main_body">
              <div className="main_p_1">1</div>
              <div className="main_p_2">Kasimov Mahkam</div>
              <div className="main_p_2">KA0973135</div>
              <div className="main_p_2">25.04.2024</div>
              <div className="main_p_2">1130$</div>
              <div className="main_p_2 btn">Bajarilgan</div>
            </div>
            <div className="main_body">
              <div className="main_p_1">1</div>
              <div className="main_p_2">Kasimov Mahkam</div>
              <div className="main_p_2">KA0973135</div>
              <div className="main_p_2">25.04.2024</div>
              <div className="main_p_2">1130$</div>
              <div className="main_p_2 btn">Bajarilgan</div>
            </div>
            <div className="main_body">
              <div className="main_p_1">1</div>
              <div className="main_p_2">Kasimov Mahkam</div>
              <div className="main_p_2">KA0973135</div>
              <div className="main_p_2">25.04.2024</div>
              <div className="main_p_2">1130$</div>
              <div className="main_p_2 btn">Bajarilgan</div>
            </div>
            <div className="main_body">
              <div className="main_p_1">1</div>
              <div className="main_p_2">Kasimov Mahkam</div>
              <div className="main_p_2">KA0973135</div>
              <div className="main_p_2">25.04.2024</div>
              <div className="main_p_2">1130$</div>
              <div className="main_p_2 btn">Bajarilgan</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
