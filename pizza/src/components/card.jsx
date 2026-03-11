import data from "./db.json"

export function Card() {

    const product = data.db.partners
    console.log(data)

    return (
        <>
        <div class="cards cards-restaurants">
            {product.map(e => (
                <a href="restaurant.html" class="card card-restaurant">
						<img src={e.image} alt="image" class="card-image" />
						<div class="card-text">
							<div class="card-heading">
								<h3 class="card-title">{e.name}</h3>
								<span class="card-tag tag">{e.time_of_delivery}</span>
							</div>
							
							<div class="card-info">
								<div class="rating">
									{e.stars}
								</div>
								<div class="price">От {e.price} ₽</div>
								<div class="category">{e.kitchen}</div>
							</div>
						</div>
					</a>
                 
            ))}
            </div>
        </>
    )
}