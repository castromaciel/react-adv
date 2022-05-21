import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProduct';
import { createContext, CSSProperties, ReactElement } from 'react';
import { onChangeArgs, ProdcutContextProps, Product } from '../interfaces/product.interfaces';

export const ProductContext = createContext({} as ProdcutContextProps)
const { Provider } = ProductContext


export interface Props {
  children?: ReactElement | ReactElement[];
  className?: string;
  product: Product;
  style?: CSSProperties;
  onChange?: ( args: onChangeArgs ) => void;   
  value?: number
}

export const ProductCard = ({ children, product, className, style, onChange, value }: Props) => {

  const { counter, increaseBy } = useProduct({ onChange, product, value });

  return (
    <Provider value={{
      counter,
      increaseBy,
      product
    }}>
      <article 
        className={` ${styles.productCard} ${className}`} 
        style={ style }
      >
        {children}
      </article>

    </Provider>
  )
};

