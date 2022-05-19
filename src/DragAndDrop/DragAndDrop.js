import {useState} from "react";

import './DragAndDrop.scss'






function DragAndDrop(){

    const [imagesForSend, setImagesForSend] = useState([]);

    function setPhotoToState(files) {

        const fileTypes = ['image/png', 'image/jpeg', 'image/webp'];
        let filesAll = [];
        for (const filesKey in files) {

            if (typeof (files[filesKey]) === 'object' && files[filesKey] != null) {
                if (fileTypes.includes(files[filesKey].type)) {
                    filesAll = [...filesAll, files[filesKey]]
                } else {
                    //todo створити повыдомлення в modalWindow
                    alert('invalide type of file - ')
                }
            }


        }
        //todo створити перевірку на то чи файл з таким-самим імям вже існує
        setImagesForSend([...imagesForSend, ...filesAll])
    }
    function deleteImgfromState(imgName) {
        let newIcons = imagesForSend.filter(element => {
            if (element.name !== imgName) {
                return element
            }
        });
        setImagesForSend(newIcons);
    }
    function showFileIcons(files) {
        const fileIcons = files.map((element, key) => {
            return (
                <div key={key} className='iconFile_item'>
                    <button className='btn close' onClick={() => {
                        deleteImgfromState(element.name)
                    }}>X
                    </button>
                    <img src={URL.createObjectURL(element)} alt={element.name}></img>
                </div>
            )
        })
        return fileIcons
    }

    return(
        <div className='additions__pictures'>
            <div className='dragAndDrop'
                 onDrop={(event) => {
                     event.preventDefault();
                     const newFiles = event.dataTransfer.files;
                     setPhotoToState(newFiles)
                     event.target.classList.remove('active');
                 }}
                 onDragEnter={(event) => {
                     event.preventDefault();
                     event.target.classList.add('active');
                 }}
                 onDragLeave={(event) => {
                     event.preventDefault();
                     event.target.classList.remove('active');
                 }}
                 onDragOver={(event) => {
                     event.preventDefault();
                 }}
            >
                <p className=''> Drag&Drop files here or</p>
                <input type='file' onInput={(event => {
                    const uploadFiles = event.target.files;
                    setPhotoToState(uploadFiles);
                })}/>
            </div>
            {imagesForSend.length > 0 ? <div className='iconFile_items'>{showFileIcons(imagesForSend)}</div> : null}
        </div>

    )
}

export default DragAndDrop