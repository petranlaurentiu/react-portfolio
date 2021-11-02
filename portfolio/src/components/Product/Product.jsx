import React from "react";

const Product = ({ img, link }) => {
  return (
    // <div className="p">
    //   <div className="p-browser">
    //     <p className="p-circle"></p>
    //     <p className="p-circle"></p>
    //     <p className="p-circle"></p>
    //   </div>
    //   <a href={link} target="_blank" rel="noreferrer">
    //     <img src={img} alt="" className="p-img" />
    //   </a>
    // </div>

    <div className="c">
      <div className="i">
        <img src={img} alt="" className="img" />
        <div className="s1"></div>
        <div className="s2"></div>
        <div className="s3"></div>
      </div>
    </div>
  );
};

export default Product;
