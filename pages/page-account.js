import Layout from "../components/layout/Layout";
import Link from "next/link"
import React, { useState } from "react";

function Account() {

    const [activeIndex, setActiveIndex] = useState(1);

    const handleOnClick = (index) => {
        setActiveIndex(index); // remove the curly braces
    };


    return (
        <>
            <Layout parent="Home" sub="Pages" subChild="Account">
                <div className="page-content pt-150 pb-150">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 m-auto">
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="dashboard-menu">
                                            <ul className="nav flex-column" role="tablist">
                                                <li className="nav-item">
                                                    <a className={activeIndex === 1 ? "nav-link active" : "nav-link"} onClick={() => handleOnClick(1)}><i className="fi-rs-settings-sliders mr-10"></i>Bảng điều khiển</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className={activeIndex === 2 ? "nav-link active" : "nav-link"}  onClick={() => handleOnClick(2)}><i className="fi-rs-shopping-bag mr-10"></i>Đơn hàng</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className={activeIndex === 3 ? "nav-link active" : "nav-link"}  onClick={() => handleOnClick(3)}><i className="fi-rs-shopping-cart-check mr-10"></i>Theo dõi đơn hàng</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className={activeIndex === 4 ? "nav-link active" : "nav-link"}  onClick={() => handleOnClick(4)}><i className="fi-rs-marker mr-10"></i>Địa chỉ</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className={activeIndex === 5 ? "nav-link active" : "nav-link"}  onClick={() => handleOnClick(5)}><i className="fi-rs-user mr-10"></i>Chi tiết tài khoản</a>
                                                </li>
                                                <li className="nav-item">
                                                    <Link href="/page-login" className="nav-link"><i className="fi-rs-sign-out mr-10"></i>Đăng xuất</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-9">
                                        <div className="tab-content account dashboard-content pl-50">
                                            <div className={activeIndex === 1 ? "tab-pane fade active show" : "tab-pane fade "} >
                                                <div className="card">
                                                    <div className="card-header">
                                                        <h3 className="mb-0">Chào Kha Hồ</h3>
                                                    </div>
                                                    <div className="card-body">
                                                        <p>
                                                            Cảm ơn bạn đã ủng hộ nông sản Việt. Tại đây bạn có thể &amp; theo dõi <a href="#">đơn hàng gần đây</a>,<br />
                                                            kiểm tra <a href="#">thông tin giao hàng</a> và <a href="#">đổi mật khẩu cũng như chi tiết tài khoản.</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={activeIndex === 2 ? "tab-pane fade active show" : "tab-pane fade "} >
                                                <div className="card">
                                                    <div className="card-header">
                                                        <h3 className="mb-0">Your Orders</h3>
                                                    </div>
                                                    <div className="card-body">
                                                        <div className="table-responsive">
                                                            <table className="table">
                                                                <thead>
                                                                    <tr>
                                                                        <th>Đơn hàng</th>
                                                                        <th>Ngày</th>
                                                                        <th>Tình trạng</th>
                                                                        <th>Tổng cộng</th>
                                                                        <th>Hành động</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>#1357</td>
                                                                        <td>Tháng 3 12, 2024</td>
                                                                        <td>Đang giao</td>
                                                                        <td>$125.00 for 2 item</td>
                                                                        <td><a href="#" className="btn-small d-block">View</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>#2468</td>
                                                                        <td>Tháng 6 29, 2024</td>
                                                                        <td>Hoàn thành</td>
                                                                        <td>$364.00 for 5 item</td>
                                                                        <td><a href="#" className="btn-small d-block">View</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>#2366</td>
                                                                        <td>Tháng 8 02, 2020</td>
                                                                        <td>Hoàn thành</td>
                                                                        <td>$280.00 for 3 item</td>
                                                                        <td><a href="#" className="btn-small d-block">View</a></td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={activeIndex === 3 ? "tab-pane fade active show" : "tab-pane fade "} >
                                                <div className="card">
                                                    <div className="card-header">
                                                        <h3 className="mb-0">Theo dõi đơn hàng</h3>
                                                    </div>
                                                    <div className="card-body contact-from-area">
                                                        <p>Hãy nhập Số OrderID để tìm kiếm đơn hàng của bạn.</p>
                                                        <div className="row">
                                                            <div className="col-lg-8">
                                                                <form className="contact-form-style mt-30 mb-50" action="#" method="post">
                                                                    <div className="input-style mb-20">
                                                                        <label>Order ID</label>
                                                                        <input name="order-id" placeholder="Found in your order confirmation email" type="text" />
                                                                    </div>
                                                                    <div className="input-style mb-20">
                                                                        <label>Email</label>
                                                                        <input name="billing-email" placeholder="Email you used during checkout" type="email" />
                                                                    </div>
                                                                    <button className="submit submit-auto-width" type="submit">Theo dõi</button>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={activeIndex === 4 ? "tab-pane fade active show" : "tab-pane fade "} >
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="card mb-3 mb-lg-0">
                                                            <div className="card-header">
                                                                <h3 className="mb-0">Địa chỉ</h3>
                                                            </div>
                                                            <div className="card-body">
                                                                <address>
                                                                    3522 Tòa nhà Nam Giao<br />
                                                                    75 Phố Hàng Bông,<br />
                                                                    Phường Lán Hạ. <br />
                                                                </address>
                                                                <p>Hà Nội</p>
                                                                <a href="#" className="btn-small">Thay đổi</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="card">
                                                            <div className="card-header">
                                                                <h5 className="mb-0">Địa chỉ</h5>
                                                            </div>
                                                            <div className="card-body">
                                                                <address>
                                                                    4299 Tòa nhà Siêu Phẩm<br />
                                                                    Nguyễn Đình Chiểu, <br />Bến Nghé <br />Phone: 1.941.227.4444
                                                                </address>
                                                                <p>Cầu Ông Lãnh</p>
                                                                <a href="#" className="btn-small">Thay đổi</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={activeIndex === 5 ? "tab-pane fade active show" : "tab-pane fade "} >
                                                <div className="card">
                                                    <div className="card-header">
                                                        <h5>Chi tiết tài khoản</h5>
                                                    </div>
                                                    <div className="card-body">
                                                        <p>Đã có tài khoản? <Link href="/page-login">Đăng nhập ngay</Link></p>
                                                        <form method="post" name="enq">
                                                            <div className="row">
                                                                <div className="form-group col-md-6">
                                                                    <label>Họ <span className="required">*</span></label>
                                                                    <input required="" className="form-control" name="name" type="text" />
                                                                </div>
                                                                <div className="form-group col-md-6">
                                                                    <label>Tên <span className="required">*</span></label>
                                                                    <input required="" className="form-control" name="phone" />
                                                                </div>
                                                                <div className="form-group col-md-12">
                                                                    <label>Tên hiển thị <span className="required">*</span></label>
                                                                    <input required="" className="form-control" name="dname" type="text" />
                                                                </div>
                                                                <div className="form-group col-md-12">
                                                                    <label>Email <span className="required">*</span></label>
                                                                    <input required="" className="form-control" name="email" type="email" />
                                                                </div>
                                                                <div className="form-group col-md-12">
                                                                    <label>Passowrd hiện tại <span className="required">*</span></label>
                                                                    <input required="" className="form-control" name="password" type="password" />
                                                                </div>
                                                                <div className="form-group col-md-12">
                                                                    <label>Password mới <span className="required">*</span></label>
                                                                    <input required="" className="form-control" name="npassword" type="password" />
                                                                </div>
                                                                <div className="form-group col-md-12">
                                                                    <label>Xác nhận Password <span className="required">*</span></label>
                                                                    <input required="" className="form-control" name="cpassword" type="password" />
                                                                </div>
                                                                <div className="col-md-12">
                                                                    <button type="submit" className="btn btn-fill-out submit font-weight-bold" name="submit" value="Submit">Save Change</button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default Account;
