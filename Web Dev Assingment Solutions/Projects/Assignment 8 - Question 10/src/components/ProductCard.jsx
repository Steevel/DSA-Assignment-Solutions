import styles from "./Card.module.css";

const ProductCard = ({ product }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imgDiv}>
        <img className={styles.productImg} src={product.image} />
      </div>
      <h4 className={styles.name}>{product.title}</h4>
      <p>$ {product.price}</p>
      <div className={styles.btnContainer}>
        <button className={styles.btn}>Add to Cart</button>
        <button className={styles.btn}>Buy Now</button>
      </div>
    </div>
  );
};

export default ProductCard;
