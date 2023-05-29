import React from "react";
import "../scss/pages/_full-product.scss";

import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../redux/slices/cart";
import { useParams } from "react-router-dom";
import axios from "../axios";

export const FullProduct = () => {
  const [data, setData] = React.useState();
  const [isLoading, setIsLoading] = React.useState(true);
  const { id } = useParams();
  const dispatch = useDispatch();
  const onClickAdd = () => {
    const item = {
      id: data._id,
      productName: data.productName,
      imageUrl: data.imageUrl,
      price: data.price,
      shop: data.shop,
    };
    dispatch(addProduct(item));
  };
  React.useEffect(() => {
    axios
      .get(`/products/${id}`)
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.warn(err);
        alert("Error getting post!");
      });
  }, []);

  if (isLoading) {
    return (
      <div
        style={{
          width: "800px",
          height: "800px",
          backgroundColor: "#eee",
        }}
      />
    );
  }
  return (
    <div className="fullProduct">
      <div className="product">
        <div className="product-image">
          <img
            src={`http://localhost:4444/${data.imageUrl}`}
            alt={data.productName}
          />
        </div>
        <div className="product-info">
          <h2 className="product-title">{data.productName}</h2>
          <p className="product-price">{`$${data.price}`}</p>
          <p className="product-description">{data.description}</p>
          <p>
            <button onClick={onClickAdd} className="product-button">
              Add to Cart
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};
