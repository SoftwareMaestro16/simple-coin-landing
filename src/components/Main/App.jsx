import { useState, useEffect } from 'react';
import styles from './App.module.scss';
import Header from '../Header/Header';
import { useTypingEffect } from '../../utils/WriteFunc/writeWords';
import { words } from '../../utils/WriteFunc/words';
import ContractFiled from '../SmartContractFiled/ContractField';
import Features from '../Features/Features';

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
      <Features />

      <ContractFiled />
    </>
  );
}

export default App;