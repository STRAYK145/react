import React, { useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import './FadeComponent.css';

const One_animation = () => {
  const [show, setShow] = useState(false);
  const nodeRef = useRef(null); // 👈 добавили

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        Показать / Скрыть
      </button>

      <CSSTransition
        in={show}
        timeout={300}
        classNames="fade"
        unmountOnExit
        nodeRef={nodeRef} // 👈 добавили
      >
        <div ref={nodeRef} className="box">
          Анимация
        </div>
      </CSSTransition>
    </div>
  );
};

export default One_animation;