import data from "./db.json"

export function Card() {

    const product = data.db.partners
    console.log(data)

    return (
        <>
            {product.map(e => (
                <div key={e.name}>
                    <img src={e.image} />
                    {e.name}
                    <p>{e.time_of_delivery} мин</p>
                    <br />
                    <p>{e.stars}</p>
                    <p>От {e.price} ₽</p>
                </div>
            ))}
        </>
    )
}