import React from 'react'

// import "../assets/assets/css/style.css"
// import "../assets/assets/css/new.css"
// import "../assets/assets/vendors/mdi/css/materialdesignicons.min.css"
// import "../assets/assets/vendors/css/vendor.bundle.base.css"


// import "../assets/assets/vendors/jvectormap/jquery-jvectormap.css"
// import "../assets/assets/vendors/flag-icon-css/css/flag-icon.min.css"
// import "../assets/assets/vendors/owl-carousel-2/owl.carousel.min.css"
// import "../assets/assets/vendors/owl-carousel-2/owl.theme.default.min.css"
const Dashboard = () => {
    return (
        <>
            <div className="container-scroller">
                <nav className="sidebar sidebar-offcanvas" id="sidebar">
                    <div className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
                        <a className="sidebar-brand brand-logo" href="index.html"><img src="assets/images/logo.svg" alt="logo" /></a>
                        <a className="sidebar-brand brand-logo-mini" href="index.php"><img src="assets/images/logo-mini.svg" alt="logo" /></a>
                    </div>
                    <ul className="nav">
                        <li className="nav-item profile">
                            <div className="profile-desc">
                                <div className="profile-pic">

                                    <div className="profile-name">
                                        <h5 className="mb-0 font-weight-normal">fullName</h5>
                                        <span>Gold Member</span>
                                    </div>
                                </div>
                                <a href="#" id="profile-dropdown" data-toggle="dropdown"><i className="mdi mdi-dots-vertical"></i></a>
                                <div className="dropdown-menu dropdown-menu-right sidebar-dropdown preview-list" aria-labelledby="profile-dropdown">
                                    <a href="#" className="dropdown-item preview-item">
                                        <div className="preview-thumbnail">
                                            <div className="preview-icon bg-dark rounded-circle">
                                                <i className="mdi mdi-settings text-primary"></i>
                                            </div>
                                        </div>
                                        <div className="preview-item-content">
                                            <p className="preview-subject ellipsis mb-1 text-small">Account settings</p>
                                        </div>
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a href="#" className="dropdown-item preview-item">
                                        <div className="preview-thumbnail">
                                            <div className="preview-icon bg-dark rounded-circle">
                                                <i className="mdi mdi-onepassword  text-info"></i>
                                            </div>
                                        </div>
                                        <div className="preview-item-content">
                                            <p className="preview-subject ellipsis mb-1 text-small">Change Password</p>
                                        </div>
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a href="#" className="dropdown-item preview-item">
                                        <div className="preview-thumbnail">
                                            <div className="preview-icon bg-dark rounded-circle">
                                                <i className="mdi mdi-calendar-today text-success"></i>
                                            </div>
                                        </div>
                                        <div className="preview-item-content">
                                            <p className="preview-subject ellipsis mb-1 text-small">To-do list</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item nav-category">
                            <span className="nav-link">Navigation</span>
                        </li>
                        <li className="nav-item menu-items">
                            <a className="nav-link" href="dashboard.php">
                                <span className="menu-icon">
                                    <i className="mdi mdi-account-card-details"></i>
                                </span>
                                <span className="menu-title">Account</span>
                            </a>
                        </li>
                        <li className="nav-item menu-items">
                            <a className="nav-link" href="deposite.php">
                                <span className="menu-icon">
                                    <i className="mdi mdi-credit-card"></i>
                                </span>
                                <span className="menu-title">Deposite</span>
                            </a>
                        </li>
                        <li className="nav-item menu-items">
                            <a className="nav-link" href="withdraw.php">
                                <span className="menu-icon">
                                    <i className="mdi mdi-credit-card"></i>
                                </span>
                                <span className="menu-title">Withdraw</span>
                            </a>
                        </li>
                        <li className="nav-item menu-items">
                            <a className="nav-link" href="history.php">
                                <span className="menu-icon">
                                    <i className="mdi mdi-glassdoor"></i>
                                </span>
                                <span className="menu-title">History</span>
                            </a>
                        </li>
                        <li className="nav-item menu-items">
                            <a className="nav-link" href="transaction.php">
                                <span className="menu-icon">
                                    <i className="mdi mdi-chart-bar"></i>
                                </span>
                                <span className="menu-title">Transactions</span>
                            </a>
                        </li>
                        <li className="nav-item menu-items">
                            <a className="nav-link" href="purchase.php">
                                <span className="menu-icon">
                                    <i className="mdi mdi-chart-bar"></i>
                                </span>
                                <span className="menu-title">Purchase Signal</span>
                            </a>
                        </li>
                        <li className="nav-item menu-items">
                            <a className="nav-link" href="upgrade.php">
                                <span className="menu-icon">
                                    <i className="mdi mdi-chart-bar"></i>
                                </span>
                                <span className="menu-title">Account Upgrade</span>
                            </a>
                        </li>
                        <li className="nav-item menu-items">
                            <a className="nav-link" href="settings.php">
                                <span className="menu-icon">
                                    <i className="mdi mdi-chart-bar"></i>
                                </span>
                                <span className="menu-title">Account Settings</span>
                            </a>
                        </li>
                        <li className="nav-item menu-items">
                            <a className="nav-link" href="logout.php?logout">
                                <span className="menu-icon">
                                    <i className="mdi mdi-logout text-danger"></i>
                                </span>
                                <span className="menu-title">Logout</span>
                            </a>
                        </li>
                        <li className="nav-item menu-items">
                            <a className="nav-link" data-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth">
                                <span className="menu-icon">
                                    <i className="mdi mdi-security"></i>
                                </span>
                                <span className="menu-title">where to buy Coin</span>
                                <i className="menu-arrow"></i>
                            </a>
                            <div className="collapse" id="auth">
                                <ul className="nav flex-column sub-menu">
                                    <li className="nav-item"> <a className="nav-link" href="https://bitso.com/">Bitso</a></li>
                                    <li className="nav-item"> <a className="nav-link" href="https://www.binance.com/">Binance</a></li>
                                    <li className="nav-item"> <a className="nav-link" href="https://www.huobi.com/">Huobi</a></li>
                                    <li className="nav-item"> <a className="nav-link" href="https://www.okex.com/">Oke_x</a></li>
                                    <li className="nav-item"> <a className="nav-link" href="https://www.coinex.com/">CoinEx</a></li>
                                    <li className="nav-item"> <a className="nav-link" href="https://www.kucoin.com/">KuCoin</a></li>
                                    <li className="nav-item"> <a className="nav-link" href="https://www.bitstamp.net/">Bitstamp</a></li>
                                    <li className="nav-item"> <a className="nav-link" href="https://www.luno.com/">Luno</a></li>
                                    <li className="nav-item"> <a className="nav-link" href="https://remitano.com/">Remitano </a></li>
                                    <li className="nav-item"> <a className="nav-link" href="https://www.moonpay.com/">Moonpay</a></li>
                                    <li className="nav-item"> <a className="nav-link" href="https://localbitcoins.com/">Local Bitcoin</a></li>
                                    <li className="nav-item"> <a className="nav-link" href="https://paxful.com/">Paxful</a></li>
                                    <li className="nav-item"> <a className="nav-link" href="https://www.coinbase.com/">CoinBase</a></li>
                                    <li className="nav-item"> <a className="nav-link" href="https://ramp.network/buy">Ramp</a></li>
                                    <li className="nav-item"> <a className="nav-link" href="https://openocean.banxa.com/">Banxa</a></li>
                                    <li className="nav-item"> <a className="nav-link" href="https://www.chainbits.com/">Chainbits</a></li>
                                    <li className="nav-item"> <a className="nav-link" href="https://www.bitcoin.com/">Bitcoin</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </nav>

                <div className="container-fluid page-body-wrapper">

                    <nav className="navbar p-0 fixed-top d-flex flex-row">
                        <div className="navbar-brand-wrapper d-flex d-lg-none align-items-center justify-content-center">
                            <a className="navbar-brand brand-logo-mini" href="index.html"><img src="assets/images/logo-mini.svg" alt="logo" /></a>
                        </div>
                        <div className="navbar-menu-wrapper flex-grow d-flex align-items-stretch">
                            <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
                                <span className="mdi mdi-menu"></span>
                            </button>
                            <ul className="navbar-nav w-100">
                                <li className="nav-item w-100">
                                    <form className="nav-link mt-2 mt-md-0 d-none d-lg-flex search">
                                        <input type="text" className="form-control" placeholder="Search products" />
                                    </form>
                                </li>
                            </ul>
                            <ul className="navbar-nav navbar-nav-right">
                                <li className="nav-item dropdown d-none d-lg-block">
                                    <a className="nav-link btn btn-success create-new-button" id="createbuttonDropdown" data-toggle="dropdown" aria-expanded="false" href="#">+ Create New Project</a>
                                    <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="createbuttonDropdown">
                                        <h6 className="p-3 mb-0">Projects</h6>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item preview-item">
                                            <div className="preview-thumbnail">
                                                <div className="preview-icon bg-dark rounded-circle">
                                                    <i className="mdi mdi-file-outline text-primary"></i>
                                                </div>
                                            </div>
                                            <div className="preview-item-content">
                                                <p className="preview-subject ellipsis mb-1">Software Development</p>
                                            </div>
                                        </a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item preview-item">
                                            <div className="preview-thumbnail">
                                                <div className="preview-icon bg-dark rounded-circle">
                                                    <i className="mdi mdi-web text-info"></i>
                                                </div>
                                            </div>
                                            <div className="preview-item-content">
                                                <p className="preview-subject ellipsis mb-1">UI Development</p>
                                            </div>
                                        </a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item preview-item">
                                            <div className="preview-thumbnail">
                                                <div className="preview-icon bg-dark rounded-circle">
                                                    <i className="mdi mdi-layers text-danger"></i>
                                                </div>
                                            </div>
                                            <div className="preview-item-content">
                                                <p className="preview-subject ellipsis mb-1">Software Testing</p>
                                            </div>
                                        </a>
                                        <div className="dropdown-divider"></div>
                                        <p className="p-3 mb-0 text-center">See all projects</p>
                                    </div>
                                </li>
                                <li className="nav-item nav-settings d-none d-lg-block">
                                    <a className="nav-link" href="#">
                                        <i className="mdi mdi-view-grid"></i>
                                    </a>
                                </li>
                                <li className="nav-item dropdown border-left">
                                    <a className="nav-link count-indicator dropdown-toggle" id="messageDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
                                        <i className="mdi mdi-email"></i>
                                        <span className="count bg-success"></span>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="messageDropdown">
                                        <h6 className="p-3 mb-0">Messages</h6>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item preview-item">

                                            <div className="preview-item-content">
                                                <p className="preview-subject ellipsis mb-1">Your Account was created succesfully</p>
                                                <p className="text-muted mb-0"> 1 Minutes ago </p>
                                            </div>
                                        </a>

                                    </div>
                                </li>
                                <li className="nav-item dropdown border-left">
                                    <a className="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="#" data-toggle="dropdown">
                                        <i className="mdi mdi-bell"></i>
                                        <span className="count bg-danger"></span>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
                                        <h6 className="p-3 mb-0">Notifications</h6>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item preview-item">
                                            <div className="preview-thumbnail">
                                                <div className="preview-icon bg-dark rounded-circle">
                                                    <i className="mdi mdi-calendar text-success"></i>
                                                </div>
                                            </div>
                                            <div className="preview-item-content">
                                                <p className="preview-subject mb-1">Event today</p>
                                                <p className="text-muted ellipsis mb-0"> Just a reminder that you have an event today </p>
                                            </div>
                                        </a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item preview-item">
                                            <div className="preview-thumbnail">
                                                <div className="preview-icon bg-dark rounded-circle">
                                                    <i className="mdi mdi-settings text-danger"></i>
                                                </div>
                                            </div>
                                            <div className="preview-item-content">
                                                <p className="preview-subject mb-1">Settings</p>
                                                <p className="text-muted ellipsis mb-0"> Update dashboard </p>
                                            </div>
                                        </a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item preview-item">
                                            <div className="preview-thumbnail">
                                                <div className="preview-icon bg-dark rounded-circle">
                                                    <i className="mdi mdi-link-variant text-warning"></i>
                                                </div>
                                            </div>
                                            <div className="preview-item-content">
                                                <p className="preview-subject mb-1">Launch Admin</p>
                                                <p className="text-muted ellipsis mb-0"> New admin wow! </p>
                                            </div>
                                        </a>
                                        <div className="dropdown-divider"></div>
                                        <p className="p-3 mb-0 text-center">See all notifications</p>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link" id="profileDropdown" href="#" data-toggle="dropdown">
                                        <div className="navbar-profile">
                                            <p className="mb-0 d-none d-sm-block navbar-profile-name">fullName</p>
                                            <i className="mdi mdi-menu-down d-none d-sm-block"></i>
                                        </div>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="profileDropdown">
                                        <h6 className="p-3 mb-0">Profile</h6>
                                        <div className="dropdown-divider"></div>
                                        <a href="settings.php" className="dropdown-item preview-item">
                                            <div className="preview-thumbnail">
                                                <div className="preview-icon bg-dark rounded-circle">
                                                    <i className="mdi mdi-settings text-success"></i>
                                                </div>
                                            </div>
                                            <div className="preview-item-content">
                                                <p className="preview-subject mb-1">Settings</p>
                                            </div>
                                        </a>
                                        <div className="dropdown-divider"></div>
                                        <a href="logout.php?logout" className="dropdown-item preview-item">
                                            <div className="preview-thumbnail">
                                                <div className="preview-icon bg-dark rounded-circle">
                                                    <i className="mdi mdi-logout text-danger"></i>
                                                </div>
                                            </div>
                                            <div className="preview-item-content">
                                                <p className="preview-subject mb-1">Log out</p>
                                            </div>
                                        </a>
                                        <div className="dropdown-divider"></div>
                                        <p className="p-3 mb-0 text-center">Advanced settings</p>
                                    </div>
                                </li>
                            </ul>
                            <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                                <span className="mdi mdi-format-line-spacing"></span>
                            </button>
                        </div>
                    </nav>

                    <div className="main-panel m-0 w-100">

                        <div className="content-wrapper">
                            {/* <!-- TradingView Widget BEGIN -->
            <div className="tradingview-widget-container">
            <div className="tradingview-widget-container__widget"></div>
            <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/symbols/BNBUSDT/?exchange=BINANCE" rel="noopener" target="_blank"><span className="blue-text">BNBUSDT Rates</span></a> by TradingView</div>
            <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js" async>
            {
            "symbol": "BINANCE:BNBUSDT",
            "height": 220,
            "locale": "en",
            "dateRange": "12M",
            "colorTheme": "dark",
            "trendLineColor": "rgba(41, 98, 255, 1)",
            "underLineColor": "rgba(41, 98, 255, 0.3)",
            "underLineBottomColor": "rgba(41, 98, 255, 0)",
            "isTransparent": true,
            "autosize": true,
            "largeChartUrl": ""
            }
            </script>
            </div>
            <!-- TradingView Widget END --> */}

                            <div className="row">
                                <div className="col-xl-6 p-2 first-radius col-sm-6 grid-margin stretch-card">
                                    <div className="card card-gradient">
                                        <div className="card-body second-radius">
                                            <div className="row">
                                                <div className="col-10">
                                                    <div className="d-flex align-items-center align-self-start">
                                                        <h3 className="mb-0 text-center">currency account_bal.00</h3><br />
                                                        <p className="text-warning ml-2 mb-0 font-weight-medium">+3.5%</p>
                                                    </div>
                                                </div>
                                                <div className="col-2">
                                                    <div className="icon icon-box-warning ">
                                                        <span className="mdi mdi-arrow-top-right icon-item"></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="btn-group ml-1" role="group" aria-label="Basic example">
                                                <button className="btn deposite"><a href="deposite.php" style={{fontWeight: "600"}} className="text-light mt-4"><i style={{borderBottomLeftRadius: "15px", borderTopRightRadius: "15px"}} className="mdi mdi-arrow-down d-block mb-1 bg-dark text-warning action-icons p-3"></i>Deposite</a></button>
                                                <button className="btn withdraw"><a href="withdraw.php" style={{fontWeight: "600"}} className="text-light mt-4"><i style={{borderBottomLeftRadius: "15px", borderTopRightRadius: "15px"}} className="mdi mdi-arrow-up d-block text-warning bg-dark action-icons m-1 p-3"></i>Withdraw</a></button>
                                                <button className="btn withdraw"><a href="https://www.coinbase.com/" style={{fontWeight: "600"}} className="text-light "><i style={{borderBottomLeftRadius: "15px", borderTopRightRadius: "15px"}} className="mdi mdi-wallet-giftcard d-block text-warning bg-dark action-icons m-1 p-3"></i>Buy</a></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-sm-6 grid-margin stretch-card">
                                    <div className="card card-gradient2">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-9">
                                                    <h6 className="text-muted font-weight-normal">Bonuse</h6>
                                                    <div className="d-flex align-items-center align-self-start">
                                                        <h4 className="mb-0">currency bonus_bal.00</h4>
                                                        <p className="text-warning ml-2 mb-0 font-weight-medium">+18%</p>
                                                    </div>

                                                </div>
                                                <div className="col-3">
                                                    <div className="icon icon-box-warning">
                                                        <span className="mdi mdi-arrow-top-right icon-item"></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <span type="button" className="btn btn-inverse-primary p-1 mt-2 btn-fw">bonus_stat</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 grid-margin stretch-card">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="form-group row">
                                                <div className="col">
                                                    <h6 className="card-title">Total Profits</h6>

                                                    <div className="d-flex align-items-center align-self-start">
                                                        <h4 className="mb-0" style={{fontSize: "16px"}}>currencyaccount_bal.00</h4>
                                                        <p className="text-warning ml-2 mb-0 font-weight-small">+28%</p>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <h6 className="card-title">Total Deposite</h6>
                                                    <div className="d-flex align-items-center align-self-start">
                                                        <h4 className="mb-0" style={{fontSize: "16px"}}>deposite.00</h4>
                                                        <p className="text-warning ml-2 mb-0 font-weight-medium">+68%</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 grid-margin stretch-card">
                                    <div className="card">
                                        <div className="card-body card-gradient">
                                            <div className="table-responsive">
                                                <table className="table table-hover">
                                                    <tbody>
                                                        <tr>
                                                            <td className="text-warning p-0"> Package <i className=" mdi mdi-security text-danger"></i></td>
                                                            <td><label className="badge p-0 float-right ">Pending</label></td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-warning p-0"> Signal<i className="mdi mdi mdi-signal-variant text-danger"></i></td>
                                                            <td><label className="badge float-right p-0">None</label></td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-warning p-0"> Total Referrals<i className="mdi mdi-account-multiple-plus text-danger"></i></td>
                                                            <td><label className="badge p-0 float-right">None</label></td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-warning p-0"> Account Type<i className="mdi mdi-account-check text-danger"></i></td>
                                                            <td><label className="badge p-0 float-right">account_type</label></td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-warning p-0"> Account Status<i className="mdi mdi-shield text-danger"></i></td>
                                                            <td><label className="badge p-0 float-right bg-success text-light p-2">Verified</label></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-12 grid-margin stretch-card">
                                    <div className="card">
                                        <div className="card-body card-gradient">
                                            <h4 className="text-primary p-0">Notification<i className="mdi mdi-message-text-outline text-danger"></i></h4>
                                            <p className="text-light" style={{fontSize: "10px"}}>Notifivation Message</p>
                                        </div>
                                    </div>
                                </div>

                                {/* <div className="col-md-12 grid-margin stretch-card">
                      <!-- TradingView Widget BEGIN -->
                 <div className="tradingview-widget-container">
            //         <div className="tradingview-widget-container__widget"></div>
            //         <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text">Track all markets on TradingView</span></a></div>
            //         <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js" async>
            //         {
                                                //         "symbols": [
                                                //           {
                                                //             "proName": "FOREXCOM:SPXUSD",
                                                //             "title": "S&P 500"
                                                //           },
                                                //           {
                                                //             "proName": "FOREXCOM:NSXUSD",
                                                //             "title": "US 100"
                                                //           },
                                                //           {
                                                //             "proName": "FX_IDC:EURUSD",
                                                //             "title": "EUR to USD"
                                                //           },
                                                //           {
                                                //             "proName": "BITSTAMP:BTCUSD",
                                                //             "title": "Bitcoin"
                                                //           },
                                                //           {
                                                //             "proName": "BITSTAMP:ETHUSD",
                                                //             "title": "Ethereum"
                                                //           }
                                                //         ],
                                                //         "showSymbolLogo": true,
                                                //         "colorTheme": "dark",
                                                //         "isTransparent": false,
                                                //         "displayMode": "adaptive",
                                                //         "locale": "en"
                                                //       }
                                                //         </script>
                                                //       </div>
                                                //   </div>


                                                <div id="google_translate_element" style={{visibility:"visible", display:"none"}}></div>

            </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
