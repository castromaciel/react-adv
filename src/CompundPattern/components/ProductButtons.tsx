import styles from "../styles/styles.module.css";
import { CSSProperties, useCallback, useContext } from "react";
import { ProductContext } from "./ProductCard";

export interface Props {
  className?: string;
  style?: CSSProperties;
}

export const ProductButtons = ({ className, style }: Props) => {
  //TODO: isMaxCount, maxCount
  const { increaseBy, counter, maxCount} = useContext(ProductContext);


  const isMaxReached = useCallback(
    () => !!maxCount && counter === maxCount,
    [counter, maxCount],
  );
  
  return (
    <section
      className={`${styles.buttonsContainer} ${className}`}
      style={style}
    >
      <button
        type="button"
        className={styles.buttonMinus}
        onClick={() => increaseBy(-1)}
      >
        -
      </button>

      <span className={styles.countLabel}> {counter} </span>

      <button
        type="button"
        className={ ` ${ styles.buttonAdd } ${ isMaxReached() && styles.disabled } ` }
        onClick={() => increaseBy(1)}
      >
        +
      </button>
    </section>
  );
};
