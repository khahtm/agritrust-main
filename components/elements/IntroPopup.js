import Link from "next/link";
import { useState } from "react";
import Timer from "./Timer";

const IntroPopup = () => {
    const [openClass, setOpenClass] = useState(0);

    const handleRemove = () => {
        setOpenClass(!openClass);
    };
    const fixDate = new Date();
    return (
        <>
            <div className={openClass ? "modal fade custom-modal d-none" : "modal fade custom-modal  show d-block"}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <button type="button" className="btn-close" onClick={handleRemove}></button>
                        <div className="modal-body">
                            <div
                                className="deal"
                                style={{
                                    backgroundImage: "url('assets/imgs/banner/popup-1.png')"
                                }}
                            >
                                <div className="deal-top">
                                    <h2 className="text-brand">Deal hời trong ngày</h2>
                                    <h5>Giao ngay trong 6 giờ.</h5>
                                </div>
                                <div className="deal-content  detail-info">
                                    <h6 className="product-title">
                                        <Link href="/shop-product-right" className="text-heading">
                                            Đu đủ Organic độc quyền từ NaFood
                                        </Link>
                                    </h6>
                                    <div className="clearfix product-price-cover">
                                        <div className="product-price primary-color float-left">
                                            <span className="current-price text-brand">14.000đ</span>
                                            <span>
                                                <span className="save-price font-md color3 ml-15">Giảm 26%</span>
                                                <span className="old-price font-md ml-15">20.000</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="deal-bottom">
                                    <p className="mb-20">Đặt hàng ngay, số lượng có hạn!</p>
                                    {/* <Timer endDateTime="2024-11-27 00:00:00" /> */}
                                    <Timer endDateTime={fixDate.setDate(fixDate.getDate() + 2)} />
                                    <div className="product-detail-rating">
                                        <div className="product-rate-cover text-end">
                                            <div className="product-rate d-inline-block">
                                                <div className="product-rating" style={{ width: "90%" }}></div>
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (32 rates)</span>
                                        </div>
                                    </div>

                                    <Link href="/shop-grid-right" className="btn hover-up">
                                        Shop Now <i className="fi-rs-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={openClass ? "modal-backdrop fade d-none" : "modal-backdrop fade show"}></div>
        </>
    );
};

export default IntroPopup;
