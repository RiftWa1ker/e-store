import React from "react";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";
import "./List.scss";
import { useState } from "react";
const List = ({ maxPrice, catId, subCats, sort }) => {
  let query = "";
  subCats.forEach((item) => {
    query += `&filters[sub_categories][id][$eq]=${item}`;
  });

  const { data, error, loading } = useFetch(
    `/products?populate=*&filters[categories][id]=${catId}${query}&filters[price][$lte]=${maxPrice}&sort=price:${sort}`
  );

  return (
    <div className="list">
      {loading
        ? "loading"
        : data?.map((item) => {
            return <Card item={item} key={item.id} />;
          })}
    </div>
  );
};

export default List;
