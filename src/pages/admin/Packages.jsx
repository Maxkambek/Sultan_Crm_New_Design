const Packages = () => {
  return (
    <div className="Packages">
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
          <div className="add">
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
  );
};

export default Packages;
