import {ProductCard, ProductImage ,ProductTitle, ProductButtons} from "../components/index"

const product = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: './coffee-mug.png'
}


function ShoppingPage() {
  return (
    
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <div style={{display: 'flex', flexDirection:'row', flexWrap: 'wrap'}}>

        <ProductCard product={ product }>
          <ProductCard.Image />
          <ProductCard.Title title="Café muggi"/>
          <ProductCard.Buttons />
        </ProductCard >
        
        <ProductCard product={ product }>
          <ProductImage />
          <ProductTitle  />
          <ProductButtons />
        </ProductCard >
      </div>
    </div>
  )
}

export default ShoppingPage