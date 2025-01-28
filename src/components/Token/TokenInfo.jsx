import { useEffect, useState } from 'react';
import styles from './TokenInfo.module.scss';
import { fetchJettonData, formatWithCurrency } from '../../utils/TokenApi/apiJetton';
import { tokenStats } from '../../utils/TokenApi/tokenStats';

function TokenInfo() {
    const [data, setData] = useState({
        price: null,
        holders: null,
        mcap: null,
        volume: null,
    });

    useEffect(() => {
        async function fetchData() {
            const fetchedData = await fetchJettonData();
            setData(fetchedData);
        }

        fetchData();
    }, []);

    return (
        <>
         <div className={styles.main}>
            <h1>Jetton Blockchain Statistics</h1>
            <div className={styles.statsContainer}>
                {tokenStats.map((stat, index) => (
                    <div key={index} className={styles.stat}>
                        <div className={styles.imgContainer}>
                            <img src={stat.img} alt={stat.title} />
                        </div>
                        <div>
                            <h2>{stat.title}</h2>
                            <p>{formatWithCurrency(data[stat.key], stat.key)}</p> 
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.buttonContainer}>
                <a
                    href="https://www.geckoterminal.com/ru/ton/pools/EQCfCyLLCOq_bw_Ge1C1pMlSo7dqFUVSsmNKP4osxoxTxCZo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.purchaseButton}
                >
                    <img
                        src="/geckoterminal.png"
                        alt="GeckoTerminal"
                        className={styles.icon}
                    />
                    GeckoTerminal
                </a>
                <a
                    href="https://dedust.io/swap/TON/EQB9QBqniFI0jOmw3PU6v1v4LU3Sivm9yPXDDB9Qf7cXTDft"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.purchaseButton}
                >
                    <img
                        src="/dedust.png"
                        alt="DeDust"
                        className={styles.icon}
                    />
                    DeDust
                </a>
                <a
                    href="https://dexscreener.com/ton/eqcfcyllcoq_bw_ge1c1pmlso7dqfuvssmnkp4osxoxtxczo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.purchaseButton}
                >
                    <img
                        src="/dexscreener.png"
                        alt="DEX Screener"
                        className={styles.icon}
                    />
                    DEX Screener
                </a>
            </div>
        </div>

        </>

    );
}

export default TokenInfo;