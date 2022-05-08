import { ProductCard, ProductButtons, ProductImage, ProductTitle } from "../components/ProductCard"
import styles from '../styles/styles.module.css'


const product = {
  id: '1',
  title: 'Coffe Mug - Card',
  img: './coffee-mug.png'
}

const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div className={ styles.box }>
        <ProductCard product={ product }>
          <ProductImage />
          <ProductTitle title={'Hola mundo'}/>
          <ProductButtons />
        </ProductCard>

        <ProductCard product={ product }>
          <ProductCard.Image />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </ProductCard>


        <ProductCard product={ product }/>
      </div>
    </div>
  )
}

export default ShoppingPage