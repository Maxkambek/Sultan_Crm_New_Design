import { BarChart } from "@mui/x-charts";

const BranchDetail = () => {
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
    <>
      <div className="BranchDetail">
        <div className="branch_detail_container">
          <div className="br_detail_h">IT Park Filiali</div>
          <div className="row">
            <div className="col-4">
              <div className="br_header_box">
                <div className="br_header_item">
                  <div className="br_name">Filiall:</div>
                  <div className="br_name_p">IT Park Filialli</div>
                </div>
                <div className="br_header_item">
                  <div className="br_name">Manzili:</div>
                  <div className="br_name_p">
                    Toshkent, Toshkent shahar, Mirzo-Ulugbek tumani, Muminov 3/4
                  </div>
                </div>
                <div className="br_header_item">
                  <div className="br_name">Telefon Raqami:</div>
                  <div className="br_name_p">+998977165434</div>
                </div>
                <div className="br_header_item">
                  <div className="br_name">Boshligi:</div>
                  <div className="br_name_p">Abdulaziz Mamadaliyev</div>
                </div>
              </div>
            </div>
            <div className="col-8">
              <div className="br_header_box">
                <div className="br_header_box_h">Filiall Hodimlari</div>
                <div className="br_staff_header">
                  <div className="table_h_1">#</div>
                  <div className="table_h_2">F.I.O</div>
                  <div className="table_h_2">Telefon</div>
                  <div className="table_h_2">Status</div>
                </div>
                <div className="br_staff_body">
                  <div className="table_p_1">1</div>
                  <div className="table_p_2">Mahkam Kasimov</div>
                  <div className="table_p_2">+998977165434</div>
                  <div className="table_p_2 btn">Active</div>
                </div>
                <div className="br_staff_body">
                  <div className="table_p_1">1</div>
                  <div className="table_p_2">Mahkam Kasimov</div>
                  <div className="table_p_2">+998977165434</div>
                  <div className="table_p_2 btn">Active</div>
                </div>
                <div className="br_staff_body">
                  <div className="table_p_1">1</div>
                  <div className="table_p_2">Mahkam Kasimov</div>
                  <div className="table_p_2">+998977165434</div>
                  <div className="table_p_2 btn">Active</div>
                </div>
              </div>
            </div>
          </div>
          <div className="br_stats_box">
            <div className="br_stats_header">
              <div className="br_stats_name">Filiall Statistikasi</div>
              <div className="br_stats_filter">
                <select name="" id="">
                  <option value="">2024</option>
                  <option value="">2025</option>
                  <option value="">2026</option>
                </select>
              </div>
            </div>
            <div className="bar_chart">
              <BarChart
                height={500}
                series={[{ data: uData, label: "Mijozlar soni" }]}
                xAxis={[{ data: xLabels, scaleType: "band" }]}
              />
            </div>
          </div>

          <div className="br_client_box">
            <div className="br_clients_h">Filiall Mijozlari</div>
            <div className="br_clients_header">
              <div className="main_h_1">#</div>
              <div className="main_h_2">F.I.O</div>
              <div className="main_h_2">Pass Num</div>
              <div className="main_h_2">Pass File</div>
              <div className="main_h_2">Paket</div>
              <div className="main_h_2">Narxi</div>
              <div className="main_h_2">Joylashuv</div>
              <div className="main_h_2">Hodim</div>
              <div className="main_h_2">Status</div>
            </div>
            <div className="br_clients_body">
              <div className="main_p_1">1</div>
              <div className="main_p_2">Kasimov Mahkam</div>
              <div className="main_p_2">KA0973135</div>
              <div className="main_p_2">File</div>
              <div className="main_p_2">25.04.2024</div>
              <div className="main_p_2">1130$</div>
              <div className="main_p_2">4-kishi</div>
              <div className="main_p_2">M.Abdulaziz</div>
              <div className="main_p_2 btn">Bajarilgan</div>
            </div>
            <div className="br_clients_body">
              <div className="main_p_1">1</div>
              <div className="main_p_2">Kasimov Mahkam</div>
              <div className="main_p_2">KA0973135</div>
              <div className="main_p_2">File</div>
              <div className="main_p_2">25.04.2024</div>
              <div className="main_p_2">1130$</div>
              <div className="main_p_2">4-kishi</div>
              <div className="main_p_2">M.Abdulaziz</div>
              <div className="main_p_2 btn">Bajarilgan</div>
            </div>
            <div className="br_clients_body">
              <div className="main_p_1">1</div>
              <div className="main_p_2">Kasimov Mahkam</div>
              <div className="main_p_2">KA0973135</div>
              <div className="main_p_2">File</div>
              <div className="main_p_2">25.04.2024</div>
              <div className="main_p_2">1130$</div>
              <div className="main_p_2">4-kishi</div>
              <div className="main_p_2">M.Abdulaziz</div>
              <div className="main_p_2 btn">Bajarilgan</div>
            </div>
            <div className="br_clients_body">
              <div className="main_p_1">1</div>
              <div className="main_p_2">Kasimov Mahkam</div>
              <div className="main_p_2">KA0973135</div>
              <div className="main_p_2">File</div>
              <div className="main_p_2">25.04.2024</div>
              <div className="main_p_2">1130$</div>
              <div className="main_p_2">4-kishi</div>
              <div className="main_p_2">M.Abdulaziz</div>
              <div className="main_p_2 btn">Bajarilgan</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BranchDetail;
