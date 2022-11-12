import Sidebar from './components/Sidebar';
import SidebarMain from './components/SidebarMain';
import NavBar from './components/NavBar';
import { useSelector } from 'react-redux';
import TextBar from "./components/TextBar";
import BackgroundBar from "./components/BackgroundBar";
import { selectText, selectBackground } from "./redux/slices/sidebarSlice";
import FabricMain from './components/FabricMain';

function App() {

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
      <FabricMain />
    </div>
  );
}

export default App;