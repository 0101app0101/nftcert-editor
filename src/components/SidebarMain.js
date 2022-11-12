import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons"
import { toggleSidebar, selectIsOpen } from "../redux/slices/sidebarSlice"

const SidebarMain = (props) => {
    const dispatch = useDispatch();
    let sidebarIsOpen = useSelector(selectIsOpen);

    let sidebarToggleClass = sidebarIsOpen ? "sidebar-toggle-expanded" : "sidebar-toggle-collapsed"
    let sidenav1class = sidebarIsOpen ? "sidenav1open" : "sidenav1close"
    let arrow = sidebarIsOpen ? faAngleLeft : faAngleRight

    return (
        <div className={sidenav1class}>
            {props.children}
            <button onClick={() => { dispatch(toggleSidebar()) }} className={sidebarToggleClass}><FontAwesomeIcon icon={arrow} /></button>
        </div>
    )
}

export default SidebarMain