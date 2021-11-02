import React from "react";
import Product from "../Product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <div className="pl-title">
          Create & Inspire
          <div className="pl-desc">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod a
              nobis quae, temporibus dicta doloremque explicabo provident
              cupiditate voluptate mollitia.
            </p>
          </div>
          <div className="pl-list">
            {products.map((item) => (
              <Product key={item.id} img={item.img} link={item.link} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
