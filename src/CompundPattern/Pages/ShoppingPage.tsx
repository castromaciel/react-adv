
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from "../components/index"
import styles from '../styles/styles.module.css'
import '../styles/custom-styles.css'


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
      <div className={styles.box}>
        <ProductCard
          product={product}
          className='bg-dark text-white '
        >
          <ProductImage className='custom-image' />
          <ProductTitle className='text-bold' />
          <ProductButtons className='custom-buttons' />
        </ProductCard>

        <ProductCard
          product={product}
          className='bg-dark text-white'
        >
          <ProductCard.Image className='custom-image' />
          <ProductCard.Title className='text-bold' />
          <ProductCard.Buttons className='custom-buttons' />
        </ProductCard>

        <ProductCard
          product={product}
          style={{
            backgroundColor: '#70D1F8'
          }}
        >
          <ProductImage 
            className='custom-image'
            style={{
              boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'
            }} 
          />
          <ProductTitle style={{
            fontWeight: 'bold'
          }}/>
          <ProductButtons  style={{
            display: 'flex',
            justifyContent: 'end'
          }}/>
        </ProductCard>

      </div>
    </div>
  )
}

export default ShoppingPage