import React from "react";
import styles from "../../styles/Home.module.css";
import { Card, Button } from "react-bootstrap";

const SectionCard = () => {
  const services = [
    {
      title: "Uñas",
      imageMobile: "https://via.placeholder.com/500X300",
      imageDesktop: "https://via.placeholder.com/290X430",
    },
    {
      title: "Pestañas",
      imageMobile: "https://via.placeholder.com/500X300",
      imageDesktop: "https://via.placeholder.com/290X430",
    },
    {
      title: "Masajes",
      imageMobile: "https://via.placeholder.com/500X300",
      imageDesktop: "https://via.placeholder.com/290X430",
    },
  ];

  return (
    <>
      {services.map((item) => (
        <Card className={styles.homeCard} key={item.title}>
          <Card.Img
            className={(styles.homeCardImg, styles.homeCardImgMobile)}
            variant="top"
            src={item.imageMobile}
          />
          <Card.Img
            className={(styles.homeCardImg, styles.homeCardImgDesktop)}
            variant="top"
            src={item.imageDesktop}
          />
          <Card.Body className={styles.homeCardBody}>
            <Card.Title className={styles.homeCardsText}>
              {item.title}
            </Card.Title>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default SectionCard;
