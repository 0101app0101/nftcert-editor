import { useState } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlassMinus, faMagnifyingGlassPlus } from "@fortawesome/free-solid-svg-icons";
import { selectIsOpen } from "../redux/slices/sidebarSlice";
import TextTopBar from './TextTopBar';

const FabricMain = () => {

    const isSidebarOpen = useSelector(selectIsOpen);
    let mainContentClass = isSidebarOpen ? "mainSidebarExpanded" : "mainSidebarCollapsed"

    const initialHeight = parseInt(650)
    const initialwidth = parseInt(650)
    const initialzoomPercentage = parseFloat(100)

    const [height, setHeight] = useState(initialHeight)
    const [width, setWidth] = useState(initialwidth)
    const [zoomPercentage, setZoomPercentage] = useState(initialzoomPercentage)

    const zoomIn = () => setZoom(Math.floor(parseInt(parseInt(zoomPercentage) + parseInt(5))))

    const zoomOut = () => setZoom(Math.floor(parseInt(parseInt(zoomPercentage) - parseInt(5))))

    const setZoom = (percent) => {
        setHeight(parseInt(Math.floor(initialHeight * (parseFloat(parseFloat(percent) / parseFloat(100))))))
        setWidth(parseInt(Math.floor(initialwidth * (parseFloat(parseFloat(percent) / parseFloat(100))))))
        setZoomPercentage(parseInt(percent))
    }

    return (
        <div className={mainContentClass}>
            <TextTopBar />
            <div className='canvas-wrapper'>
                <canvas width={width} height={height} style={{ background: "white", height: height+"px", width: width+"px" }} />
            </div>
            <div className='zoom-container'>
                <button onClick={() => zoomIn()} ><FontAwesomeIcon icon={faMagnifyingGlassPlus} /></button>
                <input type="number" value={zoomPercentage} onChange={(e) => setZoom(e.target.value)} /><span>%</span>
                <button onClick={() => zoomOut()}><FontAwesomeIcon icon={faMagnifyingGlassMinus} /></button>
            </div>
        </div>
    )
}

export default FabricMain