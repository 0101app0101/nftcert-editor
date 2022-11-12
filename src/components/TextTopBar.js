import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBold, faItalic, faUnderline, faPalette, faAlignCenter,faCopy, faTrash } from "@fortawesome/free-solid-svg-icons";

const TextTopBar = () => {
    return(
        <>
        <div className='text-top-bar'>
        <FontAwesomeIcon icon={faBold} />
        <FontAwesomeIcon icon={faItalic} />
        <FontAwesomeIcon icon={faUnderline} />
        <FontAwesomeIcon icon={faPalette} />
        <FontAwesomeIcon icon={faAlignCenter} />
        <FontAwesomeIcon icon={faCopy} />
        <FontAwesomeIcon icon={faTrash} />

        </div>
        </>
    )

}

export default TextTopBar;