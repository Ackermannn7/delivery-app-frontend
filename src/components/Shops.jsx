import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOneShop, fetchShops } from "../redux/slices/shops";
import { fetchProducts } from "../redux/slices/products";
const Shops = ({ value, onClickShop }) => {
  const dispatch = useDispatch();
  const { shops } = useSelector((state) => state.shops);
  const isShopLoading = shops.status === "loading";
  React.useEffect(() => {
    dispatch(fetchShops());
  }, []);

  React.useEffect(() => {
    dispatch(fetchProducts(value));
  }, [value]);

  return (
    <div className="categories">
      <ul>
        {(isShopLoading ? [...Array(3)] : shops.items).map((obj, index) =>
          isShopLoading ? (
            <li key={index}>
              <div></div>
            </li>
          ) : (
            <li
              key={index}
              onClick={() => onClickShop(obj.shopName)}
              className={value === obj.shopName ? "active" : ""}
            >
              {obj.shopName}
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Shops;
