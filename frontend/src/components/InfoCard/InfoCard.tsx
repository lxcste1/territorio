import { Card } from 'react-bootstrap'
import styles from '../../styles/InfoCard.module.css'

export default function InfoCard(attribute) {

    return (
        <div className={styles.infoCardContainer}>
            <Card className={styles.infoCard}>
                <Card.Img className={styles.infoCardImgMobile} variant="top" src="https://via.placeholder.com/500x300" />
                <Card.Img className={styles.infoCardImgDesktop} variant="top" src="https://via.placeholder.com/600x400" />
                <Card.Body className={styles.infoCardBody}>
                    <Card.Text className={styles.infoCardText}>
                        {attribute.text.text}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}
