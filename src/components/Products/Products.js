import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { fetchAllProducts } from "../../redux/products/products.actions";
import Spinner from "../Spinner/Spinner";

const Products = () => {
  const dispatch = useDispatch(); 

  const { products, isFetching, errorMessage } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  return (
    <div className="products">
      {isFetching ? (
        <Spinner />
      ) : (
       products && products.map((product) => {
          return (
            <div className="product__wrapper" key={product.id}>
              <img width="300" height="300" src={`${product.images[0].src}`} />
              <p>{product.title}</p>
            </div>
          );
        })
      )}
      {errorMessage && <p>{`Server responded with the following error: ${errorMessage}`}</p>}
    </div>
  );
};

export default Products;
