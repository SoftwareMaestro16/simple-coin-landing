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
        </div>
    );
}

export default TokenInfo;