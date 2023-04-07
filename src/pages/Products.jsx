import React from "react";

import Nav from "../components/Nav"
import Product from "../components/Product";


import products from "../info.json"



export default function Products(){

  document.body.style = 'background: white;';
  
    return (
        <>
          <Nav />
            <div className={"grid"}>
            {
              products.map((product, i) => <Product {...product} key={i}/>)
            }
          </div>
        </>
    )
}