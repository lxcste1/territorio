import useFetch from "../../hooks/useFetch";
import ProductCard from "../ProductCard/ProductCard";
import styles from '../../styles/ProductShelf.module.css'

export default function ProductShelf({ type }) {

    const {data, loading, error} = useFetch(`api/products?populate=*&[filters][type][$eq]=${type}`);

    return (
        <>  
            <h2>{type}</h2>
            <div className={styles.shelf}>
            {
            error ? "Algo salió mal :(" : loading ? "Cargando productos" : data?.map((product)=> {
                return (
                <>
                    <ProductCard attributes={product}></ProductCard>
                </>
                )
            })
            }
            </div>
      </>
    )
}
