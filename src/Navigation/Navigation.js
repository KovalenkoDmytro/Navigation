import {useContext} from "react";
import Context from "../Context";

function Navigation() {
    const context = useContext(Context);

    return(
        <div className='navigation'>
            <button className='btn' onClick={()=>{
                context.setShowModal(true)
            }}>AddMenuItem</button>
        </div>
    )
}
export default  Navigation;

