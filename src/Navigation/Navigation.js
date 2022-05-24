import {useContext} from "react";
import Context from "../Context";

import EditBar from "../EditBar/EditBar";


function Navigation() {
    const context = useContext(Context);






    function showNavItems(menuItems) {


        const SubNav = sumItems => (
            <ul className="subNav">
                {
                    sumItems.props.map((element, index) => (
                        <li className='sunNavItem' key={index}  data-id={element.id}>
                            <span className='subNavItemTitle' onClick={(event) => {
                                event.target.parentElement.querySelector('.editBar').classList.remove('--hidden')
                            }}>{element.name}</span>
                            <EditBar parrent={element.id}/>
                        </li>
                    ))
                }
            </ul>
        );
        return (
            menuItems.map((element, index) => (
                <li className='navItem' key={index} data-id={element.id}>
                    <span className='navItemTitle' onClick={(event) => {
                        event.target.parentElement.querySelector('.editBar').classList.remove('--hidden')
                    }}>{element.name}</span>
                    <EditBar parrent={element.id}/>

                    {element.children ? <SubNav props={element.children}/> : null}
                </li>
            ))
        )

    }


    return (
        <div className='navigation'>
            <button className='btn' onClick={() => {
                context.setShowModal(true)
            }}>AddMenuItem
            </button>
            <ul className='items'>
                {showNavItems(context.nav)}
            </ul>
        </div>
    )
}

export default Navigation;

