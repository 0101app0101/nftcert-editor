import { SketchPicker } from 'react-color'
import { useDispatch, useSelector } from 'react-redux';
import { changeColor, changeBackgroundColor, selectBackgroundColor, selectColor } from '../redux/slices/colorbarSlice';

const ColorBar = () => {

    const dispatch = useDispatch();

    let color = useSelector(selectColor);
    let backgroundColor = useSelector(selectBackgroundColor);

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
            },
        }
    }

    return (
        <div>
            <h4 className='color-heading'>Text Color</h4>
            <SketchPicker
                styles={styles}
                color={color}
                onChange={(updatedColor) => dispatch(changeColor(updatedColor))}
            />
            <hr style={{color:"#b3b3b3"}}></hr>
             <h4 className='color-heading'>Background Color</h4>
            <SketchPicker
                styles={styles}
                color={backgroundColor}
                onChange={(updatedBackgroundColor) => dispatch(changeBackgroundColor(updatedBackgroundColor))}
            />
        </div>
    )
}

export default ColorBar 