import { useDispatch, useSelector } from 'react-redux';
import { openBackground, openText, openTemplates, openElements, openUploads, selectBackground, selectTemplates, selectText, selectElements, selectUploads } from '../redux/slices/sidebarSlice';
const Sidebar = () => {

    const dispatch = useDispatch();
    let isBackgroundSelected = useSelector(selectBackground)
    let isTemplatesSelected = useSelector(selectTemplates)
    let isTextSelected = useSelector(selectText)
    let isElementsSelected = useSelector(selectElements)
    let isUploadsSelected = useSelector(selectUploads)

    return (
        <div className="sidenav">
            <div className="sidebar-item" active={isTemplatesSelected ? "true" : "false"}>
                <button onClick={() => dispatch(openTemplates())}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fillRule="evenodd"
                            d="M1.5 1.5v21h21v-21zm18 3h-15v3h15zm0 6h-9v9h9zm-12 0h-3v9h3zm0 0"
                        ></path>
                    </svg>
                    <p href="#about">Templates</p>
                </button>
            </div>
            <div className="sidebar-item" active={isUploadsSelected ? "true" : "false"}>
                <button onClick={() => dispatch(openUploads())}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M8.07 13.293h7.86V7.574h2.922L12 .066 5.148 7.574H8.07zm0 0M0 15.273v8.66h24v-8.66zm16.328 5.07a.744.744 0 01-.742-.741.742.742 0 11.742.742zm3.465 0a.742.742 0 110-1.483.742.742 0 010 1.484zm0 0"
                        ></path>
                    </svg>
                    <p href="#about">Upload</p>
                </button>
            </div>
            <div className="sidebar-item" active={isElementsSelected ? "true" : "false"}>
                <button onClick={() => dispatch(openElements())}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M23.145 0H.855A.855.855 0 000 .855v22.29c0 .472.383.855.855.855h22.29a.855.855 0 00.855-.855V.855A.855.855 0 0023.145 0zm-.86 22.285H1.715V1.715h20.57zm0 0"
                        ></path>
                        <path
                            d="M9.977 3.797H5.145a.859.859 0 00-.856.86v4.827c0 .473.383.86.856.86h4.832a.859.859 0 00.855-.86V4.656a.859.859 0 00-.855-.86zm0 0M19.969 9.059l-2.785-4.832a.858.858 0 00-1.485 0L12.91 9.059a.856.856 0 00.742 1.285h5.575a.856.856 0 00.742-1.285zm0 0M7.559 13.055a3.578 3.578 0 00-3.575 3.574 3.58 3.58 0 003.575 3.574 3.578 3.578 0 003.574-3.574 3.576 3.576 0 00-3.574-3.574zm0 0M19.156 14.66h-.75v-.75a.855.855 0 00-.855-.855h-2.223a.855.855 0 00-.855.855v.75h-.75a.856.856 0 00-.856.86v2.218c0 .473.383.856.856.856h.75v.75c0 .472.382.86.855.86h2.223a.859.859 0 00.855-.86v-.75h.75c.473 0 .86-.383.86-.856V15.52a.862.862 0 00-.86-.86zm0 0"
                        ></path>
                    </svg>
                    <p href="#about">Elements</p>
                </button>
            </div>
            <div className="sidebar-item" active={isTextSelected ? "true" : "false"}>
                <button onClick={() => dispatch(openText())}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M22 0H2.059C1.344 0 .734.578.734 1.297v2.848a1.295 1.295 0 002.59 0V2.59h5.957v18.82H7.754c-.715 0-1.293.578-1.293 1.293 0 .719.578 1.297 1.293 1.297H16.3a1.296 1.296 0 100-2.59h-1.582V2.59h5.957v1.555a1.295 1.295 0 002.59 0V1.297C23.266.578 22.715 0 22 0zm0 0"
                        ></path>
                    </svg>
                    <p href="#about">Text</p>
                </button>
            </div>
            <div className="sidebar-item" active={isBackgroundSelected ? "true" : "false"}>
                <button onClick={() => dispatch(openBackground())}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M4.887 16.8h-.43a.4.4 0 000 .802h.43a.401.401 0 000-.801zm0 0M2.742 16.8h-.43a.4.4 0 000 .802h.43a.401.401 0 100-.8zm0 0M.766 16.836a.398.398 0 00-.368-.234A.398.398 0 000 17v.602h.602a.401.401 0 00.164-.766zm0 0M.398 11.512a.398.398 0 00.403-.399v-.422a.401.401 0 00-.801 0v.422c0 .223.18.399.398.399zm0 0M.398 5.207c.223 0 .403-.18.403-.402v-.418a.401.401 0 10-.8 0l-.001.418c0 .222.18.402.398.402zm0 0M.398 7.309c.223 0 .403-.18.403-.403v-.418a.401.401 0 10-.8 0l-.001.418c0 .223.18.403.398.403zm0 0M.398 3.102a.398.398 0 00.403-.399v-.422a.401.401 0 00-.801 0v.422c0 .223.18.399.398.399zm0 0M.398 13.613a.398.398 0 00.403-.398v-.422a.401.401 0 00-.801 0v.422c0 .223.18.398.398.398zm0 0M.398 9.41c.223 0 .403-.18.403-.398V8.59a.398.398 0 00-.403-.399A.398.398 0 000 8.59v.422a.4.4 0 00.398.398zm0 0M.398 15.719c.223 0 .403-.18.403-.403v-.418a.401.401 0 10-.8 0l-.001.418c0 .223.18.403.398.403zm0 0M.602 0H0v.602a.4.4 0 00.766.164A.4.4 0 00.602 0zm0 0M8.59.8h.422a.401.401 0 000-.8H8.59a.398.398 0 00-.399.398c0 .223.176.403.399.403zm0 0M12.793.8h.422c.223 0 .398-.179.398-.402A.398.398 0 0013.215 0h-.422a.4.4 0 000 .8zm0 0M10.691.8h.422c.223 0 .399-.179.399-.402A.398.398 0 0011.113 0h-.422a.4.4 0 000 .8zm0 0M14.898.8h.418a.401.401 0 100-.8h-.418a.401.401 0 100 .8zm0 0M2.281.8h.422c.223 0 .399-.179.399-.402A.398.398 0 002.703 0h-.422a.4.4 0 000 .8zm0 0M4.387.8h.418a.401.401 0 100-.8h-.418a.401.401 0 100 .8zm0 0M6.488.8h.418a.401.401 0 100-.8h-.418a.401.401 0 100 .8zm0 0M16.836.766a.401.401 0 00.766-.164V0H17a.398.398 0 00-.398.398c0 .164.093.305.234.368zm0 0M17.602 2.313a.401.401 0 00-.801 0v.43a.401.401 0 10.8 0zm0 0M17.2 4.059a.4.4 0 00-.4.398v.43a.4.4 0 00.802 0v-.43a.401.401 0 00-.403-.398zm0 0M17.54 6.398a.394.394 0 00-.34-.199.4.4 0 00-.34.2h-.06V16.8H6.399v.058a.4.4 0 00-.199.34c0 .149.082.27.2.34V24H24V6.398zm0 0"
                        ></path>
                    </svg>
                    <p href="#about">Background</p>
                </button>
            </div>
        </div>
    )
}

export default Sidebar