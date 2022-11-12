import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlassMinus, faMagnifyingGlassPlus } from "@fortawesome/free-solid-svg-icons";
import { selectIsOpen } from "../redux/slices/sidebarSlice";
import { selectcanvasBackgroundColor } from '../redux/slices/backgroundbarSlice';
import TextTopBar from './TextTopBar';

const FabricMain = () => {

    const { editor, onReady } = useFabricJSEditor();

    const isSidebarOpen = useSelector(selectIsOpen);
    let mainContentClass = isSidebarOpen ? "mainSidebarExpanded" : "mainSidebarCollapsed"

    const initialHeight = parseInt(650)
    const initialwidth = parseInt(650)
    const initialzoomPercentage = parseFloat(100)

    const [height, setHeight] = useState(0)
    const [width, setWidth] = useState(0)
    const [zoomPercentage, setZoomPercentage] = useState(0)

    useEffect(() => {
        setZoom(initialzoomPercentage)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        editor?.canvas.setHeight(height)
        editor?.canvas.setWidth(width)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [height, width])

    let canvasBackgroundColor = useSelector(selectcanvasBackgroundColor);

    useEffect(()=>{
        editor?.canvas.setBackgroundColor(canvasBackgroundColor.hex)
        editor?.canvas.renderAll()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[canvasBackgroundColor])

    const zoomIn = () => setZoom(Math.floor(parseInt(parseInt(zoomPercentage) + parseInt(5))))

    const zoomOut = () => setZoom(Math.floor(parseInt(parseInt(zoomPercentage) - parseInt(5))))

    const setZoom = (percent) => {
        setZoomPercentage(parseInt(percent))
        setHeight(parseInt(Math.floor(initialHeight * (parseFloat(parseFloat(percent) / parseFloat(100))))))
        setWidth(parseInt(Math.floor(initialwidth * (parseFloat(parseFloat(percent) / parseFloat(100))))))
    }


    return (
        <div className={mainContentClass}>
            <TextTopBar />
            <div className='canvas-wrapper'>
                <FabricJSCanvas className='canvas-main' onReady={onReady} />
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