import Image from "next/image";
import styles from "../../styles/Banner.module.css"

export default function Banner() {

    return (
        <div className={styles.bannerContainer}>
            <Image 
                className={styles.bannerImgMobile}
                src="/img/415x206.png"
                width={415}
                height={206}
                alt="Banner principal"
            >
            </Image>
            <Image 
                className={styles.bannerImgDesktop}
                src="/img/1920X600.png"
                width={1920}
                height={600}
                alt="Banner principal"
            >
            </Image>

        </div>
    )
}
