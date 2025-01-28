import { useState } from "react";
import styles from "./Header.module.scss";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  }

  const closeMenu = () => setMenuOpen(false);

  return (
    <div>
        <header>
          <nav className={styles.navStyle}>
            <div className={styles.leftPart}>
              <h1>Simple Coin</h1>
            </div>
            <div className={styles.hamburger} onClick={toggleMenu}>
              <div className={styles.bar}></div>
              <div className={styles.bar}></div>
              <div className={styles.bar}></div>
            </div>
            <div className={`${styles.rightPart} ${menuOpen ? styles.menuOpen : ''}`}>
                <h1>
                    <a
                    href="https://t.me/SC_Portal"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Telegram
                    </a>
                </h1>
                <h1>
                    <a
                    href="/whitepaper.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Whitepaper
                    </a>
                </h1>
                <h1>
                    <a
                    href="https://dedust.io/swap/TON/EQB9QBqniFI0jOmw3PU6v1v4LU3Sivm9yPXDDB9Qf7cXTDft"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Swap
                    </a>
                </h1>
                
            </div>
          </nav>
        </header>
        {menuOpen && (
          <div className={styles.overlay} onClick={closeMenu}></div> 
        )}  
    </div>
  );
}

export default Header;