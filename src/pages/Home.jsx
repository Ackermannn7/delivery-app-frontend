import React from "react";
import { Product } from "../components/Product";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slices/products";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const isProductLoading = products.status === "loading";

  React.useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      <div className="recommended__header">
        <div className="section_header">
          <h3>Delivery</h3>
        </div>
      </div>
      <div className="grid-container">
        {(isProductLoading ? [...Array(9)] : products.items).map((obj, index) =>
          isProductLoading ? (
            <Product className="grid-item" key={index} isLoading={true} />
          ) : (
            <Link to={`/products/${obj._id}`}>
              <Product className="grid-item" key={obj.id} {...obj} />
            </Link>
          )
        )}
      </div>
    </>
  );
};

export default Home;
