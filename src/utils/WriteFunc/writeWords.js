import { useState, useEffect } from 'react';

export function useTypingEffect(words, typingSpeed = 130, pauseDuration = 2250) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];
    let typingTimeout;

    if (!isDeleting && displayedText !== word) {
      typingTimeout = setTimeout(() => {
        setDisplayedText(word.slice(0, displayedText.length + 1));
      }, typingSpeed);
    } else if (isDeleting && displayedText !== '') {
      typingTimeout = setTimeout(() => {
        setDisplayedText(word.slice(0, displayedText.length - 1));
      }, typingSpeed);
    } else if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    } else if (!isDeleting && displayedText === word) {
      typingTimeout = setTimeout(() => setIsDeleting(true), pauseDuration);
    }

    return () => clearTimeout(typingTimeout);
  }, [displayedText, isDeleting, words, currentWordIndex, typingSpeed, pauseDuration]);

  return displayedText;
}