import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export default function ProductsList() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((response) => response.json())
            .then((data) => setProducts(data.products))
    }, []);

    return (
        <div>
            <h1>Products List</h1>

            {products.map((product) => (
                <div key={product.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
                    <h2>{product.name}</h2>
                    <p>Price: ${product.price}</p>
                    <Link to={`/products/${product.id}`}>View Details</Link>
                </div>
            ))}
        </div>
    )
}