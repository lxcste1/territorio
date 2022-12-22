import React from "react";
import { Button } from "react-bootstrap";
import styles from "../../styles/Home.module.css";

const ButtonCard = ({ buttonText, url }) => {
  return <Button className={styles.homeButton} href={url}>{buttonText}</Button>;
};

export default ButtonCard;
