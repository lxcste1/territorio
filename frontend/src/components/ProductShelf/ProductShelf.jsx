import useFetch from "../../hooks/useFetch";
import ProductCard from "../ProductCard/ProductCard";
import styles from '../../styles/ProductShelf.module.css'

export default function ProductShelf({ type }) {

    console.log(type)

    const {data, loading, error} = useFetch(`api/products?populate=*&[filters][type][$eq]=${type}`);

    console.log(data)

    return (
        <>  
            <h2>{type}</h2>
            <div className={styles.shelf}>
            {
            loading ? "cargando productos" : data?.map((product)=> {
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
