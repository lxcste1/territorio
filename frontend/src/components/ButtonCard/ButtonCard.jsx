import React from "react";
import { Button } from "react-bootstrap";
import styles from "../../styles/Home.module.css";

const ButtonCard = ({ buttonText }) => {
  return <Button className={styles.homeButton}>{buttonText}</Button>;
};

export default ButtonCard;
