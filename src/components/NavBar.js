const NavBar = () => {
    return (
        <div class="nav">
            <input type="checkbox" id="nav-check" />
            <div class="nav-header">
                <div class="nav-title">
                    NFTCert
                </div>
            </div>
            <div class="nav-btn">
                <label for="nav-check">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>

            <div class="nav-links">
                <button>Mint</button>
                <button>Download</button>
            </div>
        </div>
    )
}
export default NavBar