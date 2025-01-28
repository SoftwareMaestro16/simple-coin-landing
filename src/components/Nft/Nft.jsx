import styles from "./Nft.module.scss";

function Nft() {

    return (
        <>
        <section className={styles.nftDescription}>
            <h1>Scanlen Gang NFT Collection</h1>
            <div className={styles.sections}>
                <div className={styles.section}>
                    <h2>
                        <img src="/mechanic.png" alt="Drop Mechanic" />
                        What’s the Drop Mechanic?
                    </h2>
                    <p>
                        At the end of every month, rewards for a single NFT will be calculated using a simple formula:{" "} 
                        <div className={styles.formula}>
                            <strong>Total reward pool / Remaining months / 1 NFT</strong>
                        </div>
                        {" "}This calculation spans over a full year, ensuring a steady and predictable reward distribution.
                    </p>
                </div>

                <div className={styles.section}>
                    <h2>
                        <img src="/reward-pool.png" alt="Reward Pool" />
                        Initial Reward Pool
                    </h2>
                    <p>
                        The collection starts with a robust reward pool of{" "}
                            <div className={styles.formula}>
                                <strong>1,000,000 $SC</strong> 
                            </div>
                            {" "}for the first year.
                    </p>
                    <p>
                        <strong>How is the pool replenished?</strong>
                        <ul>
                            <li>
                                70% of all NFT sales revenue is allocated to buy back $SC tokens and refill the reward pool.
                            </li>
                            <li>
                                Royalties from secondary market sales and additional rewards sent to the collection wallet will also contribute to token buybacks and pool top-ups, ensuring sustained rewards for NFT holders.
                            </li>
                        </ul>
                    </p>
                </div>

                <div className={styles.section}>
                    <h2>
                        <img src="/valuable.png" alt="Valuable" />
                        Why is it Valuable?
                    </h2>
                    <ul>
                        <li>
                            <strong>Deflationary Model:</strong> With $SC being deflationary, its value is designed to increase over time. Even if no new sales occur in a given month, the value of your assets will still appreciate.
                        </li>
                        <li>
                            <strong>Exclusive Community:</strong> Owning a Scanlen Gang NFT grants you access to an exclusive club,{" "}
                            <div className={styles.formula}>
                                <strong>«$SC Scanlen Gang»</strong>
                            </div>
                            {" "}, with a unique vibe and the opportunity to engage in meaningful discussions on various topics.
                        </li>
                        <li>
                            <strong>DAO Participation:</strong> NFT holders play an active role in shaping and developing the collection through a decentralized autonomous organization (DAO) structure, ensuring every holder has a voice in its future.
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.buttonContainer}>
                <a
                    href="https://getgems.io/collection/EQCJy4Dfd0HNDnGoD7vPVL-THzwqOoaICgz46wqe54W_uHy8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.purchaseButton}
                >
                    Buy NFT Now
                </a>
            </div>
        </section>
        
        </>
);
}


export default Nft;