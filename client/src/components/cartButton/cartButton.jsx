import CartMenu from "../cartMenu/cartMenu";
import styles from "./cartButton.module.css";
import cart from "../../assets/cart.svg";

const CartButton = () => {
  return (
    <div className={styles.cartButton}>
      <img src={cart} alt="icone de carrinho de compra" width={"46"} />
      <CartMenu />
    </div>
  );
};

export default CartButton;
