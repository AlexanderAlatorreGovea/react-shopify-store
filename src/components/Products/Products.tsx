import { useEffect } from "react";
//import { Link } from "react-router-dom";

import { RootState } from "../../redux/store";
import { fetchAllProducts } from "../../redux/products/products.actions";
import Spinner from "../Spinner/Spinner";
 
import { useAppSelector, useAppDispatch } from '../../utils/hooks';

const Products: React.FC = () => {
  const dispatch = useAppDispatch();

  const {
    products,
    isFetching, 
    errorMessage,
  } = useAppSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  return (
    <div className="products">
      {isFetching ? (
        <Spinner />
      ) : (
        products &&
        products.map((product) => {
          return (
            <div className="product__wrapper" key={product.id}>
              <img width="300" height="300" src={`${product.images[0].src}`} />
              <p>{product.title}</p>
            </div>
          );
        })
      )}
      {errorMessage && (
        <p>{`Server responded with the following error: ${errorMessage}`}</p>
      )}
    </div>
  );
};

export default Products;
