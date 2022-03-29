const ProductCard = (props) => {
const {imgSrc, title, description, price, key} = props;

// By using props it enables you to configure a component (ProductCard)

  return (
    <div className="card" key={key}>
      <div className="card-image cardItemImageContainer">
        <img src={imgSrc} alt={title} />
      </div>
      <div className="card-detail">
        <p>
          <b>{title}</b>
        </p>
        <p>{description}</p>
        <p>${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
