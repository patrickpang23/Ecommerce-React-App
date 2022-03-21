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

//         <div class="col-sm-6">
//           <div id="hide" class="card">
//             <img
//               class="card-img-top"
//               src={record.image}
//               alt="Card image cap"
//             />
//             <div class="card-body">
//               <h4 id="text-bolder" class="card-title">
//                 {" "}
//                 {record.title}
//               </h4>
//               <p class="card-text"> {record.description}</p>
//               <p class="card-text"> {record.price}</p>
//               <div class="btn btn-primary">Add to cart</div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// </div>
