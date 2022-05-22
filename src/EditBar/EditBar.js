import Context from "../Context";
import {useContext} from "react";

function EditBar(){
    const context = useContext(Context);
    return(
        <div className='editBar --hidden'>
            <button>edit</button>
            <button>del</button>
            <button onClick={(event) => {
                const parrentItem = event.target.closest('.navItem').getAttribute('data-name');
                context.setAddSubNav(parrentItem);
                context.setShowModal(true);
            }}
            >add subnav
            </button>
        </div>
    )
}

export default EditBar;