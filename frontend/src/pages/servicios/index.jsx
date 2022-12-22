import { useEffect, useState } from "react";
import Http from "../api/api"

export default function Servicios () {


  const [data, setData] = useState([]);

  const get_products = async () => {
    try {
      const response = await Http.get("/api/products?hightlight=true");
      setData(response.data.data);
    } catch (error) {}
  };

  useEffect(() => {
    get_products();
  }, []);

  return (
  <div>
   <div>Servicios</div>
  {
    data?.map((product)=>{
      console.log(product.attributes)
      return (
        <>
          <h1>{product.attributes.title}</h1>
          <h2>{product.attributes.description}</h2>
          <h2>${product.attributes.price}</h2>
        </>
      )
    })
  }
  </div>
  );
};

