/* eslint-disable react/prop-types */
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./rating";

const Product = ({ product }) => {
  return (
    <>
      <Card className="my-3 p-3 rounded">
        <Link to={`/product/${product._id}`}>
          <Card.Img variant="top" src={product.image} />
        </Link>
        <Card.Body>
          <Link to={`/product/${product._id}`}>
            <Card.Title
              as="div"
              style={{
                height: "2.5em",
                overflow: "hidden",
                color: "black",
                textDecoration: "none",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              <strong>{product.name}</strong>
            </Card.Title>
          </Link>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Card.Text as="div">
              <Rating
                value={product.rating}
                text={`${product.numReviews} Reviews`}
              />
            </Card.Text>
            <Card.Text as="h2">${product.price}</Card.Text>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default Product;
<Button variant="primary">Go somewhere</Button>;
