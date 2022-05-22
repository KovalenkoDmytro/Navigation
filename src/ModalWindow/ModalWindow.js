import {useContext, useRef, useState} from "react";
import Context from "../Context";

import DragAndDrop from "../DragAndDrop/DragAndDrop";

function ModalWindow(props) {
    const context = useContext(Context);
    const inpName = useRef();
    const inpLink = useRef();
    const inpHiddenItem = useRef();
    const inpGraphics = useRef();

    return (
        <div className='modalWindow'>
            <button className='btn close' onClick={() => {
                context.setShowModal(false);
                context.setAddSubNav(false);
            }}>X
            </button>
            <div className='input_group itemName'>
                <p>Category Name</p>
                <input ref={inpName} type='text'/>
            </div>
            <div className='input_group itemLink'>
                <p>Category Link</p>
                <input ref={inpLink} type='text'/>
            </div>
            <div className='itemImg'>
                <p>Add graphics ?</p>
                <div className='itemImg__radio'>
                    <label htmlFor='accept'> Yes</label>
                    <input type='radio' name="img" id='accept' ref={inpGraphics} />
                </div>
                <div className='itemImg__radio'>
                    <label htmlFor='negative'> No</label>
                    <input type='radio' name="img" id='negative'/>
                </div>
                {context.navigation.graphics ? <DragAndDrop/> : null}
            </div>
            <div className='itemHidden'>
                <p>is to hide on page?</p>
                <div className='itemHidden__radio'>
                    <label htmlFor='accept'> Yes</label>
                    <input ref={inpHiddenItem} type='radio' name="hidden" id='accept'/>
                </div>
                <div className='itemHidden__radio'>
                    <label htmlFor='negative'> No</label>
                    <input type='radio' name="hidden" id='negative'/>
                </div>
            </div>
            <button className='btn' onClick={() => {
                const navItem = {
                    navItem: inpName.current.value,
                    navItemLink: inpLink.current.value,
                    graphics: inpGraphics.current.checked? true : false,
                    navItemHidden: inpHiddenItem.current.checked? true : false,
                }
                if(!context.addSubNav){
                    context.setNav([...context.nav, navItem])
                }else {
                    const navigation = context.nav;
                    navigation.forEach(element=>{
                        if(context.addSubNav === element.navItem){
                            if(element.subNav != undefined){
                                element.subNav = [...element.subNav,navItem]
                            }else {
                                element.subNav = [navItem];
                            }
                        }

                    })
                    context.setNav(navigation)
                }


                context.setShowModal(false);
                context.setAddSubNav(false);
            }}>ok
            </button>
        </div>
    )
}

export default ModalWindow;