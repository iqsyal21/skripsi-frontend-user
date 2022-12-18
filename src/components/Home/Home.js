import React, { useState, useRef } from 'react';
import "./style.css"
import { SwitchTransition, CSSTransition } from "react-transition-group";
import NavbarComp from "./NavbarComp";
import Artikel from "./Artikel";
import Agenda from "./Agenda";
import Main from './Main';

const Home = () => {
  // transisi komponen
  const [state, setState] = useState(1);
  const mainRef = useRef(null);
  const artikelRef = useRef(null);
  const agendaRef = useRef(null);
  const nodeRef = state === 1 ? mainRef : (state === 2 ? artikelRef : agendaRef);

  return (
    <div>
      <NavbarComp ubahState={setState.bind(this)} />
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
              {state === 1 ? <Main /> : (state === 2 ? <Artikel /> : <Agenda />)}
          </div>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
};

export default Home;
