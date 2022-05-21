
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from "../components/index"
import styles from '../styles/styles.module.css'
import '../styles/custom-styles.css'
import { useShoppingCart } from '../hooks/useShoppingCart';
import { products } from '../data/data'

const ShoppingPage = () => {

  const { shoppingCart, onProductCountChange } = useShoppingCart()

  return (
    <main>
      <h1>Shopping Store</h1>
      <hr />
      <section className={styles.box}>

        {
          products.map(product => (
            <ProductCard
              className='bg-dark text-white '
              key={product.id}
              product={product}
              onChange={onProductCountChange}
              value={shoppingCart[product.id]?.count || 0}
            >
              <ProductImage className='custom-image' />
              <ProductTitle className='text-bold' />
              <ProductButtons className='custom-buttons' />
            </ProductCard>
          ))
        }

        <section className="shopping-cart">

          {
            Object.entries(shoppingCart).map(([key, productInCart]) => (
              <ProductCard
                key={key}
                className='bg-dark text-white '
                product={productInCart}
                style={{ width: '100px' }}
                value={productInCart.count}
                onChange={onProductCountChange}
              >
                <ProductImage className='custom-image' />
                <ProductButtons
                  className='custom-buttons'
                  style={{
                    display: 'flex',
                    justifyContent: 'center'
                  }}
                />
              </ProductCard>
            ))
          }

        </section>

      </section>
    </main>
  )
}

export default ShoppingPage