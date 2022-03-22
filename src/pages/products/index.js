import ProductCard from "../../components/ProductCard";
import Records from "../../products.json";

function Product() {
  return (
    // CARD 1
    <section class="categories">
      <div class="heading-one">
        <h2>
          <b>Browse through our unique options</b>
        </h2>
      </div>

      <div class="row">
        {Records.map((record, index) => (
          <ProductCard
          key={index}
            imgSrc={record.image}
            title={record.title}
            description={record.description}
            price={record.price}
          />
        ))}
      </div>
    </section>
  );
}
export default Product;


