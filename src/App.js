import logo from './logo.svg';
import './App.scss';
import Navigation from "./Navigation/Navigation";
import Context from "./Context";
import {useState} from "react";
import ModalWindow from "./ModalWindow/ModalWindow";


function App() {

  const [showModal, SetShowModal] = useState(false);
  const [nav,setNav]= useState([]);
  const [addSubNav,setAddSubNav]= useState(false);
  const [parrent, setParrent] = useState();
  const [navigation, setNavigation] = useState({
      navItem: '',
      navItemLink: '',
      graphics: false,
      navItemHidden: false,
  })

  return (
      <Context.Provider value={{
          setShowModal:SetShowModal,
          addSubNav,
          setAddSubNav,
          nav,
          setNav,
          navigation,
          setNavigation,
          setParrent,
          parrent
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
