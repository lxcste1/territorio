import { useEffect, useState } from "react";
import { Http } from "../api/api";
import ProductCard from "../../components/ProductCard/ProductCard";

export default function Servicios () {


  const [data, setData] = useState([]);

  const get_products = async () => {
    try {
      const response = await Http.get("/api/products");
      setData(response.data.data);
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    get_products();
  }, []);

  return (
  <div>
  {
    data?.map((product)=> {
      return (
        <>
          <ProductCard attributes={product}></ProductCard>
        </>
      )
    })
  }
  </div>
  );
};

