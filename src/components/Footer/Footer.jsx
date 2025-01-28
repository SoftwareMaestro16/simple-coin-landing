import styles from "./Footer.module.scss";

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.linksGrid}>
                    <ul>
                        <li>
                            <a href="https://t.me/just_a_simple_coin" target="_blank" rel="noopener noreferrer">
                                Just a Simple Coin
                            </a>
                        </li>
                        <li>
                            <a href="https://t.me/simplecoin_chatSC" target="_blank" rel="noopener noreferrer">
                                Just a Simple Coin Chat
                            </a>
                        </li>
                        <li>
                            <a href="https://t.me/SC_chat_control_bot" target="_blank" rel="noopener noreferrer">
                                Simple Coin Bot
                            </a>
                        </li>
                        <li>
                            <a href="https://x.com/SimpleCoin_Move" target="_blank" rel="noopener noreferrer">
                                X (Twitter)
                            </a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="https://getgems.io/collection/EQCJy4Dfd0HNDnGoD7vPVL-THzwqOoaICgz46wqe54W_uHy8" target="_blank" rel="noopener noreferrer">
                                Simple Bear Scanlen
                            </a>
                        </li>
                        <li>
                            <a href="https://dedust.io/swap/TON/EQB9QBqniFI0jOmw3PU6v1v4LU3Sivm9yPXDDB9Qf7cXTDft" target="_blank" rel="noopener noreferrer">
                                Swap on DeDust
                            </a>
                        </li>
                        
                        <li>
                            <a href="https://www.geckoterminal.com/ru/ton/pools/EQCfCyLLCOq_bw_Ge1C1pMlSo7dqFUVSsmNKP4osxoxTxCZo" target="_blank" rel="noopener noreferrer">
                                GeckoTerminal
                            </a>
                        </li>
                        <li>
                            <a href="https://dexscreener.com/ton/eqcfcyllcoq_bw_ge1c1pmlso7dqfuvssmnkp4osxoxtxczo" target="_blank" rel="noopener noreferrer">
                                DEX Screener
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;