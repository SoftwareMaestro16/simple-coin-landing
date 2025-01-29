import styles from "./Partners.module.scss";
import { partners } from "../../utils/partners";

function Partners() {
    return (
        <section className={styles.partnersSection}>
            <h1 className={styles.title}>Our Partners</h1>
            <div className={styles.partnersContainer}>
                {partners.map((partner, index) => (
                    <a key={index} href={partner.link} target="_blank" rel="noopener noreferrer" className={styles.partnerLink}>
                        <img src={partner.imgSrc} alt={`Partner ${index + 1}`} className={styles.partnerImage} />
                    </a>
                ))}
            </div>
        </section>
    );
}

export default Partners;