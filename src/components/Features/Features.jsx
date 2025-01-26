import styles from "./Features.module.scss";
import { features } from "../../utils/wordsFeatures";

function Features() {
    return (
        <div className={styles.main}>
            <h1>Features of Simple Coin</h1>
            <div className={styles.featuresContainer}>
                {features.map((feature, index) => (
                    <div key={index} className={styles.feature}>
                        <div className={styles.imgContainer}>
                            <img src={feature.imgSrc} alt={feature.title} />
                        </div>
                        <div>
                            <h2>{feature.title}</h2>
                            <p>{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Features;