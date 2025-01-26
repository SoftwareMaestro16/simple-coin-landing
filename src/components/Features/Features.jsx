import styles from "./Features.module.scss";

function Features() {
    return (
        <div className={styles.main}>
            <h1>Features of Simple Coin</h1>
            <div className={styles.featuresContainer}>
            
            <div className={styles.feature}>
                <div className={styles.imgContainer}>
                <img src="/rewards.png" alt="" />
                </div>
                
                <div>
                    <h2>Rewards</h2>
                    <p>Fees are Distributed among Holders</p>
                </div>
                
            </div>
            <div className={styles.feature}>
                <div className={styles.imgContainer}>
                    <img src="/burn.png" alt="" />
                </div>
                
                <div>
                    <h2>Deflation</h2>
                    <p>20% Is Burned from each Transaction</p>
                </div>
            </div>
            <div className={styles.feature}>
                <div className={styles.imgContainer}>
                <img src="/fees.png" alt="" />
                </div>
                
                <div>
                    <h2>Fees</h2>
                    <p>30% Goes to the Reward Pool</p>
                </div>
                
            </div>
            <div className={styles.feature}>
                <div className={styles.imgContainer}>
                <img src="/income.png" alt="" />
                </div>
               
                <div>
                    <h2>Passive Income</h2>
                    <p>Holders earn TON Always</p>
                </div>
                
            </div>
        </div>
        </div>

    );
}

export default Features;