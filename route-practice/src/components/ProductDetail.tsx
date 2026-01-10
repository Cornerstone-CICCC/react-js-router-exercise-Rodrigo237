import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

export default function ProductDetail() {

    const { productId } = useParams<{ productId: string }>();
    const [product, setProduct] = useState<Product | null>(null);
    
    useEffect(() => {
        if(!productId) return;
        fetch(`https://dummyjson.com/products/${productId}`)
            .then((response) => response.json())
            .then((data) => setProduct(data));
    }, [productId]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>    
        </div>
    );
}