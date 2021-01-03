import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_2x._CB429090087_.jpg"
          alt=""
        />

        <div className="home__row">
          {/* Product */}
          <Product
            id="413546"
            title="Laptop i5"
            price={580.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51-jewl7LsL._AC_US160_.jpg"
            rating={4}
          />
          {/* Product */}
          <Product
            id="7045587"
            title="Lenovo Laptop i5"
            price={302}
            image="https://images-na.ssl-images-amazon.com/images/I/51-jewl7LsL._AC_US160_.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          {/* Product */}
          <Product
            id="6325500"
            title="Samsung i3"
            price={511}
            image="https://images-na.ssl-images-amazon.com/images/I/51-jewl7LsL._AC_US160_.jpg"
            rating={2}
          />
          {/* Product */}
          <Product
            id="6320745"
            title="Acer i3"
            price={532}
            image="https://images-na.ssl-images-amazon.com/images/I/51-jewl7LsL._AC_US160_.jpg"
            rating={1}
          />
          {/* Product */}
          <Product
            id="6325012"
            title="Toshiba i5"
            price={466}
            image="https://images-na.ssl-images-amazon.com/images/I/51-jewl7LsL._AC_US160_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          {/* Product */}
          <Product
            id="6325587"
            title="Macbook air i5"
            price={481}
            image="https://images-na.ssl-images-amazon.com/images/I/51-jewl7LsL._AC_US160_.jpg"
            rating={2}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
