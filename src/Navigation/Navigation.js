import {useContext} from "react";
import Context from "../Context";

import EditBar from "../EditBar/EditBar";


function Navigation() {
    const context = useContext(Context);

    function showNavItems(menuItems) {


        const SubNav = sumItems => (
            <ul className="subNav">
                {
                    sumItems.props.map((element, indes) => (
                        <li className='sunNavItem' key={indes}>
                            <span className='subNavItemTitle' onClick={(event) => {
                                event.target.parentElement.querySelector('.editBar').classList.remove('--hidden')
                            }}>{element.navItem}</span>
                            <EditBar/>
                        </li>
                    ))
                }
            </ul>
        );
        return (
            menuItems.map((element, index) => (
                <li className='navItem' key={index} data-name={element.navItem}>
                    <span className='navItemTitle' onClick={(event) => {
                        event.target.parentElement.querySelector('.editBar').classList.remove('--hidden')
                    }}>{element.navItem}</span>
                    <EditBar/>
                    {element.subNav ? <SubNav props={element.subNav}/> : null}
                </li>
            ))
        )

    }


    return (
        <div className='navigation'>
            <button className='btn' onClick={() => {
                context.setShowModal(true)
                context.setParrent(context.nav.length + 1)
            }}>AddMenuItem
            </button>
            <ul className='items'>
                {showNavItems(context.nav)}
            </ul>
        </div>
    )
}

export default Navigation;

