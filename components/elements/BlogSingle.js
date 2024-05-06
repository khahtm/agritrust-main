import Link from "next/link";
import React from "react";

const BlogSingle = () => {
    return (
        <>
            <div className="single-page pt-50 pr-30">
                <div className="single-header style-2">
                    <div className="row">
                        <div className="col-xl-10 col-lg-12 m-auto">
                            <h6 className="mb-10">
                                <Link href="#">Recipes</Link>
                            </h6>
                            <h2 className="mb-10">
                                Tinh Thần Tự Hào Trong Nông Sản Việt: Sự Kiêu Hãnh Của Gạo Nương Tây Bắc
                            </h2>
                            <div className="single-header-meta">
                                <div className="entry-meta meta-1 font-xs mt-15 mb-15">
                                    <Link href="#" className="author-avatar">
                                        <img
                                            className="img-circle"
                                            src="/assets/imgs/blog/author-1.png"
                                            alt="nest"
                                        />
                                    </Link>
                                    <span className="post-by">
                                        By <Link href="#">Sugar Rosie</Link>
                                    </span>
                                    <span className="post-on has-dot">
                                        2 hours ago
                                    </span>
                                    <span className="time-reading has-dot">
                                        8 mins read
                                    </span>
                                </div>
                                <div className="social-icons single-share">
                                    <ul className="text-grey-5 d-inline-block">
                                        <li className="mr-5">
                                            <Link href="#">
                                                <img
                                                    src="/assets/imgs/theme/icons/icon-bookmark.svg"
                                                    alt="nest"
                                                />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <img
                                                    src="/assets/imgs/theme/icons/icon-heart-2.svg"
                                                    alt="nest"
                                                />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <figure className="single-thumbnail">
                    <img src="/assets/imgs/blog/blog-19.png" alt="nest" />
                </figure>
                <div className="single-content">
                    <div className="row">
                        <div className="col-xl-10 col-lg-12 m-auto">
                            <p className="single-excerpt">
                                Trong thế giới nông sản đa dạng của Việt Nam, gạo nương Tây Bắc nổi lên như một biểu tượng của 
                                sự tinh túy và sức mạnh văn hóa nông nghiệp của vùng đất này.

                            </p>
                            <p>
                                Được tạo ra từ những cánh đồng lúa bạt ngàn trải dài trên những thửa ruộng bậc thang, 
                                gạo nương Tây Bắc không chỉ là một sản phẩm, mà còn là biểu tượng của sự kiêu hãnh và 
                                tinh thần tự hào của người dân nơi đây.
                            </p>
                            <h5 className="mt-50">
                                Sự Kỳ Vọng Trong Mỗi Hạt Gạo
                            </h5>
                            <p>
                                Gạo nương Tây Bắc không chỉ là kết quả của một quá trình sản xuất, 
                                mà còn là kết tinh của nền văn hóa và truyền thống lâu đời của người dân 
                                vùng núi. Với mỗi hạt gạo được gieo trồng và chăm sóc bằng tình yêu thương, có một câu chuyện về sự kiên trì và lòng dũng cảm của những người nông dân, vượt qua những khó khăn của thiên nhiên để tạo ra sản phẩm tuyệt vời này.
                            </p>
                            <img
                                className="mb-30"
                                src="/assets/imgs/blog/blog-21.png"
                                alt="nest"
                            />
                            <p>
                                 Gạo nương Tây Bắc không chỉ nổi tiếng với vẻ đẹp của những hạt gạo trắng tinh khiết
                                 mà còn là với hương vị đặc trưng và dinh dưỡng tuyệt vời. Với mỗi hạt gạo, ta có cơ 
                                 hội trải nghiệm hương vị độc đáo của vùng đất Tây Bắc, cảm nhận được sự tự nhiên và tươi mới mỗi khi thưởng thức.
                            </p>
                            <blockquote>
                                <p>
                                    {/* <Link href="#">dolor</Link> */}
                                    <sup>
                                        {/* <Link href="#">[5]</Link> */}
                                    </sup>
                                        Gạo nương Tây Bắc không chỉ là một sản phẩm, mà còn là biểu tượng 
                                        của sự kiêu hãnh và lòng tự hào dân tộc. Mỗi hạt gạo là một câu chuyện về sự 
                                        tận tâm và nỗ lực của những người nông dân, đồng thời là cam kết của Việt Nam trong 
                                        việc bảo vệ và phát triển nền nông nghiệp bền vững.
                                </p>
                            </blockquote>
                            <p>
                                Trong bối cảnh thị trường quốc tế ngày càng cạnh tranh, việc giữ vững và phát triển thương
                                 hiệu gạo nương Tây Bắc không chỉ là vấn đề của một cá nhân hay một doanh nghiệp, mà là trách 
                                 nhiệm của toàn xã hội. Chỉ thông qua sự đoàn kết và hợp tác, chúng ta mới có thể giữ vững và phát 
                                 triển tinh thần tự hào trong nông sản Việt Nam, đồng thời giữ được vị thế của gạo nương Tây Bắc trên thị trường quốc tế.
                            </p>

                            <div className="entry-bottom mt-50 mb-30">
                                <div className="tags w-50 w-sm-100">
                                    <Link href="/blog-category-big" className="hover-up btn btn-sm btn-rounded mr-10">
                                        Gạo nương
                                    </Link>
                                    <Link href="/blog-category-big"  className="hover-up btn btn-sm btn-rounded mr-10">
                                        Tây Bắc
                                    </Link>
                                    <Link href="/blog-category-big" className="hover-up btn btn-sm btn-rounded mr-10">
                                        Agritrust
                                    </Link>
                                </div>
                                <div className="social-icons single-share">
                                    <ul className="text-grey-5 d-inline-block">
                                        <li>
                                            <strong className="mr-10">
                                                Share this:
                                            </strong>
                                        </li>
                                        <li className="social-facebook">
                                            <Link href="#">
                                                <img
                                                    src="/assets/imgs/theme/icons/icon-facebook.svg"
                                                    alt="nest"
                                                />
                                            </Link>
                                        </li>
                                        <li className="social-twitter">
                                            <Link href="#">
                                                <img
                                                    src="/assets/imgs/theme/icons/icon-twitter.svg"
                                                    alt="nest"
                                                />
                                            </Link>
                                        </li>
                                        <li className="social-instagram">
                                            <Link href="#">
                                                <img
                                                    src="/assets/imgs/theme/icons/icon-instagram.svg"
                                                    alt="nest"
                                                />
                                            </Link>
                                        </li>
                                        <li className="social-linkedin">
                                            <Link href="#">
                                                <img
                                                    src="/assets/imgs/theme/icons/icon-pinterest.svg"
                                                    alt="nest"
                                                />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="author-bio p-30 mt-50 border-radius-15 bg-white">
                                <div className="author-image mb-30">
                                    <Link href="/author">
                                        <img
                                            src="/assets/imgs/blog/author-1.png"
                                            alt="nest"
                                            className="avatar"
                                        />
                                    </Link>
                                    <div className="author-infor">
                                        <h5 className="mb-5">Barbara Cartland</h5>
                                        <p className="mb-0 text-muted font-xs">
                                            <span className="mr-10">306 posts</span>
                                            <span className="has-dot">
                                                Since 2012
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <div className="author-des">
                                    <p>
                                        Hi there, I am a veteran food blogger
                                        sharing my daily all kinds of healthy
                                        and fresh recipes. I find inspiration in
                                        nature, on the streets and almost
                                        everywhere. Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit. Amet id
                                        enim, libero sit. Est donec lobortis
                                        cursus amet, cras elementum libero
                                    </p>
                                </div>
                            </div>

                            <div className="comment-form">
                                <h3 className="mb-15">Leave a Comment</h3>
                                <div className="product-rate d-inline-block mb-30"></div>
                                <div className="row">
                                    <div className="col-lg-9 col-md-12">
                                        <form
                                            className="form-contact comment_form mb-50"
                                            action="#"
                                            id="commentForm"
                                        >
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <textarea
                                                            className="form-control w-100"
                                                            name="comment"
                                                            id="comment"
                                                            cols="30"
                                                            rows="9"
                                                            placeholder="Write Comment"
                                                        ></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <input
                                                            className="form-control"
                                                            name="name"
                                                            id="name"
                                                            type="text"
                                                            placeholder="Name"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <input
                                                            className="form-control"
                                                            name="email"
                                                            id="email"
                                                            type="email"
                                                            placeholder="Email"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <input
                                                            className="form-control"
                                                            name="website"
                                                            id="website"
                                                            type="text"
                                                            placeholder="Website"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <button
                                                    type="submit"
                                                    className="button button-contactForm"
                                                >
                                                    Post Comment
                                                </button>
                                            </div>
                                        </form>
                                        <div className="comments-area">
                                            <h3 className="mb-30">Comments</h3>
                                            <div className="comment-list">
                                                <div className="single-comment justify-content-between d-flex mb-30">
                                                    <div className="user justify-content-between d-flex">
                                                        <div className="thumb text-center">
                                                            <img
                                                                src="/assets/imgs/blog/author-2.png"
                                                                alt="nest"
                                                            />
                                                            <Link href="#"  className="font-heading text-brand">Sienna</Link>
                                                        </div>
                                                        <div className="desc">
                                                            <div className="d-flex justify-content-between mb-10">
                                                                <div className="d-flex align-items-center">
                                                                    <span className="font-xs text-muted">
                                                                        December
                                                                        4, 2024
                                                                        at 3:12
                                                                        pm{" "}
                                                                    </span>
                                                                </div>
                                                                <div className="product-rate d-inline-block">
                                                                    <div
                                                                        className="product-rating"
                                                                        style={{ "width": "80%" }}
                                                                    ></div>
                                                                </div>
                                                            </div>
                                                            <p className="mb-10">
                                                                Lorem ipsum
                                                                dolor sit amet,
                                                                consectetur
                                                                adipisicing
                                                                elit. Delectus,
                                                                suscipit
                                                                exercitationem
                                                                accusantium
                                                                obcaecati quos
                                                                voluptate
                                                                nesciunt facilis
                                                                itaque modi
                                                                commodi
                                                                dignissimos
                                                                sequi
                                                                repudiandae
                                                                minus ab
                                                                deleniti totam
                                                                officia id
                                                                incidunt?{" "}
                                                                <Link href="#" className="reply">
                                                                    Reply
                                                                </Link>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="single-comment justify-content-between d-flex mb-30 ml-30">
                                                    <div className="user justify-content-between d-flex">
                                                        <div className="thumb text-center">
                                                            <img
                                                                src="/assets/imgs/blog/author-3.png"
                                                                alt="nest"
                                                            />
                                                            <Link href="#" className="font-heading text-brand">
                                                                Brenna
                                                            </Link>
                                                        </div>
                                                        <div className="desc">
                                                            <div className="d-flex justify-content-between mb-10">
                                                                <div className="d-flex align-items-center">
                                                                    <span className="font-xs text-muted">
                                                                        December
                                                                        4, 2024
                                                                        at 3:12
                                                                        pm{" "}
                                                                    </span>
                                                                </div>
                                                                <div className="product-rate d-inline-block">
                                                                    <div
                                                                        className="product-rating"
                                                                        style={{ "width": "80%" }}
                                                                    ></div>
                                                                </div>
                                                            </div>
                                                            <p className="mb-10">
                                                                Lorem ipsum
                                                                dolor sit amet,
                                                                consectetur
                                                                adipisicing
                                                                elit. Delectus,
                                                                suscipit
                                                                exercitationem
                                                                accusantium
                                                                obcaecati quos
                                                                voluptate
                                                                nesciunt facilis
                                                                itaque modi
                                                                commodi
                                                                dignissimos
                                                                sequi
                                                                repudiandae
                                                                minus ab
                                                                deleniti totam
                                                                officia id
                                                                incidunt?{" "}
                                                                <Link href="#" className="reply">
                                                                    Reply
                                                                </Link>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="single-comment justify-content-between d-flex">
                                                    <div className="user justify-content-between d-flex">
                                                        <div className="thumb text-center">
                                                            <img
                                                                src="/assets/imgs/blog/author-4.png"
                                                                alt="nest"
                                                            />
                                                            <Link href="#" className="font-heading text-brand">
                                                                Gemma
                                                            </Link>
                                                        </div>
                                                        <div className="desc">
                                                            <div className="d-flex justify-content-between mb-10">
                                                                <div className="d-flex align-items-center">
                                                                    <span className="font-xs text-muted">
                                                                        December
                                                                        4, 2024
                                                                        at 3:12
                                                                        pm{" "}
                                                                    </span>
                                                                </div>
                                                                <div className="product-rate d-inline-block">
                                                                    <div
                                                                        className="product-rating"
                                                                        style={{ "width": "80%" }}
                                                                    ></div>
                                                                </div>
                                                            </div>
                                                            <p className="mb-10">
                                                                Lorem ipsum
                                                                dolor sit amet,
                                                                consectetur
                                                                adipisicing
                                                                elit. Delectus,
                                                                suscipit
                                                                exercitationem
                                                                accusantium
                                                                obcaecati quos
                                                                voluptate
                                                                nesciunt facilis
                                                                itaque modi
                                                                commodi
                                                                dignissimos
                                                                sequi
                                                                repudiandae
                                                                minus ab
                                                                deleniti totam
                                                                officia id
                                                                incidunt?{" "}
                                                                <Link href="#" className="reply">
                                                                    Reply
                                                                </Link>
                                                            </p>
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
                </div>
            </div>
        </>
    );
};

export default BlogSingle;
