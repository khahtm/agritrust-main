import { useRouter } from "next/router";
import { connect } from "react-redux";
import { updateProductCategory } from "../../../redux/action/productFiltersAction";

const CategoryProduct3 = ({ updateProductCategory }) => {




    const router = useRouter();

    // const removeSearchTerm = () => {
    //     router.push({
    //         pathname: "/products",
    //     });
    // };

    const selectCategory = (e, category) => {
        e.preventDefault();
        // removeSearchTerm();
        updateProductCategory(category);
        router.push({
            pathname: "/products",
            query: {
                cat: category, //
            },
        });
    };
    return (
        <>
            <ul  className="end">
                <li onClick={(e) => selectCategory(e, "jeans")}>
                    <a>
                        <img
                            src="/assets/imgs/theme/icons/category-1.svg"
                            alt="nest"
                        />
                        Cà phê
                    </a>

                </li>
                <li onClick={(e) => selectCategory(e, "shoe")}>
                    <a>
                        <img
                            src="/assets/imgs/theme/icons/category-2.svg"
                            alt="nest"
                        />
                        Rau củ
                    </a>

                </li>
                <li onClick={(e) => selectCategory(e, "jacket")}>
                    <a>
                        <img
                            src="/assets/imgs/theme/icons/category-3.svg"
                            alt="nest"
                        />
                        Gạo{" "}
                    </a>

                </li>
                <li onClick={(e) => selectCategory(e, "trousers")}>
                    <a>
                        <img
                            src="/assets/imgs/theme/icons/category-4.svg"
                            alt="nest"
                        />
                        Sau chế biến
                    </a>

                </li>
                <li onClick={(e) => selectCategory(e, "accessories")}>
                    <a>
                        <img
                            src="/assets/imgs/theme/icons/category-5.svg"
                            alt="nest"
                        />
                        Thực phẩm tươi
                    </a>
                </li>
            </ul>
        </>
    );
};

export default connect(null, { updateProductCategory })(CategoryProduct3);
