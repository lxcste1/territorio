import { Container } from "react-bootstrap";
import styles from '../../styles/Servicios.module.css';
import ProductShelf from "../../components/ProductShelf/ProductShelf";
import useFetch from '../../hooks/useFetch';
import { useState } from "react";

export default function Servicios () {

  const {data} = useFetch("api/categories/")

  const [type, setType] = useState([]);

  return (
  <div>
    <Container>
      <h1 className={styles.ServicesTitle}>Cuidado & belleza</h1>
      {/* {
        data?.map((attributes)=> {
          console.log(attributes.attributes.name);
          setType(attributes.attributes.name);
        })
      } */}
    <ProductShelf type="Manicuría"></ProductShelf>
    <ProductShelf type="Masajes"></ProductShelf>
  </Container>
  </div>
  );
};

