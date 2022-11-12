import { SketchPicker } from 'react-color'
import { useDispatch, useSelector } from 'react-redux';
import { selectColor, selectImage, enableColor, enableImage } from '../redux/slices/backgroundbarTogglerSlice';
import { selectcanvasBackgroundColor, changecanvasBackgroundColor } from '../redux/slices/backgroundbarSlice';

const BackgroundBar = () => {
    const dispatch = useDispatch()

    let isColorEnabled = useSelector(selectColor)
    let isImageEnabled = useSelector(selectImage)

    let canvasBackgroundColor = useSelector(selectcanvasBackgroundColor);

    const styles = {
        'default': {
            picker: {
                padding: "10px 10px 0px 10px",
                margin: "10px",
                width: "unset",
                background: "unset",
                boxShadow: "unset"
            },
            saturation: {
                borderRadius: "10px",
                width: '100%',
                paddingBottom: '50%',
                position: 'relative',
                overflow: 'hidden',
            },
            Saturation: {
                radius: '3px',
                shadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)',
            },
            controls: {
                display: 'flex',
                margin: "20px 0 20px 0"
            },
            sliders: {
                padding: '4px 0',
                flex: '1',
            },
            color: {
                width: '50px',
                height: '50px',
                position: 'relative',
                marginTop: '0',
                marginLeft: '5px',
                borderRadius: '10px',
                background:"white"

            },
            activeColor: {
                absolute: '0px 0px 0px 0px',
                borderRadius: '10px',
                boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)',
            },
            hue: {
                border: "solid #b3b3b3 2px",
                borderRadius: "10px",
                position: 'relative',
                height: '20px',
                overflow: 'hidden',
            },
            alpha: {
                border: "solid #b3b3b3 2px",
                borderRadius: "10px",
                position: 'relative',
                height: '20px',
                marginTop: '4px',
                overflow: 'hidden',
                background:"white"
            },
        }
    }

    let activeClass = ""

    if (isColorEnabled) {
        activeClass = "color"
    }
    else if (isImageEnabled) {
        activeClass = "image"
    }

    return (
        <div>
            <div className="wrapper">
                <div className={`taeb-switch text-center ${activeClass}`}>
                    <div onClick={() => dispatch(enableColor())} className="taeb">Color</div>
                    <div onClick={() => dispatch(enableImage())} className="taeb">Image</div>
                </div>
            </div>
            {isColorEnabled && 
                <SketchPicker
                    styles={styles}
                    color={canvasBackgroundColor}
                    onChange={(updatedColor) => dispatch(changecanvasBackgroundColor(updatedColor))}
                />}
            {isImageEnabled &&
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
        </div>}
        </div>
    )
}

export default BackgroundBar