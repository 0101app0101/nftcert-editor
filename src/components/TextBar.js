import { addHeading, addSubHeading, addText } from "../redux/slices/textbarSlice"
import { useDispatch } from "react-redux"

const TextBar = () => {

    const dispatch = useDispatch();

    return (
        <div>
            <button className="add-text">
                Upload Font
            </button>
            <button onClick={()=> dispatch(addHeading())} className="add-text add-heading">Add Heading</button>
            <button onClick={()=> dispatch(addSubHeading())} className="add-text add-sub-heading">Add Sub Heading</button>
            <button onClick={()=> dispatch(addText())} className="add-text add-body-text">Add Text</button>
            <div className="templates-container">
                <div className="card gradient" />
                <div className="card gradient" />
                <div className="card gradient" />
                <div className="card gradient" />
                <div className="card gradient" />
                <div className="card gradient" />
                <div className="card gradient" />
                <div className="card gradient" />
                <div className="card gradient" />
                <div className="card gradient" />
                <div className="card gradient" />
                <div className="card gradient" />
            </div>
        </div>
    )
}

export default TextBar