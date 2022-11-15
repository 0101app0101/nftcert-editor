import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBold, faItalic, faUnderline, faPalette, faAlignCenter, faCopy, faTrash } from "@fortawesome/free-solid-svg-icons";
import { opentextColorPallete, openText, selectTextColorPallete } from '../redux/slices/sidebarSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const TextTopBar = ({ editor }) => {

    const [textStyles, setTextStyles] = useState({
        isBoldSet: false,
        isItalicsSet: false,
        isUnderlineSet: false,
    })

    const dispatch = useDispatch()
    let activeObject = editor?.canvas.getActiveObject()
    let isColorBarSelected = useSelector(selectTextColorPallete)

    useEffect(() => {
        setTextStyles({
            isBoldSet: activeObject.fontWeight === "bold" ? true : false,
            isItalicsSet: activeObject.fontStyle === "italic" ? true : false,
            isUnderlineSet: activeObject.underline === "true" ? true : false,
        })
    }, [activeObject])

    const setBold = () => {
        activeObject.set("fontWeight", "bold")
        editor?.canvas.renderAll()
        setTextStyles({ ...textStyles, isBoldSet: true })
    }

    const setItalics = () => {
        activeObject.set("fontStyle", "italic")
        editor?.canvas.renderAll()
        setTextStyles({ ...textStyles, isItalicsSet: true })
    }

    const setUnderline = () => {
        activeObject.set("underline", "true");
        editor?.canvas.renderAll()
        setTextStyles({ ...textStyles, isUnderlineSet: true })
    }

    const unSetBold = () => {
        activeObject.set("fontWeight", "normal")
        editor?.canvas.renderAll()
        setTextStyles({ ...textStyles, isBoldSet: false })
    }

    const unSetItalics = () => {
        activeObject.set("fontStyle", "normal")
        editor?.canvas.renderAll()
        setTextStyles({ ...textStyles, isItalicsSet: false })
    }

    const unSetUnderline = () => {
        activeObject.set("underline", "");
        editor?.canvas.renderAll()
        setTextStyles({ ...textStyles, isUnderlineSet: false })
    }

    const toggleBold = () => textStyles.isBoldSet ? unSetBold() : setBold()
    const toggleItalics = () => textStyles.isItalicsSet ? unSetItalics() : setItalics()
    const toggleUnderline = () => textStyles.isUnderlineSet ? unSetUnderline() : setUnderline()
    const toggleColorBar = () => isColorBarSelected ? dispatch(openText()) : dispatch(opentextColorPallete())

    const activeStyle = "active-style"
    return (
        <>
            <div className='text-top-bar'>
                <button className={`text-style ${textStyles.isBoldSet ? activeStyle : ""}`} onClick={() => toggleBold()}><FontAwesomeIcon icon={faBold} /></button>
                <button className={`text-style ${textStyles.isItalicsSet ? activeStyle : "" }`} onClick={() => toggleItalics()}><FontAwesomeIcon icon={faItalic} /></button>
                <button className={`text-style ${textStyles.isUnderlineSet ? activeStyle : ""}`} onClick={() => toggleUnderline()}><FontAwesomeIcon icon={faUnderline} /></button>
                <button className={`text-style ${isColorBarSelected ? activeStyle : ""}`}  onClick={() => toggleColorBar()}><FontAwesomeIcon icon={faPalette} /></button>
                <button className={`text-style`}><FontAwesomeIcon icon={faAlignCenter} /></button>
                <button className={`text-style`}><FontAwesomeIcon icon={faCopy} /></button>
                <button className={`text-style`}><FontAwesomeIcon icon={faTrash} /></button>

            </div>
        </>
    )
}

export default TextTopBar;