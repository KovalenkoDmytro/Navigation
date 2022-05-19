import logo from './logo.svg';
import './App.scss';
import Navigation from "./Navigation/Navigation";
import Context from "./Context";
import {useState} from "react";
import ModalWindow from "./ModalWindow/ModalWindow";


function App() {

  const [showModal, SetShowModal] = useState(false);
  const [navigation, setNavigation] = useState({
      navItem: '',
      navItemLink: '',
      graphics: false,
      navItemHidden: false,

  })

  return (
      <Context.Provider value={{
          setShowModal:SetShowModal,
          navigation: navigation,
          setNavigation:setNavigation,
      }}>
          <div className="App container">
              <header className="App-header">
              </header>
              <Navigation/>
              {showModal? <ModalWindow/> : null}
          </div>
      </Context.Provider>
  );
}

export default App;
