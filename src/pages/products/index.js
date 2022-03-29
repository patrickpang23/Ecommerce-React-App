import React, { useState, useEffect } from "react";
import ProductCard from "../../components/ProductCard";
// By importing axios it helps connect .json and db
import axios from "axios";

// This allows us to do .get to connect 4000 with 3000
function Product() {
  const [query, setQuery] = useState("");
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios.get("/api/products").then((response) => {setItems(response.data)}).catch((err) => {throw err})
  }, []);
  const lowPrice = () => {
    setQuery("Under 40");
  };
  const highPrice = () => {
    setQuery("Above 50");
  };
  const clearFilter = () => {
    setQuery("");
  };
  console.log(items);
  return (
    // CARD 1
    <section class="categories">
      <div class="heading-one">
        <h2>
          <b>Browse through our unique options</b>
        </h2>
      </div>
      <div class="filterButton">
        <input
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Items"
        />
        <button class="under" onClick={lowPrice}
        >
          Under $40
        </button>
        <button class="above" onClick={highPrice}
        >
          Above $50
        </button>
        <button class="clear" onClick={clearFilter}
        >
          Clear Filter
        </button>
      </div>
      <div class="row">
        {items
          .filter((i) => {
            console.log("query", query);
            if (query === "") {
              console.log(i);
              return i;
            }
          else if (i.Title.toLowerCase().includes(query.toLowerCase())) {
              console.log(i.Title);
              return i;
            }
            if (query === "Under 40" && i.Price < 40) {
              console.log("string3");
              return i;
            }
            if (query === "Above 50" && i.Price > 50) {
              console.log("string4");
              return i;
            }
          })
          .map((record) => (
            
            <ProductCard
              key={record.product_id}
              imgSrc={record.Image}
              title={record.Title}
              description={record.Description}
              price={record.Price}
            />
          ))}
        
      </div>
    </section>
  );
}
export default Product;
