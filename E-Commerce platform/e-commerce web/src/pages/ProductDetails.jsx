import { useParams } from 'react-router';
import Product from '../components/Product';
import { useState, useEffect, Fragment } from 'react';
import axios from 'axios';

const ProductDetail = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        async function fetchProduct() {
            const res = await axios.get(`https://fakestoreapi.com/products/${productId}`);
            setProduct(res.data);
        }

        fetchProduct();
    }, []);

    if (!product.id) {
        return <div>Loading...</div>
    }
    return (
        <Fragment>
            {product && <Product
                id={product.id}
                title={product.title}
                price={product.price}
                image={product.image}
                description={product.description}
                showAddToCart
            />}
        </Fragment>
    );
};

export default ProductDetail;