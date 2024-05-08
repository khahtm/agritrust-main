import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import CategoryProduct2 from "../ecommerce/Filter/CategoryProduct2";
import CategoryProduct3 from "../ecommerce/Filter/CategoryProduct3";
import Search from "../ecommerce/Search";

const navs = [
  {
    path: "/products",
    title: "Deal Hời",
    isHotDeal: true,
  },
  {
    path: "/",
    title: "Trang Chủ",
  },
  {
    path: "/products",
    title: "Shop",
  },
  {
    path: "/vendors-list",
    title: "Nhà Cung Cấp",
  },
  {
    path: "/blog-category-grid",
    title: "Chuyện nông sản Việt",
  },
  {
    path: "/page-about",
    title: "Về chúng tôi",
  },
  {
    path: "/page-contact",
    title: "Liên Hệ",
  },
];
const Header = ({
  totalCartItems,
  totalCompareItems,
  toggleClick,
  totalWishlistItems,
}) => {
  const [isToggled, setToggled] = useState(false);
  const [scroll, setScroll] = useState(0);
  const router = useRouter();

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY >= 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });

  const handleToggle = () => setToggled(!isToggled);

  return (
    <>
      <header className="header-area header-style-1 header-height-2">
        <div className="mobile-promotion">
          <span>
            Grand opening, <strong>up to 15%</strong> off all items. Only{" "}
            <strong>3 days</strong> left
          </span>
        </div>
        <div className="header-middle header-middle-ptb-1 d-none d-lg-block">
          <div className="container">
            <div className="header-wrap">
              <div className="logo logo-width-1">
                <Link href="/">
                  <img src="/assets/imgs/theme/logo.svg" alt="logo" />
                </Link>
              </div>
              <div className="header-right">
                <div className="search-style-2">
                  <Search />
                </div>
                <div className="header-action-right">
                  <div className="header-action-2">
                    <div className="header-action-icon-2">
                      <Link href="/shop-compare">
                        <img
                          className="svgInject"
                          alt="Evara"
                          src="/assets/imgs/theme/icons/icon-compare.svg"
                        />
                        <span className="pro-count blue">
                          {totalCompareItems}
                        </span>
                      </Link>
                      <Link
                        href="/shop-compare"
                        className="d-flex align-items-center"
                      >
                        <span className="lable my-0">So sánh</span>
                      </Link>
                    </div>
                    <div className="header-action-icon-2">
                      <Link href="/shop-wishlist">
                        <img
                          className="svgInject"
                          alt="Evara"
                          src="/assets/imgs/theme/icons/icon-heart.svg"
                        />
                        <span className="pro-count blue">
                          {totalWishlistItems}
                        </span>
                      </Link>
                      <Link
                        href="/shop-wishlist"
                        className="d-flex align-items-center"
                      >
                        <span className="lable my-0">Yêu thích</span>
                      </Link>
                    </div>
                    <div className="header-action-icon-2">
                      <Link href="/shop-cart" className="mini-cart-icon">
                        <img
                          alt="Evara"
                          src="/assets/imgs/theme/icons/icon-cart.svg"
                        />
                        <span className="pro-count blue">{totalCartItems}</span>
                      </Link>
                      <Link
                        href="/shop-cart"
                        className="d-flex align-items-center"
                      >
                        <span className="lable my-0">Giỏ Hàng</span>
                      </Link>
                    </div>

                    <div className="header-action-icon-2">
                      <img
                        className="svgInject"
                        alt="Nest"
                        src="/assets/imgs/theme/icons/icon-user.svg"
                      />
                      <span className="lable my-0">Tài khoản</span>
                      <div className="cart-dropdown-wrap cart-dropdown-hm2 account-dropdown">
                        <ul>
                          <li>
                            <Link href="/page-account">
                              <i className="fi fi-rs-user mr-10"></i>
                              Tài khoản của tôi
                            </Link>
                          </li>
                          <li>
                            <Link href="/page-account">
                              <i className="fi fi-rs-location-alt mr-10"></i>
                              Theo dõi đơn hàng
                            </Link>
                          </li>
                          <li>
                            <Link href="/page-account">
                              <i className="fi fi-rs-label mr-10"></i>
                              Voucher của tôi
                            </Link>
                          </li>
                          <li>
                            <Link href="/shop-wishlist">
                              <i className="fi fi-rs-heart mr-10"></i>
                              Danh sách yêu thích
                            </Link>
                          </li>
                          <li>
                            <Link href="/page-account">
                              <i className="fi fi-rs-settings-sliders mr-10"></i>
                              Cài đặt
                            </Link>
                          </li>
                          <li>
                            <Link href="/page-login">
                              <i className="fi fi-rs-sign-out mr-10"></i>
                              Đăng xuất
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            scroll
              ? "header-bottom header-bottom-bg-color sticky-bar stick"
              : "header-bottom header-bottom-bg-color sticky-bar"
          }
        >
          <div className="container">
            <div className="header-wrap header-space-between position-relative">
              <div className="logo logo-width-1 d-block d-lg-none">
                <Link href="/">
                  <img src="/assets/imgs/theme/logo.svg" alt="logo" />
                </Link>
              </div>
              <div className="header-nav d-none d-lg-flex">
                <div className="main-categori-wrap d-none d-lg-block">
                  <a
                    className="categories-button-active"
                    onClick={handleToggle}
                  >
                    <span className="fi-rs-apps"></span>
                    <span className="et">Tất Cả</span>Sản Phẩm
                    <i className="fi-rs-angle-down"></i>
                  </a>

                  <div
                    className={
                      isToggled
                        ? "categories-dropdown-wrap categories-dropdown-active-large font-heading open"
                        : "categories-dropdown-wrap categories-dropdown-active-large font-heading"
                    }
                  >
                    <div className="d-flex categori-dropdown-inner">
                      <CategoryProduct2 />
                      <CategoryProduct3 />
                    </div>
                    <div
                      className="more_slide_open"
                      style={{ display: "none" }}
                    >
                      <div className="d-flex categori-dropdown-inner">
                        <ul>
                          <li>
                            <Link href="/products">
                              <img
                                src="/assets/imgs/theme/icons/icon-1.svg"
                                alt="nest"
                              />
                              Milks and Dairies
                            </Link>
                          </li>
                          <li>
                            <Link href="/products">
                              <img
                                src="/assets/imgs/theme/icons/icon-2.svg"
                                alt="nest"
                              />
                              Clothing & beauty
                            </Link>
                          </li>
                        </ul>
                        <ul className="end">
                          <li>
                            <Link href="/products">
                              <img
                                src="/assets/imgs/theme/icons/icon-3.svg"
                                alt="nest"
                              />
                              Wines & Drinks
                            </Link>
                          </li>
                          <li>
                            <Link href="/products">
                              <img
                                src="/assets/imgs/theme/icons/icon-4.svg"
                                alt="nest"
                              />
                              Fresh Seafood
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="main-menu main-menu-padding-1 main-menu-lh-2 d-none d-lg-block  font-heading">
                  <nav>
                    <ul>
                      {navs &&
                        navs.length > 0 &&
                        navs.map((item, idx) => (
                          <li
                            key={idx}
                            className={item.isHotDeal ? "hot-deals" : null}
                          >
                            {item.isHotDeal && (
                              <img
                                src="/assets/imgs/theme/icons/icon-hot.svg"
                                alt="hot deals"
                              />
                            )}
                            <Link
                              href={item.path}
                              className={
                                item.path === router.asPath ? "active" : null
                              }
                            >
                              {item.title}
                            </Link>
                          </li>
                        ))}
                      {/* <li className="hot-deals">
                        <img
                          src="/assets/imgs/theme/icons/icon-hot.svg"
                          alt="hot deals"
                        />
                        <Link href="/products">Deal Hời</Link>
                      </li>
                      <li>
                        <Link href="/" className="active">
                          Trang Chủ
                        </Link>
                      </li>
                      <li>
                        <Link href="/page-about">Về Agritrust</Link>
                      </li>
                      <li>
                        <Link href="/shop-grid-right">Shop</Link>
                      </li>
                      <li>
                        <Link href="/vendors-list">Nhà Cung Cấp</Link>
                      </li>
                      <li>
                        <Link href="/blog-category-grid">
                          Chuyện nông sản Việt
                        </Link>
                      </li>
                      <li>
                        <Link href="/page-contact">Liên Hệ</Link>
                      </li> */}
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="hotline d-none d-lg-flex">
                <img
                  src="/assets/imgs/theme/icons/icon-headphone.svg"
                  alt="hotline"
                />

                <p>
                  1900 - 6666<span>Tổng đài hỗ trợ 24/7</span>
                </p>
              </div>

              <div className="header-action-icon-2 d-block d-lg-none">
                <div
                  className="burger-icon burger-icon-white"
                  onClick={toggleClick}
                >
                  <span className="burger-icon-top"></span>
                  <span className="burger-icon-mid"></span>
                  <span className="burger-icon-bottom"></span>
                </div>
              </div>

              <div className="header-action-right d-block d-lg-none">
                <div className="header-action-2">
                  <div className="header-action-icon-2">
                    <Link href="/shop-wishlist">
                      <img
                        alt="Evara"
                        src="/assets/imgs/theme/icons/icon-heart.svg"
                      />
                      <span className="pro-count white">
                        {totalWishlistItems}
                      </span>
                    </Link>
                  </div>
                  <div className="header-action-icon-2">
                    <Link href="/shop-cart" className="mini-cart-icon">
                      <img
                        alt="Evara"
                        src="/assets/imgs/theme/icons/icon-cart.svg"
                      />
                      <span className="pro-count white">{totalCartItems}</span>
                    </Link>
                    <div className="cart-dropdown-wrap cart-dropdown-hm2">
                      <ul>
                        <li>
                          <div className="shopping-cart-img">
                            <Link href="/shop-grid-right">
                              <img
                                alt="Evara"
                                src="/assets/imgs/shop/thumbnail-3.jpg"
                              />
                            </Link>
                          </div>
                          <div className="shopping-cart-title">
                            <h4>
                              <Link href="/shop-grid-right">
                                Plain Striola Shirts
                              </Link>
                            </h4>
                            <h3>
                              <span>1 × </span>
                              $800.00
                            </h3>
                          </div>
                          <div className="shopping-cart-delete">
                            <Link href="/#">
                              <i className="fi-rs-cross-small"></i>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="shopping-cart-img">
                            <Link href="/shop-grid-right">
                              <img
                                alt="Evara"
                                src="/assets/imgs/shop/thumbnail-4.jpg"
                              />
                            </Link>
                          </div>
                          <div className="shopping-cart-title">
                            <h4>
                              <Link href="/shop-grid-right">
                                Macbook Pro 2024
                              </Link>
                            </h4>
                            <h3>
                              <span>1 × </span>
                              $3500.00
                            </h3>
                          </div>
                          <div className="shopping-cart-delete">
                            <Link href="/#">
                              <i className="fi-rs-cross-small"></i>
                            </Link>
                          </div>
                        </li>
                      </ul>
                      <div className="shopping-cart-footer">
                        <div className="shopping-cart-total">
                          <h4>
                            Total
                            <span>$383.00</span>
                          </h4>
                        </div>
                        <div className="shopping-cart-button">
                          <Link href="/shop-cart">View cart</Link>
                          <Link href="/shop-checkout">Checkout</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

const mapStateToProps = (state) => ({
  totalCartItems: state.cart.length,
  totalCompareItems: state.compare.items.length,
  totalWishlistItems: state.wishlist.items.length,
});

export default connect(mapStateToProps, null)(Header);
