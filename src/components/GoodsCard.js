export default function GoodsCard({prodcutObject}){

    let shortDescription = prodcutObject.description.length > 300
    ?  prodcutObject.description.slice(0, 300) + '...'
    : prodcutObject.description 
       
    return (
        <div className="goods-card">
        
            <img src={prodcutObject.imgUrl} alt="" />

            <div>
                <h2>{prodcutObject.name}</h2>
                <p className = "description">{shortDescription}</p>
            </div>
           
            <div className = "price-container">
                <div className="price-wrap">
                    <p className = "price"><big>{prodcutObject.price} грн </big></p>
                </div>
            </div>
        
        </div>
    );
}