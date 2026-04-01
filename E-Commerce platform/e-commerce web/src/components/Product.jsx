import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router';

import { useCart } from '../context/CartContext';

function Product({
    id, title, price, image, description, showAddToCart = false
}) {
    const shortTitle = title.substring(0, 20);
    const shortDescription = description.substring(0, 150);
    const { addToCart } = useCart();
    return (
        <Card sx={{ maxWidth: 345, m: 5 }}>
            <CardMedia sx={{ height: 180 }} title={title} image={image} />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {shortTitle}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                    ₹{price}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                    {shortDescription}
                </Typography>
            </CardContent>
            <CardActions>
                {showAddToCart ? <Button onClick={() => addToCart({ id, image, title, price, description })}>
                    Add to cart
                </Button> : <Button component={Link} to={`/products/${id}`} variant='contained' size='small'>
                    Show
                </Button>}
            </CardActions>
        </Card>
    );
};

export default Product;
