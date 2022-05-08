import {ProductCard, ProductButtons, ProductImage, ProductTitle } from "../components/ProductCard"

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
      <div style={ {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>
        <ProductCard product={ product }>
          <ProductImage />
          <ProductTitle title={''}/>
          <ProductButtons />
        </ProductCard>

        <ProductCard product={ product }>
          <ProductCard.Image />
          <ProductCard.Title title={''}/>
          <ProductCard.Buttons />
        </ProductCard>


        <ProductCard product={ product }/>
      </div>
    </div>
  )
}

export default ShoppingPage