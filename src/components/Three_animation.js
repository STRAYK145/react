import React from 'react';
import { Fade } from "react-awesome-reveal"; // Внимательно: здесь фигурные скобки

const Three_animation = () => {
  return (
    /* direction="up" — это аналог bottom в старой библиотеке */
    <Fade direction="up" triggerOnce>
      <div style={{
        padding: '20px',
        background: '#f0f0f0',
        borderRadius: '10px',
        textAlign: 'center'
      }}>
        Привет! Я работаю на React 19
      </div>
    </Fade>
  );
};

export default Three_animation;