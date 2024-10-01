import React from "react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { BsArrowUpSquare } from "react-icons/bs";
const End = () => {
  return (
    <>
      <section className="end">
        <div className="last" style={{display : "flex"}}>
        <AiOutlineCopyrightCircle color="#EC5700"/>
          <p>
            Created by Samreen Inayat 2023 All Rights Reserved.
          </p>
         
        </div>
        <div className="top">
          <a href="#home">
            <BsArrowUpSquare style={{ color: "#EC5700" }} />
          </a>
        </div>
      </section>
    </>
  );
};

export default End;
