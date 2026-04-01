import { useCart } from "../context/CartContext";
import Product from "../components/Product";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const Cart = () => {
    const { cart } = useCart();

    if (cart.length === 0) {
        return <div>Cart Empty</div>
    }
    return (
        <Box sx={{ width: "80vw", margin: '10px auto' }}>
            <h1>Cart Page</h1>
            {cart.map((product) => (
                <Grid key={product.id} spacing={2} size={{ xs: 12, sm: 12, md: 4, lg: 3 }}>
                    <Product
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        image={product.image}
                        description={product.description}
                    />
                </Grid>
            ))}
        </Box>
    );
};

export default Cart;