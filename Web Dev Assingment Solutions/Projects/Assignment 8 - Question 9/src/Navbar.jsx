import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className="">
        <input
          className={styles.input}
          type="text"
          placeholder="Enter User Name"
        />
        <button className={styles.btn}>Get Data</button>
      </div>
    </div>
  );
};

export default Navbar;
