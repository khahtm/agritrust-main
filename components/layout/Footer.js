import React from "react";
import Link from "next/link"

const Footer = () => {
    return (
        <>
            <footer className="main">
                <section className="newsletter mb-15  wow animate__animated animate__fadeIn">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="position-relative newsletter-inner">
                                    <div className="newsletter-content">
                                        <h2 className="mb-20">
                                            Chỉ cần ở tại nhà<br />
                                            nhận ngay nông sản sạch
                                        </h2>
                                        <p className="mb-45">
                                            Tăng chất lượng bữa ăn của bạn cùng{" "}
                                            <span className="text-brand">
                                                Agritrust
                                            </span>
                                        </p>
                                        <form className="form-subcriber d-flex">
                                            <input
                                                type="email"
                                                placeholder="Your emaill address"
                                            />
                                            <button className="btn" type="submit">
                                                Subscribe
                                            </button>
                                        </form>
                                    </div>
                                    <img
                                        src="/assets/imgs/banner/banner-9.png"
                                        alt="newsletter"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="featured  section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 mb-md-4 mb-xl-0">
                                <div
                                    className="banner-left-icon d-flex align-items-center  wow animate__animated animate__fadeInUp"
                                    data-wow-delay="0"
                                >
                                    <div className="banner-icon">
                                        <img
                                            src="/assets/imgs/theme/icons/icon-7.svg"
                                            alt="nest"
                                        />
                                    </div>
                                    <div className="banner-text">
                                        <h3 className="icon-box-title">
                                            Giá tốt nhất
                                        </h3>
                                        <p>Chỉ từ 200.000đ</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div
                                    className="banner-left-icon d-flex align-items-center  wow animate__animated animate__fadeInUp"
                                    data-wow-delay=".1s"
                                >
                                    <div className="banner-icon">
                                        <img
                                            src="/assets/imgs/theme/icons/icon-8.svg"
                                            alt="nest"
                                        />
                                    </div>
                                    <div className="banner-text">
                                        <h3 className="icon-box-title">
                                            Giao hàng miễn phí
                                        </h3>
                                        <p>Dịch vụ nhanh chóng</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div
                                    className="banner-left-icon d-flex align-items-center  wow animate__animated animate__fadeInUp"
                                    data-wow-delay=".2s"
                                >
                                    <div className="banner-icon">
                                        <img
                                            src="/assets/imgs/theme/icons/icon-9.svg"
                                            alt="nest"
                                        />
                                    </div>
                                    <div className="banner-text">
                                        <h3 className="icon-box-title">
                                            Deal hời mỗi ngày
                                        </h3>
                                        <p>Ưu đãi cho thành viên thân thiết</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div
                                    className="banner-left-icon d-flex align-items-center  wow animate__animated animate__fadeInUp"
                                    data-wow-delay=".3s"
                                >
                                    <div className="banner-icon">
                                        <img
                                            src="/assets/imgs/theme/icons/icon-10.svg"
                                            alt="nest"
                                        />
                                    </div>
                                    <div className="banner-text">
                                        <h3 className="icon-box-title">
                                            Phủ sóng rộng khắp
                                        </h3>
                                        <p>Hệ thống cửa hàng đông đảo</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div
                                    className="banner-left-icon d-flex align-items-center  wow animate__animated animate__fadeInUp"
                                    data-wow-delay=".4s"
                                >
                                    <div className="banner-icon">
                                        <img
                                            src="/assets/imgs/theme/icons/icon-5.svg"
                                            alt="nest"
                                        />
                                    </div>
                                    <div className="banner-text">
                                        <h3 className="icon-box-title">
                                            Dễ dàng đổi trả
                                        </h3>
                                        <p>Within 30 days</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 d-xl-none">
                                <div
                                    className="banner-left-icon d-flex align-items-center  wow animate__animated animate__fadeInUp"
                                    data-wow-delay=".5s"
                                >
                                    <div className="banner-icon">
                                        <img
                                            src="/assets/imgs/theme/icons/icon-6.svg"
                                            alt="nest"
                                        />
                                    </div>
                                    <div className="banner-text">
                                        <h3 className="icon-box-title">
                                            Safe delivery
                                        </h3>
                                        <p>Within 30 days</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-padding footer-mid">
                    <div className="container pt-15 pb-20">
                        <div className="row">
                            <div className="col">
                                <div
                                    className="widget-about font-md mb-md-3 mb-lg-3 mb-xl-0  wow animate__animated animate__fadeInUp"
                                    data-wow-delay="0"
                                >
                                    <div className="logo  mb-30">
                                        <Link href="/" className="mb-15">
                                            <img
                                                src="/assets/imgs/theme/logo.svg"
                                                alt="logo"
                                            />
                                        </Link>
                                        <p className="font-lg text-heading">
                                            Sàn giao dịch nông sản từ Agritrust
                                        </p>
                                    </div>
                                    <ul className="contact-infor">
                                        <li>
                                            <img
                                                src="/assets/imgs/theme/icons/icon-location.svg"
                                                alt="nest"
                                            />
                                            <strong>Địa chỉ: </strong>{" "}
                                            <span>
                                                Thành phố Thủ Đức, Hồ Chí Minh
                                            </span>
                                        </li>
                                        <li>
                                            <img
                                                src="/assets/imgs/theme/icons/icon-contact.svg"
                                                alt="nest"
                                            />
                                            <strong>Liên hệ:</strong>
                                            <span>(+91) - 540-025-124553</span>
                                        </li>
                                        <li>
                                            <img
                                                src="/assets/imgs/theme/icons/icon-email-2.svg"
                                                alt="nest"
                                            />
                                            <strong>Email:</strong>
                                            <span>info@agritrust.com</span>
                                        </li>
                                        <li>
                                            <img
                                                src="/assets/imgs/theme/icons/icon-clock.svg"
                                                alt="nest"
                                            />
                                            <strong>Thời gian làm việc:</strong>
                                            <span>
                                                10:00 - 18:00, Mon - Sat
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div
                                className="footer-link-widget col  wow animate__animated animate__fadeInUp"
                                data-wow-delay=".1s"
                            >
                                <h4 className="widget-title">Agritrust</h4>
                                <ul className="footer-list  mb-sm-5 mb-md-0">
                                    <li>
                                        <a href="#">Về chúng tôi</a>
                                    </li>
                                    <li>
                                        <a href="#">Thông tin giao hàbg</a>
                                    </li>
                                    <li>
                                        <a href="#">Chính sách</a>
                                    </li>
                                    {/* <li>
                                        <a href="#">Terms &amp; Conditions</a>
                                    </li> */}
                                    <li>
                                        <a href="#">Liên hệ với chúng tôi</a>
                                    </li>
                                    <li>
                                        <a href="#">Trung tâm hỗ trợ</a>
                                    </li>
                                    <li>
                                        <a href="#">Làm việc tại Agritrust</a>
                                    </li>
                                </ul>
                            </div>
                            <div
                                className="footer-link-widget col  wow animate__animated animate__fadeInUp"
                                data-wow-delay=".2s"
                            >
                                <h4 className="widget-title ">Tài khoản</h4>
                                <ul className="footer-list  mb-sm-5 mb-md-0">
                                    <li>
                                        <a href="#">Đăng nhập</a>
                                    </li>
                                    <li>
                                        <a href="#">Giỏ hàng</a>
                                    </li>
                                    <li>
                                        <a href="#">Danh sách mong muốn</a>
                                    </li>
                                    <li>
                                        <a href="#">Theo dõi đơn hàng</a>
                                    </li>
                                    {/* <li>
                                        <a href="#">Help Ticket</a>
                                    </li> */}
                                    <li>
                                        <a href="#">Chi tiết giao hàng</a>
                                    </li>
                                    <li>
                                        <a href="#">So sánh sản phẩm</a>
                                    </li>
                                </ul>
                            </div>
                            <div
                                className="footer-link-widget col  wow animate__animated animate__fadeInUp"
                                data-wow-delay=".3s"
                            >
                                <h4 className="widget-title ">Hợp tác</h4>
                                <ul className="footer-list  mb-sm-5 mb-md-0">
                                    <li>
                                        <a href="#">Trở thành nhà cung cấp</a>
                                    </li>
                                    <li>
                                        <a href="#">Tiếp thị liên kết</a>
                                    </li>
                                    {/* <li>
                                        <a href="#">Farm Business</a>
                                    </li>
                                    <li>
                                        <a href="#">Farm Careers</a>
                                    </li>
                                    <li>
                                        <a href="#">Our Suppliers</a>
                                    </li>
                                    <li>
                                        <a href="#">Accessibility</a>
                                    </li>
                                    <li>
                                        <a href="#">Promotions</a>
                                    </li> */}
                                </ul>
                            </div>
                            <div
                                className="footer-link-widget col  wow animate__animated animate__fadeInUp"
                                data-wow-delay=".4s"
                            >
                                {/* <h4 className="widget-title ">Popular</h4> */}
                                {/* <ul className="footer-list  mb-sm-5 mb-md-0">
                                    <li>
                                        <a href="#">Milk & Flavoured Milk</a>
                                    </li>
                                    <li>
                                        <a href="#">Butter and Margarine</a>
                                    </li>
                                    <li>
                                        <a href="#">Eggs Substitutes</a>
                                    </li>
                                    <li>
                                        <a href="#">Marmalades</a>
                                    </li>
                                    <li>
                                        <a href="#">Sour Cream and Dips</a>
                                    </li>
                                    <li>
                                        <a href="#">Tea & Kombucha</a>
                                    </li>
                                    <li>
                                        <a href="#">Cheese</a>
                                    </li>
                                </ul> */}
                            </div>
                            <div
                                className="footer-link-widget widget-install-app col  wow animate__animated animate__fadeInUp"
                                data-wow-delay=".5s"
                            >
                                <h4 className="widget-title ">Install App</h4>
                                <p className="">From App Store or Google Play</p>
                                <div className="download-app ">
                                    <a
                                        href="#"
                                        className="hover-up mb-sm-2 mb-lg-0"
                                    >
                                        <img
                                            className="active"
                                            src="/assets/imgs/theme/app-store.jpg"
                                            alt="nest"
                                        />
                                    </a>
                                    <a href="#" className="hover-up mb-sm-2">
                                        <img
                                            src="/assets/imgs/theme/google-play.jpg"
                                            alt="nest"
                                        />
                                    </a>
                                </div>
                                <p className="mb-20 ">Secured Payment Gateways</p>
                                <img
                                    className=""
                                    src="/assets/imgs/theme/payment-method.png"
                                    alt="nest"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <div
                    className="container pb-30  wow animate__animated animate__fadeInUp"
                    data-wow-delay="0"
                >
                    <div className="row align-items-center">
                        <div className="col-12 mb-30">
                            <div className="footer-bottom"></div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <p className="font-sm mb-0">
                                &copy; 2024,{" "}
                                <strong className="text-brand">Agritrust</strong><br />
                                All rights reserved
                            </p>
                        </div>
                        <div className="col-xl-4 col-lg-6 text-center d-none d-xl-block">
                            <div className="hotline d-lg-inline-flex mr-30">
                                <img
                                    src="/assets/imgs/theme/icons/phone-call.svg"
                                    alt="hotline"
                                />
                                <p>
                                    1900 - 6666<span>Working 8:00 - 22:00</span>
                                </p>
                            </div>
                            <div className="hotline d-lg-inline-flex">
                                <img
                                    src="/assets/imgs/theme/icons/phone-call.svg"
                                    alt="hotline"
                                />
                                <p>
                                    1900 - 8888<span>24/7 Support Center</span>
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 text-end d-none d-md-block">
                            <div className="mobile-social-icon">
                                <h6>Follow Us</h6>
                                <a href="#">
                                    <img
                                        src="/assets/imgs/theme/icons/icon-facebook-white.svg"
                                        alt="nest"
                                    />
                                </a>
                                <a href="#">
                                    <img
                                        src="/assets/imgs/theme/icons/icon-twitter-white.svg"
                                        alt="nest"
                                    />
                                </a>
                                <a href="#">
                                    <img
                                        src="/assets/imgs/theme/icons/icon-instagram-white.svg"
                                        alt="nest"
                                    />
                                </a>
                                <a href="#">
                                    <img
                                        src="/assets/imgs/theme/icons/icon-pinterest-white.svg"
                                        alt="nest"
                                    />
                                </a>
                                <a href="#">
                                    <img
                                        src="/assets/imgs/theme/icons/icon-youtube-white.svg"
                                        alt="nest"
                                    />
                                </a>
                            </div>
                            <p className="font-sm">
                                Up to 15% discount on your first subscribe
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
