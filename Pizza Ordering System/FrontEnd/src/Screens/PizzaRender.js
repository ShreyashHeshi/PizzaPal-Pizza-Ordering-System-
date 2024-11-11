import axios from "axios";
import { useEffect, useState } from "react";
import { createUrl, getConfig } from "../utils/utils";
import "./styles/PizzaRender.css";

function PizzaRender({ pizza }) {
  const [qty, setQty] = useState(1);
  const [variant, setVariant] = useState("small");
  const [message, setMessage] = useState("");
  const jwtToken = sessionStorage.getItem("jwtToken");
  const config = getConfig(jwtToken);

  // Log the entire pizza object to see its structure
  console.log("Pizza data:", pizza);

  // Check if pizza.prices and pizza.prices[0] are defined
  const price = pizza.prices?.[0]?.[variant] || 0; // Safe access to price

  // Log the selected price and variant
  console.log("Selected variant:", variant);
  console.log("Selected price:", price);

  const postData = {
    name: pizza.name,
    quantity: qty,
    price: price,  // Use the safely accessed price
    userName: sessionStorage.getItem("userName"),
  };

  // Log the postData object to see what will be sent in the request
  console.log("Post data:", postData);

  const url = createUrl("/addToCart");
  const imgUrl = createUrl("/pizza/images/" + pizza.id);

  // Log the constructed URLs
  console.log("Image URL:", imgUrl);
  console.log("Add to Cart URL:", url);

  useEffect(() => {
    if (message !== "") {
      setTimeout(() => {
        setMessage("");
      }, 3000);
    }
  }, [message]);

  const addQty = () => {
    setQty(qty + 1);
  };

  const subQty = () => {
    if (qty > 1) setQty(qty - 1);
  };

  const addToCart = () => {
    axios
      .post(url, postData, config)
      .then((res) => {
        console.log("Add to Cart response:", res.data);
        setMessage("Added to cart");
      })
      .catch((err) => {
        console.log("Add to Cart error:", err);
        setMessage("Oops! Something went wrong");
      });
  };

  return (
    <div
      className="card enlarge-on-hover"
      style={{
        display: "inline-block",
        margin: 25,
        boxShadow: "2px 2px 4px rgba(255, 0, 0, 0.6)",
        borderRadius: "10px",
      }}
    >
      <img
        src={imgUrl}
        className="card-img-top"
        alt="..."
        style={{ height: 200, borderRadius: "10px" }}
      />
      <div className="card-body">
        <h5 className="card-title" style={{ color: "red" }}>
          <strong>{pizza.name}</strong>
        </h5>

        <hr />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "block" }}>
            <button onClick={subQty}>
              <strong>-</strong>
            </button>
            {qty}
            <button onClick={addQty}>
              <strong>+</strong>
            </button>
          </div>
          <div>
            <select onChange={(val) => setVariant(val.target.value)}>
              <option value="small">small</option>
              <option value="medium">medium</option>
              <option value="large">large</option>
            </select>
          </div>
        </div>
        <hr />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h6>Rs. {qty * price}</h6> {/* Updated price calculation */}
          <button onClick={addToCart} type="button" className="btn btn-primary">
            Add to cart
          </button>
        </div>
        <p style={{ color: "green", display: "inline-block" }}>{message}</p>
      </div>
    </div>
  );
}

export default PizzaRender;
