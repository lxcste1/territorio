import { Container } from "react-bootstrap";
import styles from '../../styles/Servicios.module.css';
import ProductShelf from "../../components/ProductShelf/ProductShelf";
import useFetch from '../../hooks/useFetch';
import { useState, useEffect } from "react";

export default function Servicios () {

  const {data} = useFetch("api/categories/")

  const pepe = data;

  const [info, setInfo] = useState(pepe)

  useEffect(() => {
    console.log("se dispara el efecto")

    console.log(info)
  }, [])

  return (
  <div>
    <Container>
      <h1 className={styles.ServicesTitle}>Cuidado & belleza</h1>
      <h2>¿Qué servicio querés ver?</h2>
      {
        data?.map((attributes)=> {
          const typeFilter = attributes.attributes.name;
          const typeId = attributes.id;

          return (<ProductShelf type={typeFilter} key={typeId}></ProductShelf>)
        })
      }
  </Container>
  </div>
  );
};

