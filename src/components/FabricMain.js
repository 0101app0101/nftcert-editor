/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react";
import { fabric } from 'fabric';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlassMinus, faMagnifyingGlassPlus } from "@fortawesome/free-solid-svg-icons";
import { selectIsOpen } from "../redux/slices/sidebarSlice";
import { selectcanvasBackgroundColor } from '../redux/slices/backgroundbarSlice';
import { selectAddHeading, selectAddSubHeading, selectAddText } from '../redux/slices/textbarSlice';
import { selectColor, selectBackgroundColor  } from '../redux/slices/colorbarSlice';
import { openText } from '../redux/slices/sidebarSlice';
import TextTopBar from './TextTopBar';

const FabricMain = () => {

    const { editor, onReady } = useFabricJSEditor();
    const dispatch = useDispatch();

    let isSidebarOpen = useSelector(selectIsOpen);
    let canvasBackgroundColor = useSelector(selectcanvasBackgroundColor);
    let textcolor = useSelector(selectColor)
    let textbgColor = useSelector(selectBackgroundColor)

    let activeObject = editor?.canvas.getActiveObject();
    let isTextSelected = (activeObject !== undefined && activeObject !== null && activeObject.text !== undefined)

    let mainContentClass = isSidebarOpen ? "mainSidebarExpanded" : "mainSidebarCollapsed"

    const initialHeight = parseInt(650)
    const initialwidth = parseInt(650)
    const initialzoomPercentage = parseFloat(100)

    const [height, setHeight] = useState(0)
    const [width, setWidth] = useState(0)
    const [zoomPercentage, setZoomPercentage] = useState(0)

    const zoomIn = () => setZoom(Math.floor(parseInt(parseInt(zoomPercentage) + parseInt(5))))
    const zoomOut = () => setZoom(Math.floor(parseInt(parseInt(zoomPercentage) - parseInt(5))))
    const setZoom = (percent) => {
        percent = percent < 25 ? 25 : percent
        percent = percent > 500 ? 500 : percent

        setZoomPercentage(parseInt(percent))
        setHeight(parseInt(Math.floor(initialHeight * (parseFloat(parseFloat(percent) / parseFloat(100))))))
        setWidth(parseInt(Math.floor(initialwidth * (parseFloat(parseFloat(percent) / parseFloat(100))))))
    }

    useEffect(() => {
        setZoom(initialzoomPercentage)
    }, [])

    useEffect(() => {
        editor?.canvas.setHeight(height)
        editor?.canvas.setWidth(width)
        editor?.canvas.setZoom(parseFloat(zoomPercentage / 100))
    }, [height, width, zoomPercentage])

    useEffect(() => {
        editor?.canvas.setBackgroundColor(`rgba(${canvasBackgroundColor.rgb.r},${canvasBackgroundColor.rgb.g},${canvasBackgroundColor.rgb.b},${canvasBackgroundColor.rgb.a})`)
        editor?.canvas.renderAll()
    }, [canvasBackgroundColor])

    useEffect(() => {
        var text = new fabric.Textbox('Heading', { fontFamily: "Poppins-Regular, sans-serif", fontSize: 50, width: 210 });
        editor?.canvas.add(text)
        editor?.canvas.renderAll()
    }, [useSelector(selectAddHeading)])

    useEffect(() => {
        var text = new fabric.Textbox('Sub Heading', { fontFamily: "Poppins-Regular, sans-serif", fontSize: 30, width: 190,fontWeight:"bold" });
        editor?.canvas.add(text)
        editor?.canvas.renderAll()
    }, [useSelector(selectAddSubHeading)])

    useEffect(() => {
        var text = new fabric.Textbox('Text', { fontFamily: "Poppins-Regular, sans-serif", fontSize: 18 });
        editor?.canvas.add(text)
        editor?.canvas.renderAll()
    }, [useSelector(selectAddText)])

    useEffect(() => {
        !isTextSelected && dispatch(openText())
    }, [activeObject])

    useEffect(() => {
        isTextSelected && activeObject.set("backgroundColor", `rgba(${textbgColor.rgb.r},${textbgColor.rgb.g},${textbgColor.rgb.b},${textbgColor.rgb.a})`)
        editor?.canvas.renderAll()
    },[textbgColor])
    
    useEffect(() => {
        isTextSelected && activeObject.set("fill", `rgba(${textcolor.rgb.r},${textcolor.rgb.g},${textcolor.rgb.b},${textcolor.rgb.a})`)
        editor?.canvas.renderAll()
    },[textcolor])

    return (
        <div className={mainContentClass}>
            {isTextSelected && <TextTopBar editor={editor} />}
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