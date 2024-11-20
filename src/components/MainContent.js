import GoodsCard from './GoodsCard';
import products from '../data/products'

export default function MainContent(){
    return(
        <>
        <h2 id = "title">Найкраща піца</h2>
        <div id = "product-container"> 
        {products.map(product => (
                  <GoodsCard prodcutObject={product} key = {product.id}></GoodsCard>
              ))}
      </div>
      </>
    );
}