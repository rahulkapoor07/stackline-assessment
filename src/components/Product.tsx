import React from "react";
import {useSelector, shallowEqual}  from "react-redux";
import {State} from "../rootReducer"
import "./Product.css";
// import {Data} from "../data.model";
// import { v4 as uuid} from 'uuid';

// interface ProductProps {
//   data : Data[];
// };

const Product = ()=> {
  // const {image, title, subtitle, tags} = useSelector((store:State) => store.apiData[0], shallowEqual);
  const {image, title, subtitle, tags} = useSelector((store : State) => {
    return {"image" : store.apiData[0].image,
    "title" : store.apiData[0].title,
    "subtitle" : store.apiData[0].subtitle,
    "tags" : store.apiData[0].tags}
  }, shallowEqual);

  return (
    <div className="Product">
      {/* <p>{JSON.stringify(image)}</p>
      <p>{JSON.stringify(title)}</p>
      <p>{JSON.stringify(subtitle)}</p>
      <p>{JSON.stringify(tags)}</p> */}
      <img className="product-image" alt="product" src={image}/>
        <h3>{title}</h3>
        <small>{subtitle}</small>
        <p>{tags.map((tag,key) => 
          <button key={key} className="btn">{tag}</button>
        )}</p>
    </div>
  )
    }
export default Product;