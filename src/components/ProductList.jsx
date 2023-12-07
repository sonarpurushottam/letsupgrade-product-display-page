import React from "react";
import "./ProductList.css";

const ProductList = () => {
  const prodlist = [
    {
      id: 1,
      name: "Levis Jeans",
      price: 2000,
      url: "https://freepngimg.com/thumb/jeans/42604-3-denim-jean-download-png-file-hd.png",
    },
    {
      id: 2,
      name: "samsung m51",
      price: 34000,
      url: "https://images.samsung.com/is/image/samsung/in-galaxy-m51-m515fz-6gb-sm-m515fzbdins-sm-m---fzbeins-304622862?$330_330_JPG$",
    },
    {
      id: 3,
      name: "dell monitor",
      price: 35000,
      url: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/peripherals/monitors/p-series/p2424ht/media-gallery/monitor-p2424ht-black-gallery-2.psd?fmt=png-alpha&pscan=auto&scl=1&hei=476&wid=595&qlt=100,1&resMode=sharp2&size=595,476&chrss=full",
    },
  ];

  return (
    <>
      <div className="container">
        {prodlist.map((pl) => {
          return (
            <>
              <div className="card" key={pl.id}>
                <img src={pl.url} alt={pl.name} />
                <h1>{pl.name}</h1>
                <h2>{pl.price}</h2>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default ProductList;
