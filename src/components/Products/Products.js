import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchAllProducts } from "../../redux/products/products.actions";

const Products = () => {
  const dispatch = useDispatch();
  const { products, isFetching, errorMessage } = useSelector(
    (state) => state.products
  );


  useEffect(() => {
    dispatch(fetchAllProducts());
 }, [dispatch]);



  return (
    <>
      <div className="product__container"></div>
    </>
  );
};

export default Products;
