import React, { useState, useRef } from 'react';
import { SwitchTransition, CSSTransition } from "react-transition-group";
import Login from "./Login";
import Register from "./Register";
import "./Akun.css"

const Akun = (props) => {
  // transisi komponen
  const [state, setState] = useState(true);
  const loginRef = useRef(null);
  const registerRef = useRef(null);
  const nodeRef = state ? loginRef : registerRef;

  return (
    <div>
      <SwitchTransition>
      <CSSTransition
          key={state}
          nodeRef={nodeRef}
          addEndListener={(done) => {
            nodeRef.current.addEventListener("transitionend", done, false);
          }}
          classNames="fade"
        >
          <div ref={nodeRef}>
              {state ? <Login ubahState={setState.bind(this)} /> : <Register ubahState={setState.bind(this)} />}
          </div>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
};

export default Akun;
