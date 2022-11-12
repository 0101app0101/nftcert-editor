import Sidebar from './components/Sidebar';
import SidebarMain from './components/SidebarMain';
import NavBar from './components/NavBar';
import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlassMinus, faMagnifyingGlassPlus } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from 'react-redux';
import TextBar from "./components/TextBar";
import BackgroundBar from "./components/BackgroundBar";
import { toggleSidebar, selectText, selectIsOpen, selectBackground } from "./redux/slices/sidebarSlice";
import SidebarMainLoading from "./components/SidebarMainLoading";
import TextTopBar from './components/TextTopBar';
import ColorBar from './components/ColorBar';


function App() {

  const sidebarIsOpen = useSelector(selectIsOpen);
  let mainContentClass = sidebarIsOpen ? "mainSidebarExpanded" : "mainSidebarCollapsed"

  const canvas = useRef();
  const [HEIGHT, setHEIGHT] = useState(500)
  const [WIDTH, setWIDTH] = useState(500)
  const [zoomPercentage, setZoomPercentage] = useState(100)

  useEffect(() => {
    canvas.current.style.width = HEIGHT + "px"
    canvas.current.style.height = WIDTH + "px"
  }, [zoomPercentage])

  const ZoomIn = () => {
    setZoomPercentage(Math.floor(((HEIGHT + WIDTH) - (canvas.current.width + canvas.current.height)) / 100) + 100)
    setHEIGHT(HEIGHT * 2);
    setWIDTH(WIDTH * 2);
  }

  const ZoomOUT = () => {
    setZoomPercentage(Math.floor(((HEIGHT + WIDTH) - (canvas.current.width + canvas.current.height)) / 100) + 100)
    setHEIGHT(HEIGHT / 2);
    setWIDTH(WIDTH / 2);
  }

  const setZoomPercentageState = (percent) => {
    setZoomPercentage(percent)
    setHEIGHT(canvas.current.height * (percent / 100))
    setWIDTH(canvas.current.width * (percent / 100))
  }

  const isTextBarSelected = useSelector(selectText);
  const isBackgroundSelected = useSelector(selectBackground);

  return (
    <div className="App">

      <NavBar></NavBar>
      <Sidebar></Sidebar>
      <SidebarMain>
        {(() => {
          if (isTextBarSelected) { return <TextBar /> }
          else if (isBackgroundSelected) { return <BackgroundBar /> }
        })()}
      </SidebarMain>

      <div className={mainContentClass}>
        <TextTopBar />
        <div className='canvas-wrapper'>
          <canvas ref={canvas} width="500" height="500" style={{ background: "white" }} />
        </div>
        <div className='zoom-container'>
          <button onClick={() => ZoomIn()} ><FontAwesomeIcon icon={faMagnifyingGlassPlus} /></button>
          <input type="number" value={zoomPercentage} onChange={(e) => setZoomPercentageState(e.target.value)} /><span>%</span>
          <button onClick={() => ZoomOUT()}><FontAwesomeIcon icon={faMagnifyingGlassMinus} /></button>
        </div>
      </div>
    </div>
  );
}

export default App;