import React, { useState } from 'react'
import './SideNav.css'
import { RiAddFill } from 'react-icons/ri';

const SideNav = ({ handleAdd }) => {
    const [colorsDropDown, setColorsDropDown] = useState(false);
    
    return (
        <div className="sideNav">
            <div className="sideNavInner">
                <button className="addBtn" onClick={() => setColorsDropDown(!colorsDropDown)}>
                    <RiAddFill size={30}/>
                </button>

                <div
                    className="colors"
                    style={{
                        visibility: colorsDropDown ? "visible" : "hidden",
                        opacity: colorsDropDown ? "1" : "0",
                        transition: "0.3s ease-in-out",
                        transform: colorsDropDown
                            ? "translate(0px, 12px)"
                            : "translate(0px, 0px)",
                        gridGap: colorsDropDown ? "1.5rem" : "1.2rem"
                    }}
                >
                    <div
                        className="color"
                        id="c1"
                        onClick={() => handleAdd("#FEC971")}
                    ></div>
                    <div
                        className="color"
                        id="c2"
                        onClick={() => handleAdd("#FE9B71")}
                    ></div>
                    <div
                        className="color"
                        id="c3"
                        onClick={() => handleAdd("#B592FD")}
                    ></div>
                    <div
                        className="color"
                        id="c4"
                        onClick={() => handleAdd("#00D4FE")}
                    ></div>
                    <div
                        className="color"
                        id="c5"
                        onClick={() => handleAdd("#E3EE8E")}
                    ></div>
                </div>
            </div>
        </div>
    )
}

export default SideNav