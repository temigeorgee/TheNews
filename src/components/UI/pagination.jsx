import React from "react";
import Button from "./btn";
import { FiCornerDownRight, FiCornerDownLeft } from "react-icons/fi";

const Pagination = ({ page, setPage, dataLength }) => {
  const handleChange = (type) => {
    if (type === "next") {
      setPage(page + 1);
      return;
    }
    setPage(page - 1);
  };

  return (
    <div className="flex justify-end items-center gap-3 container">
      <Button
        buttonStyle="btn--primary--outline"
        buttonSize="btn--medium"
        onClick={() => handleChange("prev")}
        disabled={page === 1}
      >
        <FiCornerDownLeft />
      </Button>
      <Button
        buttonStyle="btn--primary--outline"
        buttonSize="btn--medium"
        onClick={() => handleChange("next")}
        disabled={dataLength === 0}
      >
        <FiCornerDownRight />
      </Button>
    </div>
  );
};

export default Pagination;
