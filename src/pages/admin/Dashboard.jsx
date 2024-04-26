import users from "../../assets/users.svg";
import stats from "../../assets/stat.svg";
import order from "../../assets/order.svg";
import total from "../../assets/total.svg";
import inc from "../../assets/ins.svg";
import { LineChart } from "@mui/x-charts/LineChart";
import { useDrawingArea } from "@mui/x-charts/hooks";

const Colorswitch = () => {
  const { top, height, bottom } = useDrawingArea();
  const svgHeight = top + bottom + height;

  return (
    <>
      <defs>
        <linearGradient
          id="paint0_linear_45_2"
          x1="300.25"
          y1="46.9999"
          x2="300.25"
          y2={`${svgHeight}px`}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4880FF" stopOpacity="0.4" />
          <stop offset="1" stopColor="#4880FF" stopOpacity="0" />
        </linearGradient>
      </defs>

      <defs>
        <linearGradient
          id="paint0_linear_45_3"
          x1="299.498"
          y1="-4.28272"
          x2="299.498"
          y2={`${svgHeight}px`}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFFFFF" stopOpacity="0.4" />
          <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
      </defs>
    </>
  );
};

const Dashboard = () => {
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
    <div className="Dashboard">
      <div className="dash_container">
        <div className="dash_header">Dashboard</div>
        <div className="dash_top_stats">
          <div className="row">
            <div className="col-3 for_back">
              <div className="top_box_item">
                <div className="t_box_name">
                  <div>
                    <div className="name">Hodimlar</div>
                    <div className="count">40,689</div>
                  </div>
                  <img src={users} alt="" />
                </div>
                <div className="box_item_line">
                  <img src={inc} alt="" />
                  <div className="box_niz_p">
                    <span>8.5% </span>Up from yesterday
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3 for_back">
              <div className="top_box_item">
                <div className="t_box_name">
                  <div>
                    <div className="name">Mijozlar</div>
                    <div className="count">40,689</div>
                  </div>
                  <img src={order} alt="" />
                </div>
                <div className="box_item_line">
                  <img src={inc} alt="" />
                  <div className="box_niz_p">
                    <span>8.5% </span>Up from yesterday
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3 for_back">
              <div className="top_box_item">
                <div className="t_box_name">
                  <div>
                    <div className="name">Tushum</div>
                    <div className="count">40,689</div>
                  </div>
                  <img src={stats} alt="" />
                </div>
                <div className="box_item_line">
                  <img src={inc} alt="" />
                  <div className="box_niz_p">
                    <span>8.5% </span>Up from yesterday
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3 for_back">
              <div className="top_box_item">
                <div className="t_box_name">
                  <div>
                    <div className="name">Xarajatlar</div>
                    <div className="count">40,689</div>
                  </div>
                  <img src={total} alt="" />
                </div>
                <div className="box_item_line">
                  <img src={inc} alt="" />
                  <div className="box_niz_p">
                    <span>8.5% </span>Up from yesterday
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="dash_line_chart">
          <div className="line_chart_head_box">
            <div className="box_name">Yillik mijozlar soni</div>
            <div className="filter_select">
              <select name="" id="">
                <option value="">2024</option>
                <option value="">2025</option>
                <option value="">2026</option>
              </select>
            </div>
          </div>
          <div className="my_chart">
            <LineChart
              series={[{ data: uData, area: true }]}
              xAxis={[{ scaleType: "point", data: xLabels }]}
              height={500}
              colors={["#2F4CDD", "#4880FF"]}
              slotProps={{
                legend: {
                  direction: "row",
                  position: { vertical: "top", horizontal: "left" },
                  itemGap: 12,
                },
              }}
              sx={{
                ".css-j6h5qe-MuiAreaElement-root": {
                  fill: "url(#paint0_linear_45_2)",
                },
                ".css-tvglr0-MuiAreaElement-root": {
                  fill: "url(#paint0_linear_45_3)",
                },
              }}
            >
              <Colorswitch />
            </LineChart>
          </div>
        </div>

        <div className="top_operators">
          <div className="top_header">
            <div className="top_name">Top Operatorlar</div>
            <div className="filter_select">
              <select name="" id="">
                <option value="">October</option>
                <option value="">Novomber</option>
                <option value="">December</option>
              </select>
            </div>
          </div>
          <div className="top_main">
            <div className="main_header">
              <div className="table_h_1">#</div>
              <div className="table_h_2">F.I.O</div>
              <div className="table_h_2">Filiall</div>
              <div className="table_h_2">Mijozlari soni</div>
              <div className="table_h_2">Tushum</div>
              <div className="table_h_2">Status</div>
            </div>
            <div className="top_main_body">
              <div className="table_p_1">1</div>
              <div className="table_p_2">Mahkam Kasimov</div>
              <div className="table_p_2">IT Park</div>
              <div className="table_p_2">123</div>
              <div className="table_p_2">60 256$</div>
              <div className="table_p_2 btn">Active</div>
            </div>
            <div className="top_main_body">
              <div className="table_p_1">1</div>
              <div className="table_p_2">Mahkam Kasimov</div>
              <div className="table_p_2">IT Park</div>
              <div className="table_p_2">123</div>
              <div className="table_p_2">60 256$</div>
              <div className="table_p_2 btn">Active</div>
            </div>
            <div className="top_main_body">
              <div className="table_p_1">1</div>
              <div className="table_p_2">Mahkam Kasimov</div>
              <div className="table_p_2">IT Park</div>
              <div className="table_p_2">123</div>
              <div className="table_p_2">60 256$</div>
              <div className="table_p_2 btn">Active</div>
            </div>
            <div className="top_main_body">
              <div className="table_p_1">1</div>
              <div className="table_p_2">Mahkam Kasimov</div>
              <div className="table_p_2">IT Park</div>
              <div className="table_p_2">123</div>
              <div className="table_p_2">60 256$</div>
              <div className="table_p_2 btn">Active</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
