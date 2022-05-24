import {useContext, useRef, useState} from "react";
import Context from "../Context";

import DragAndDrop from "../DragAndDrop/DragAndDrop";

function ModalWindow(props) {
    const context = useContext(Context);
    const inpName = useRef();
    const inpLink = useRef();
    const inpHiddenItem = useRef();
    const inpGraphics = useRef();


    function addToDB(data) {
        const formData = new FormData();
        formData.append('addnode', JSON.stringify(data));
        fetch('http://localhost/navigation/BackEnd/Controller/index.php', {
            method: 'post',
            body: formData,
        }).then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Something went wrong');
        })
            .then((data) => {

                const item = data.item;
                console.log(item)
                // if (item.parrent > 0) {
                //     const navigation = context.nav;
                //     navigation.forEach(element => {
                //         if (item.parrent === element.id) {
                //             console.log(element)
                //             element.children = [...element.children, item]
                //             // if(element.parrent != undefined){
                //             //     element.subNav = [...element.subNav,navItem]
                //             // }else {
                //             //     element.subNav = [navItem];
                //             // }
                //         }
                //         if(item.children.length>0){
                //             console.log(item)
                //             // item.children.forEach(subItem => {
                //             //     if(subItem.id === element.id){
                //             //         subItem.children = [...subItem.children, item]
                //             //     }
                //             //
                //             // })
                //         }
                //
                //
                //     })
                //     context.setNav(navigation)
                //     console.log(navigation)
                // } else {
                //     context.setNav([...context.nav, item])
                // }
                context.setNav([...context.nav, item])
            })
            .catch((error) => {
                console.log(error)
            });
    }


    return (
        <div className='modalWindow'>
            <button className='btn close' onClick={() => {
                context.setShowModal(false);
                // context.setAddSubNav(false);
                // context.setParrent(context.nav.length );
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
                    <input type='radio' name="img" id='accept' ref={inpGraphics}/>
                </div>
                <div className='itemImg__radio'>
                    <label htmlFor='negative'> No</label>
                    <input type='radio' name="img" id='negative'/>
                </div>
                {/*{context.navigation.graphics ? <DragAndDrop/> : null}*/}
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
                    graphics: inpGraphics.current.checked ? true : false,
                    navItemHidden: inpHiddenItem.current.checked ? true : false,
                    parent: context.parent != null && typeof context.parent !== "undefined" ? context.parent : 0,
                }
                addToDB(navItem)
                // if(!context.addSubNav){
                //     context.setNav([...context.nav, navItem])
                // }else {
                //     const navigation = context.nav;
                //     navigation.forEach(element=>{
                //         if(context.addSubNav === element.navItem){
                //             if(element.subNav != undefined){
                //                 element.subNav = [...element.subNav,navItem]
                //             }else {
                //                 element.subNav = [navItem];
                //             }
                //         }
                //
                //     })
                //     context.setNav(navigation)
                // }


                context.setShowModal(false);
                context.setParent('')
                // context.setAddSubNav(false);
            }}>ok
            </button>
        </div>
    )
}

export default ModalWindow;