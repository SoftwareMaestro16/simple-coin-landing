import { useState, useEffect } from 'react';
import styles from './App.module.scss';
import Header from '../Header/Header';
import { useTypingEffect } from '../../utils/WriteFunc/writeWords';
import { words } from '../../utils/WriteFunc/wordsMain';
import ContractFiled from '../SmartContractFiled/ContractField';
import Features from '../Features/Features';
import TokenInfo from '../Token/TokenInfo';
import Nft from '../Nft/Nft';
import Partners from '../Partners/Partners';
import Footer from '../Footer/Footer';

function App() { 

  const displayedText = useTypingEffect(words);

  return (
    <>
      <Header />
      <div className={styles.mainTextContainer}>
        <h1>
          <span className={styles.gradientTextMain}>Simple Coin{" "}</span>
          <span className={styles.defaultText}>
          — a Reward and Deflationary  token leading the new era of{" "}
          </span>
          <span className={styles.gradientText}>{displayedText}</span>
          <span className={styles.cursor}> |</span>
        </h1>
      </div>
      <ContractFiled />

      <TokenInfo />
      <Features />
      <Nft />
      <Partners />

      <Footer />

    </>
  );
}

export default App;
