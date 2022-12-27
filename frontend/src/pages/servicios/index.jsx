import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Http } from "../api/api";
import ProductCard from "../../components/ProductCard/ProductCard";
import styles from '../../styles/Servicios.module.css';


export default function Servicios () {

  const [data, setData] = useState([]);

  const get_products = async () => {
    const id = [];
    try {
      const response = await Http.get(`/api/products/${id}?populate=*`);
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
    <Container>
      <h1 className={styles.ServicesTitle}>Cuidado & belleza</h1>
      <div className={styles.ServicesShelf}>
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
  </Container>
  </div>
  );
};

