import Sidebar from './components/Sidebar';
import SidebarMain from './components/SidebarMain';
import NavBar from './components/NavBar';
import { useSelector } from 'react-redux';
import TextBar from "./components/TextBar";
import BackgroundBar from "./components/BackgroundBar";
import { selectText, selectBackground, selectTextColorPallete, selectUploads } from "./redux/slices/sidebarSlice";
import FabricMain from './components/FabricMain';
import ColorBar from './components/ColorBar'
import UploadBar from './components/UploadBar';

function App() {

  const isTextBarSelected = useSelector(selectText);
  const isBackgroundBarSelected = useSelector(selectBackground);
  const isColorBarSelected = useSelector(selectTextColorPallete);
  const isUploadBarSelected = useSelector(selectUploads);

  return (
    <div className="App">

      <NavBar></NavBar>
      <Sidebar></Sidebar>
      <SidebarMain>
        {(() => {
          if (isTextBarSelected) { return <TextBar /> }
          else if (isBackgroundBarSelected) { return <BackgroundBar /> }
          else if (isColorBarSelected) { return <ColorBar /> }
          else if (isUploadBarSelected) {return <UploadBar />}
        })()}
      </SidebarMain>
      <FabricMain />
    </div>
  );
}

export default App;