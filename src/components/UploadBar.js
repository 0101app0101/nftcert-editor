import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from 'react';
import axios from 'axios';

const UploadBar = () => {

    const [file, setFile] = useState(undefined)

    const uploadfile = (event) => {
        const formData = new FormData()
        formData.append('file',event.target.files[0])
        setFile(formData)        
    }
    useEffect(()=>{
        axios.post("http://localhost:8000/api/files/images",file,{headers:{"Content-Type":"multipart/form-data"}})
    },[file])
console.log(file)
    return (
        <div>
            <label className="add-text upload-button">
                <input type="file" style={{ display: "none" }} onChange={event => uploadfile(event)} />
                <FontAwesomeIcon icon={faUpload} /> Upload Files
            </label>
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

export default UploadBar