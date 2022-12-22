import Banner from "../components/Banner/Banner";
import styles from "../styles/Home.module.css";
import InfoCard from "../components/InfoCard/InfoCard";
import SectionCard from "../components/SectionCard/SectionCard";
import ButtonCard from "../components/ButtonCard/ButtonCard";
import HomeTitle from "../components/HomeTitle/HomeTitle";

export default function Home() {

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
            <ButtonCard url={`https://alacartaonline.com.ar/restaurant/6001b2e3feb46a6a4347c483`} buttonText="Ver Carta" />
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
