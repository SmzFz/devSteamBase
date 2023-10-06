import CartMenu from "../cartMenu/cartMenu";
import styles from "./cartButton.module.css";
import logo from "../../assets/cart.svg";
import { useState } from "react";
import {cartState} from "../../atoms/cart"
import {useRecoilValue} from "recoil";

const CartButton = () => {
    const [open, setOpen] = useState(true);
    //const cart = useRecoilValue(cartState);
  return (
    <div className={styles.cartButton} onClick={() => setOpen(!open)}>
      <img src={logo} alt="icone de carrinho de compra" width={"46"} />
      {open && <CartMenu isOpen={open} onClose={() => setOpen(false)} />}
    </div>
  );
};

export default CartButton;
