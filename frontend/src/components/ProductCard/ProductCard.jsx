import { Card } from "react-bootstrap";
import Image from "next/image";
import styles from '../../styles/ProductCard.module.css'

const ProductCard = ( product ) => {

    const productImg = product.attributes.attributes.thumbnail.data.attributes.url;
    const productDuration = product.attributes.attributes.variation[0].variations;

    return (
        <>
        <Card style={{ width: '20rem' }} className={styles.productCardContainer}>
            <Card.Img src={productImg} alt="Logo del producto" className={styles.productImg}></Card.Img>
            <div className={styles.productCardInfoContainer}>
                <Card.Title className={styles.productCardTitle}>{product.attributes.attributes.title}</Card.Title>
                <div className={styles.productCardInfo}>
                    <p className={styles.productCardPrice}>${product.attributes.attributes.price}</p>
                    <div className={styles.productCardInfoDuration}>
                        <Image 
                        className={styles.productCardClock}
                        src="/img/time.png"
                        width={16}
                        height={16}
                        alt="Reloj"></Image>
                        <p className={styles.productCardDuration}>{productDuration}</p>
                    </div>
                </div>
                <p className={styles.productCardProfesional}>{product.attributes.attributes.profesional}</p>
                <hr className={styles.productCardHr}></hr>
                <div className={styles.productCardDetailsContainer}>
                    <Card.Text className={styles.productCardDetails}>{product.attributes.attributes.details}</Card.Text>
                </div>
            </div>
        </Card>
        </>
    )
}

export default ProductCard;
