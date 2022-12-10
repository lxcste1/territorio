import { Http } from "./api/api";
import { useEffect, useState } from "react";
import Banner from "../components/Banner/Banner";
import styles from "../styles/Home.module.css";
import { Button } from "react-bootstrap";
import InfoCard from "../components/InfoCard/InfoCard";
import SectionCard from "../components/SectionCard/SectionCard";
import ButtonCard from "../components/ButtonCard/ButtonCard";
import HomeTitle from "../components/HomeTitle/HomeTitle";

export default function Home() {
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
      <Banner></Banner>
      <div className={styles.homeModule}>
        <div className={styles.homeTextContainer}>
          <HomeTitle title="Café & pastelería" />
        </div>
        <div>
          <InfoCard></InfoCard>
          <div className={styles.homeButtonContainer}>
            <ButtonCard buttonText="Ver Carta" />
          </div>
        </div>
      </div>
      <div className={styles.homeModule}>
        <div className={styles.homeTextContainer}>
          <HomeTitle title="Cuidado & belleza" />
        </div>
        <div className={styles.homeCardsContainer}>
          <SectionCard />
        </div>
        <div className={styles.homeButtonContainer}>
          <ButtonCard buttonText="Quiero ver todos" />
        </div>
      </div>
    </div>
  );
}
