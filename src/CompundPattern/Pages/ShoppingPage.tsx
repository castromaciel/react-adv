
import {ProductCard, ProductImage ,ProductTitle, ProductButtons} from "../components/index"
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
          <ProductTitle title={''}/>
          <ProductButtons />
        </ProductCard>

        <ProductCard product={ product }>
          <ProductCard.Image />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </ProductCard>

      </div>
    </div>
  )
}

export default ShoppingPage