import React ,{useContext} from "react";
import "./ProductDisplay.css";
import star_dull_icon from "../Assests/star_dull_icon.png";
import star_icon from "../Assests/star_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
 const {AddToCart} =useContext(ShopContext);



  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        
        <div className="productdisplay-right-description">
        Deliver nutritious tiffin services with balanced,
         locally sourced meals for a health-conscious lifestyle, 
         promoting overall well-being.
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Portion</h1>
          <div className="productdisplay-right-sizes">
          <div>Full meal</div>

            <div>Half meal</div>
          </div>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ₹{product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ₹{product.new_price}
          </div>
        </div>
        <button onClick={()=>{AddToCart(product.id)}}>ADD TO TIFFEN</button>
        <p className="productdisplay-right-category">
          <span>Category :</span>{product.name}Veg,South-Indian
        </p>
        <p className="productdisplay-right-category">
          <span>Tags :</span>Spicey,Healthy
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
