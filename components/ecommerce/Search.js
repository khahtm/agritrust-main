import { useRouter } from "next/router";
import React, { useState } from "react";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    console.log("click");
    router.push({
      pathname: "/products",
      query: {
        search: searchTerm,
      },
    });
    setSearchTerm("");
  };

  const handleInput = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };
  return (
    <>
      <form>
        <select className="select-active pe-0">
          <option>Tất cả danh mục</option>
          <option>Trà</option>
          <option>Cà phê</option>
          <option>Gạo</option>
          <option>Thực phẩm qua chế biến</option>
        </select>
        <input
          value={searchTerm}
          onKeyDown={handleInput}
          onChange={(e) => setSearchTerm(e.target.value)}
          type="text"
          placeholder="Search"
        />
      </form>
    </>
  );
};

export default Search;
