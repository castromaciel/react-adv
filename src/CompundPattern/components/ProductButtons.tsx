import styles from '../styles/styles.module.css'
import { CSSProperties, useContext } from "react";
import { ProductContext } from "./ProductCard";

export interface Props{
  className?: string;
  style?: CSSProperties;
}

export const ProductButtons = ({ className, style }:Props ) => {

  const {increaseBy, counter} = useContext(ProductContext);

  return(
    <section 
      className={`${styles.buttonsContainer} ${className}`}
      style={ style }
    >
      <button type="button" className={styles.buttonMinus} onClick={() => increaseBy(-1)}> - </button>
      <span className={styles.countLabel}> {counter} </span>
      <button type="button" className={styles.buttonAdd} onClick={() => increaseBy(1)}> + </button>
    </section>

  )
}