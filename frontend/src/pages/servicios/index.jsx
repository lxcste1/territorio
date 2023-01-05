import { Container } from "react-bootstrap";
import styles from "../../styles/Servicios.module.css";
import ProductShelf from "../../components/ProductShelf/ProductShelf";
import useFetch from "../../hooks/useFetch";
import { useState, useEffect } from "react";
import { Http } from "../api/api";

export default function Servicios() {
  const { data } = useFetch("api/categories/");

  /* 
    Por alguna razon, hay que inicialiazar el estado con la misma estructura
    con la que va a llegar la información de cada categoria.
  */
  const [info, setInfo] = useState([
    {
      attributes: {
        name: "",
      },
      id: null,
    },
  ]);

  /* 
  Creo un estado para poder guardar la información de las categorias y
  usarlas como filtros. Que serán los botones.
  
  */
  const [filters, setFilters] = useState([
    {
      attributes: {
        name: "",
      },
      id: null,
    },
  ]);

  useEffect(() => {
    /* 
      Tuve que hacer el fetch aca, porque parece que no se puede hacer
      un customHook adentro de un hook.
      Osea, lo que retornas en "useFetch", por alguna razon no funciona 
      de este lado del  componente. 
    */
    const prueba = async () => {
      const res = await Http.get("api/categories/");
      /* 
        Guardo los dos estados:
        setInfo para que cuando ingresas a Servicios puedas ver todos los servicios
        setFilters para tener todas las categorias que esten en el backoffice como filtros.
      */
      setInfo(res.data.data);
      setFilters(res.data.data);
    };
    prueba();
  }, []);

  // Función que se ejecutará cuando se haga click sobre un boton de filtros.
  const changeCategoryHandle = (category) => {
    /* Seteo el estado, para que luego en la linea de abajo pueda filtrar */
    setInfo(filters);

    /* Hago un filtrado de las categorias que hay, para que muestre en el 
    info, solamente las categorias que coincidan con el boton elegido */
    const filterValue = filters.filter(
      (item) => item.attributes.name === category
    );

    // Seteo en el estado solamente los items que coincidan con el filtro elegido
    setInfo(filterValue);
  };

  return (
    <div>
      <Container>
        <h1 className={styles.ServicesTitle}>Cuidado & belleza</h1>
        <h2>¿Qué servicio querés ver?</h2>
        {/* Genero todos los botones disponibles y los renderizo */}
        {filters.map((category) => {
          return (
            <button
              onClick={() => changeCategoryHandle(category.attributes.name)}
            >
              {category.attributes.name}
            </button>
          );
        })}

        {info.map((attributes, i) => {
          const typeFilter = attributes.attributes.name;
          const typeId = attributes.id;

          return <ProductShelf type={typeFilter} key={i} />;
        })}
      </Container>
    </div>
  );
}
