import Sidebar from './components/Sidebar';
import SidebarMain from './components/SidebarMain';
import NavBar from './components/NavBar';
import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlassMinus, faMagnifyingGlassPlus } from "@fortawesome/free-solid-svg-icons";

function App() {

  const [sidebarIsOpen, setSidebarIsopen] = useState(true)
  const setSideBarState = () => setSidebarIsopen(!sidebarIsOpen)
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


  return (
    <div className="App">

      <NavBar></NavBar>
      <Sidebar setsidebarstate={setSideBarState} sidebarisopen={sidebarIsOpen} ></Sidebar>
      <SidebarMain setsidebarstate={setSideBarState} sidebarisopen={sidebarIsOpen} ></SidebarMain>

      <div className={mainContentClass}>
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