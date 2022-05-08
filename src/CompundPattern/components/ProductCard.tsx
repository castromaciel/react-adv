import styles from '../styles/styles.module.css'
import noimg from '../assets/no-image.jpg'
import { useProduct } from '../hooks/useProduct';
import { ReactElement, useContext, createContext } from 'react';

interface Props{
  children?: ReactElement | ReactElement[ ]
  product: Product;
}

interface Product {
  id: string;
  title: string;
  img?: string;
}

interface ProdcutContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}


const ProductContext = createContext( {  } as ProdcutContextProps)
const { Provider } = ProductContext

export const ProductImage = ({title = '', img= ''}) => {

  const { product } = useContext( ProductContext );
  let imgToShow: string;

  if( img ) imgToShow = img;
  else if ( product.img ) imgToShow = product.img;
  else imgToShow = noimg;

  return (
    <img className={ styles.productImg } src={ imgToShow } alt={ title? title : product.title } />
  )
}

export const ProductTitle = ( { title }: {title?: string}) => {

  const { product } = useContext( ProductContext );

  return (
    <span className={ styles.productDescription }>{ title? title : product.title }</span>
  )
}

export const ProductButtons = ( ) => {

  const {increaseBy, counter} = useContext(ProductContext);

  return(
    <div className={styles.buttonsContainer}>
      <button type="button" className={styles.buttonMinus} onClick={() => increaseBy(-1)}> - </button>
      <div className={styles.countLabel}> {counter} </div>
      <button type="button" className={styles.buttonAdd} onClick={() => increaseBy(1)}> + </button>
    </div>

  )
}


export const ProductCard = ({ children, product }: Props) => {

  const { counter, increaseBy } = useProduct();

  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={ styles.productCard }>

        { children }

      </div>
    </Provider>
  )
};

ProductCard.Image = ProductImage;
ProductCard.Title = ProductTitle;
ProductCard.Buttons = ProductButtons;