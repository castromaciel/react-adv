import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProduct';
import { createContext, CSSProperties, ReactElement } from 'react';
import { ProdcutContextProps, Product } from '../interfaces/product.interfaces';

export const ProductContext = createContext({} as ProdcutContextProps)
const { Provider } = ProductContext


export interface Props {
  children?: ReactElement | ReactElement[];
  className?: string;
  product: Product;
  style?: CSSProperties;
}

export const ProductCard = ({ children, product, className, style }: Props) => {

  const { counter, increaseBy } = useProduct();

  return (
    <Provider value={{
      counter,
      increaseBy,
      product
    }}>
      {/* eslint-disabled next-line */}
      <div 
        className={` ${styles.productCard} ${className}`} 
        style={ style }
      >
        {children}
      </div>

    </Provider>
  )
};

