import { Http } from './api/api'
import { useEffect, useState } from 'react'
import Banner from '../components/Banner/Banner'
import styles from '../styles/Home.module.css'
import { Card, Button } from 'react-bootstrap'
import InfoCard from '../components/InfoCard/InfoCard'

export default function Home() {

  const [data, setData] = useState([])


  const get_products = async () => {
    try {
      const response = await Http.get(
        '/api/products?hightlight=true'
      )
      setData(response.data.data)
    } catch (error) {
    }
  }

  useEffect(() => {
    get_products()
  }, [])
  
  return (
    <div>
      <Banner></Banner>
      <div className={styles.homeModule}>
        <div className={styles.homeTextContainer}>
          <h1>Café & pastelería</h1>
        </div>
        <div>
        <InfoCard></InfoCard>
        <div className={styles.homeButtonContainer}>
          <Button className={styles.homeButton}>Ver carta</Button>
        </div>
        </div>
      </div>
      <div className={styles.homeModule}>
        <div className={styles.homeTextContainer}>
            <h1>Cuidado & belleza</h1>
        </div>
        <div className={styles.homeCardsContainer}>
          <Card className={styles.homeCard}>
            <Card.Img className={styles.homeCardImg, styles.homeCardImgMobile} variant="top" src="https://via.placeholder.com/500X300" />
            <Card.Img className={styles.homeCardImg, styles.homeCardImgDesktop} variant="top" src="https://via.placeholder.com/290X430" />
            <Card.Body className={styles.homeCardBody}>
              <Card.Title className={styles.homeCardsText}>Uñas</Card.Title>
            </Card.Body>
          </Card>
          <Card className={styles.homeCard}>
            <Card.Img className={styles.homeCardImg, styles.homeCardImgMobile} variant="top" src="https://via.placeholder.com/500X300" />
            <Card.Img className={styles.homeCardImg, styles.homeCardImgDesktop} variant="top" src="https://via.placeholder.com/290X430" />
            <Card.Body className={styles.homeCardBody}>
              <Card.Title className={styles.homeCardsText}>Pestañas</Card.Title>
            </Card.Body>
          </Card>
          <Card className={styles.homeCard}>
            <Card.Img className={styles.homeCardImg, styles.homeCardImgMobile} variant="top" src="https://via.placeholder.com/500X300" />
            <Card.Img className={styles.homeCardImg, styles.homeCardImgDesktop} variant="top" src="https://via.placeholder.com/290X430" />
            <Card.Body className={styles.homeCardBody}>
              <Card.Title className={styles.homeCardsText}>Masajes</Card.Title>
            </Card.Body>
          </Card>
        </div>
        <div className={styles.homeButtonContainer}>
          <Button className={styles.homeButton}>Quiero ver todos</Button>
        </div>
      </div>
    </div>
  )

  // return (
  //   <div>
  //     {
  //       data?.map((product)=>{
  //         console.log(product.attributes)
  //         return (
  //           <>
  //             <h1>{product.attributes.title}</h1>
  //             <h2>{product.attributes.description}</h2>
  //             <h2>${product.attributes.price}</h2>
  //           </>
  //         )
  //       })
  //     }
  //   </div>
  // )
}
