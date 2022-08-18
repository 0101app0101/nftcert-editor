import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons"

const SidebarMain = ({ setsidebarstate, sidebarisopen }) => {
    let sidebarToggleClass = sidebarisopen ? "sidebar-toggle-expanded" : "sidebar-toggle-collapsed"
    let sidenav1class = sidebarisopen ? "sidenav1open" : "sidenav1close"
    let arrow = sidebarisopen ? faAngleLeft : faAngleRight
    return (
        <div className={sidenav1class}>
            <div className="templates-container">
            <div class="card gradient" />
            <div class="card gradient" />
            <div class="card gradient" />
            <div class="card gradient" />
            <div class="card gradient" />
            <div class="card gradient" />
            <div class="card gradient" />
            <div class="card gradient" />
            <div class="card gradient" />
            <div class="card gradient" />
            <div class="card gradient" />     
            <div class="card gradient" />     
            </div>
            <button onClick={() => { setsidebarstate() }} className={sidebarToggleClass}><FontAwesomeIcon icon={arrow} /></button>
        </div>
    )
}

export default SidebarMain