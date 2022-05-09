import styles from '../styles/styles.module.css'
import { useContext } from "react";
import noimg from '../assets/no-image.jpg'
import { ProductContext } from "./ProductCard";

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

