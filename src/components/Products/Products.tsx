import { useEffect } from "react";
//import { Link } from "react-router-dom";
import { ThunkDispatch } from "redux-thunk";

import { RootState } from "../../redux/store";
import { fetchAllProducts } from "../../redux/products/products.actions";
import Spinner from "../Spinner/Spinner";

import { useAppSelector, useThunkDispatch } from "../../utils/hooks";

import "./Products.scss";

const Products: React.FC = () => {
  const dispatch: ThunkDispatch<RootState, null, any> = useThunkDispatch();

  const { products, isFetching, errorMessage } = useAppSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  return (
    <div className="products">
      <div className="products__wrapper">
        {isFetching ? (
          <Spinner />
        ) : (
          products &&
          products?.map((product) => {
            return (
              <div className="products__wrapper--container" key={product.id}>
                <img
                  width="300"
                  height="300"
                  src={`${product.images[0].src}`}
                />
                <p>{product.title}</p>
              </div>
            );
          })
        )}
      </div>
      {errorMessage && (
        <p>{`Server responded with the following error: ${errorMessage}`}</p>
      )}
    </div>
  );
};

export default Products;
