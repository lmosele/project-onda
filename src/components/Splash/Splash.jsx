import React from 'react';
import { Fade } from 'react-reveal';
import styles from './Splash.module.scss';

const Splash = ({ children }) => (
  <div className={styles.splash}>
    <Fade down tag="h1">
      Hi, I'm Lucas
    </Fade>
  </div>
);

export default Splash;
