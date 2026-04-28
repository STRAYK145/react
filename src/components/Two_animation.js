import React from 'react';
import { fadeInLeft } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  fade: {
    animationName: fadeInLeft,
    animationDuration: '1s',
  },
});

const Two_animation = () => {
  return (
    <div className={css(styles.fade)}>
      Привет! Я анимация React-animations
    </div>
  );
};

export default Two_animation;