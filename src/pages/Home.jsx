import React from "react";
import { Product } from "../components/Product";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slices/products";
import Shops from "../components/Shops";

const Home = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const isProductLoading = products.status === "loading";
  const [shopName, setShopName] = React.useState("");

  return (
    <>
      <div className="recommended__header">
        <div className="section_header">
          <h3>Delivery</h3>
        </div>
        <Shops
          value={shopName}
          onClickShop={(shop) => setShopName(shopName === shop ? "" : shop)}
        />
      </div>
      <div className="grid-container">
        {(isProductLoading ? [...Array(9)] : products.items).map((obj, index) =>
          isProductLoading ? (
            <Product className="grid-item" key={index} isLoading={true} />
          ) : (
            <Product className="grid-item" key={index} {...obj} />
          )
        )}
      </div>
    </>
  );
};

export default Home;
