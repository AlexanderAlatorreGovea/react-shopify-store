import React, { useEffect, useState } from "react";
import { ThunkDispatch } from "redux-thunk";

import { RootState } from "../../redux/store";
import { fetchAllProducts } from "../../redux/products/products.actions";
import Spinner from "../Spinner/Spinner";

import { useAppSelector, useThunkDispatch } from "../../utils/hooks";

import "./Products.scss";
import ErrorModal from "../ErrorModal/ErrorModal";

const Products: React.FC = () => {
  const [closedModal, setClosedModal] = useState(false);
  const dispatch: ThunkDispatch<RootState, null, any> = useThunkDispatch();
  const { products, isFetching, errorMessage } = useAppSelector(
    (state: RootState) => state.products
  );
 
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  const closedModalHandler = (): void => {
    setClosedModal(true);
  };

  return (
    <>
      <div className="products" data-testid="products">
        <div className="products__wrapper">
          {isFetching ? (
            <Spinner />
          ) : (
            products &&
            products?.map((product) => {
              return (
                <div
                  className="products__container"
                  key={product.id}
                  data-testid="product-wrapper"
                >
                  <img src={`${product.images[0].src}`} />
                  <p>{product.title}</p>
                </div>
              );
            })
          )} 
        </div>
        {errorMessage && !closedModal ? (
          <ErrorModal
            closeModalHandler={closedModalHandler}
            data-testid="error"
            title="An error ocurred!"
            message={errorMessage}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Products;
