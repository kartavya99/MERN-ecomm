import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useStoreContext } from "../../utils/GlobalState";
import { QUERY_ALL_PRODUCTS } from "../../utils/queries";

const ProductList = () => {
  const [state, dispatch] = useStoreContext();

  const { data, loading } = useQuery(QUERY_ALL_PRODUCTS);

  useEffect(() => {
    if (loading) {
      <p>....Loading</p>;
    } else {
      console.log(data);
    }
  });

  return <div></div>;
};

export default ProductList;
