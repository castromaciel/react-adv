
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from "../components/index"
import '../styles/custom-styles.css'
import { products } from '../data/data'

const product = products[0];

const ShoppingPage = () => {


  return (
    <main>
      <h1>Shopping Store</h1>
      <hr />

      <ProductCard
        className='bg-dark text-white '
        key={product.id}
        product={product}
        initialValues={{
          count: 2,
          maxCount: 10
        }}
      >
        {
          ( {reset, increaseBy, maxCount, isMaxCountReached} ) => (
            <>
              <ProductImage className='custom-image' />
              <ProductTitle className='text-bold' />
              <ProductButtons className='custom-buttons' />

              <button onClick={ reset }>Reset</button>
              <button onClick={ () => increaseBy(-2) }>-2</button>
              {
                !isMaxCountReached && <button onClick={ () => increaseBy(+2)}>+2</button>
              }
              <span>{maxCount}</span>
            </>
          )
        }
      </ProductCard>

    </main>
  )
}

export default ShoppingPage