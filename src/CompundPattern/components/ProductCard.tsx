import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProduct';
import { createContext } from 'react';
import { ProdcutContextProps, ProductCardProps } from '../interfaces/product.interfaces';

export const ProductContext = createContext( {  } as ProdcutContextProps)
const { Provider } = ProductContext

export const ProductCard = ({ children, product }: ProductCardProps) => {

  const { counter, increaseBy } = useProduct();

  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={ styles.productCard }>

        { children }

      </div>
    </Provider>
  )
};

