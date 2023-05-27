import React from "react";
import styles from "./Product.module.scss";
import Skeleton from "./Skeleton";
export const Product = (props) => {
  if (props.isLoading) {
    return <Skeleton />;
  }

  return (
    <div className={styles.card}>
      <img
        className={styles.productImg}
        src={`http://localhost:4444/${props.imageUrl}`}
        alt={props.productName}
      />
      <h2 className={styles.name}>{props.productName}</h2>
      <p className={styles.price}>{`$${props.price}`}</p>
      {props.description.length > 210 ? (
        <p>
          {props.description.substr(0, 190)}
          {"..."}
          <span className={styles.readmore}>read more...</span>
        </p>
      ) : (
        <p>{props.description}</p>
      )}
      <p>
        <button className={styles.button}>Add to Cart</button>
      </p>
    </div>
  );
};
