import axios from "axios";
import React from "react";
import useFetch from "../../hooks/useFetch";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?filters[type][$eq]=${type}&populate=*`
  );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley.
        </p>
      </div>
      <div className="bottom">
        {error
          ? "Something went wrong!"
          : loading
          ? "loading"
          : data.map((item) => {
              return <Card item={item} key={item.id} />;
            })}
      </div>
    </div>
  );
};

export default FeaturedProducts;
