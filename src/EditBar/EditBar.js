import Context from "../Context";
import {useContext} from "react";

function EditBar(props){
    const context = useContext(Context);
    const parrentItem = props.parrent;
    return(
        <div className='editBar --hidden'>
            <button>edit</button>
            <button>del</button>
            <button onClick={(event) => {

                context.setParent(parrentItem)

                context.setShowModal(true);
            }}
            >add subnav
            </button>
        </div>
    )
}

export default EditBar;