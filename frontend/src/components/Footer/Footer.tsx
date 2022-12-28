import styles from '../../styles/Footer.module.css';
import { Container, Row, Col, Nav } from 'react-bootstrap/';
import Image from "next/image";

export default function Footer() {
    return (
        <div className={styles.footerContainer}>
            <Container>
                <Row>
                    <Col xs={6}>
                        <Image 
                        src="/img/wp-icon.png"
                        width={32}
                        height={32}
                        alt="Icono de Whatsapp"
                        priority={true}
                        className={styles.footerIconFirst}>
                        </Image>
                        <Image 
                        src="/img/ig-icon.png"
                        width={32}
                        height={32}
                        alt="Icono de Instagram"
                        className={styles.footerIcon}>
                        </Image>
                        <Image 
                        src="/img/gmail-icon.png"
                        width={32}
                        height={32}
                        alt="Icono de Gmail"
                        className={styles.footerIcon}>
                        </Image>
                    </Col>
                    <Col xs={6}>
                        <Nav.Link href="#action2" className={styles.footerItem}>Sobre nosotros</Nav.Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
