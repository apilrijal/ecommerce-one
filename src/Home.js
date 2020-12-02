import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://cdn.pixabay.com/photo/2017/11/29/13/28/a-discount-2986181_1280.jpg"
          alt=""
        />
        <div className="home_row">
          <Product
            id="123426778"
            title="The lean startup"
            price={93.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
            rating={5}
          />
          <Product
            id="125456674"
            title="Oculus Quest 2 - Advanced All-In-One Virtual Reality Headset - 64 GB"
            price={479}
            image="https://images-na.ssl-images-amazon.com/images/I/615YaAiA-ML._AC_SL1500_.jpg"
            rating={4}
          />
          <Product
            id="126456567"
            title="Call of Duty: Black Ops Cold War - PlayStation 5"
            price={93.99}
            image="https://images-na.ssl-images-amazon.com/images/I/810M67X90-L._AC_SL1500_.jpg"
            rating={5}
          />
          <Product
            id="123456123"
            title="Oculus Quest 2 - Advanced All-In-One Virtual Reality Headset - 64 GB"
            price={479}
            image="https://images-na.ssl-images-amazon.com/images/I/615YaAiA-ML._AC_SL1500_.jpg"
            rating={4}
          />
        </div>

        <div className="home_row">
          <Product
            id="123452389"
            title="Oculus Quest 2 - Advanced All-In-One Virtual Reality Headset - 64 GB"
            price={479}
            image="https://images-na.ssl-images-amazon.com/images/I/615YaAiA-ML._AC_SL1500_.jpg"
            rating={4}
          />
          <Product
            id="23456789"
            title="Oculus Quest 2 - Advanced All-In-One Virtual Reality Headset - 64 GB"
            price={479}
            image="https://images-na.ssl-images-amazon.com/images/I/615YaAiA-ML._AC_SL1500_.jpg"
            rating={4}
          />
          <Product
            id="121256789"
            title="Oculus Quest 2 - Advanced All-In-One Virtual Reality Headset - 64 GB"
            price={479}
            image="https://images-na.ssl-images-amazon.com/images/I/615YaAiA-ML._AC_SL1500_.jpg"
            rating={4}
          />
        </div>

        <div className="home_row">
          <Product
            id="121234569"
            title="Oculus Quest 2 - Advanced All-In-One Virtual Reality Headset - 64 GB"
            price={479}
            image="https://images-na.ssl-images-amazon.com/images/I/615YaAiA-ML._AC_SL1500_.jpg"
            rating={4}
          />
          <Product
            id="123458999"
            title="The lean startup"
            price={93.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
            rating={5}
          />
          <Product
            id="123412389"
            title="Oculus Quest 2 - Advanced All-In-One Virtual Reality Headset - 64 GB"
            price={479}
            image="https://images-na.ssl-images-amazon.com/images/I/615YaAiA-ML._AC_SL1500_.jpg"
            rating={4}
          />
          <Product
            id="345456789"
            title="Call of Duty: Black Ops Cold War - PlayStation 5"
            price={93.99}
            image="https://images-na.ssl-images-amazon.com/images/I/810M67X90-L._AC_SL1500_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
