import {useContext, useRef, useState} from "react";
import Context from "../Context";

import DragAndDrop from "../DragAndDrop/DragAndDrop";

function ModalWindow() {
    const context = useContext(Context);
    const inpName = useRef();
    const inpLink = useRef();
    const inpHiddenItem = useRef();

    return (
        <div className='modalWindow'>
            <button className='btn close' onClick={() => {
                context.setShowModal(false);
            }}>X
            </button>
            <div className='input_group itemName'>
                <p>Category Name</p>
                <input ref={inpName} type='text' onBlur={() => {
                    context.setNavigation({...context.navigation, navItem: inpName.current.value})
                }}/>
            </div>
            <div className='input_group itemLink'>
                <p>Category Link</p>
                <input ref={inpLink} type='text' onBlur={() => {
                    context.setNavigation({...context.navigation, navItemLink: inpLink.current.value})
                }}/>
            </div>
            <div className='itemImg'>
                <p>Add graphics ?</p>
                <div className='itemImg__radio'>
                    <label htmlFor='accept'> Yes</label>
                    <input type='radio' name="img" id='accept' onClick={() => {
                        context.setNavigation({...context.navigation, graphics: true})
                    }}/>
                </div>
                <div className='itemImg__radio'>
                    <label htmlFor='negative'> No</label>
                    <input type='radio' name="img" id='negative' onClick={() => {
                        context.setNavigation({...context.navigation, graphics: false})
                    }}/>
                </div>
                {context.navigation.graphics ? <DragAndDrop/> : null}
            </div>
            <div className='itemHidden'>
                <p>is to hide on page?</p>
                <div className='itemHidden__radio'>
                    <label htmlFor='accept'> Yes</label>
                    <input ref={inpHiddenItem} type='radio' name="hidden" id='accept' onClick={() => {
                        context.setNavigation({...context.navigation, navItemHidden: true})
                    }}/>
                </div>
                <div className='itemHidden__radio'>
                    <label htmlFor='negative'> No</label>
                    <input type='radio' name="hidden" id='negative' onClick={() => {
                        context.setNavigation({...context.navigation, navItemHidden: false})
                    }}/>
                </div>
            </div>
            <button className='btn' onClick={() => {

            }}>ok
            </button>
        </div>
    )
}

export default ModalWindow;