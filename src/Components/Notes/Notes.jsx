import React, { useState } from 'react'
import './Notes.css'
import { AiOutlineStar, AiFillStar, AiOutlineDelete } from 'react-icons/ai';
import { BsThreeDotsVertical, BsFillPinAngleFill } from 'react-icons/bs';

const Notes = ({ noteItems, handleAddText, handleFavorite, handleDelete, handlePin }) => {
            
    const [footerDropDown, setFooterDropDown] = useState()
    console.log(footerDropDown)

    return (
        <div className="homeContainer">
            <div className="mainContainer">
                <h1 className="heading">Sticky Notes</h1>
                <div className="notesContainerInner">
                    <div className="notes">
                        {noteItems.map((notes, index) => {
                            return (
                                <div className='noteContainer'>
                                    <div
                                        className="note"
                                        key={index}
                                        style={{ background: `${notes.color}` }}
                                    >
                                        <textarea
                                            className="textBox"
                                            type="text"
                                            defaultValue={notes.note}
                                            onChange={(e) => handleAddText(e, index)}
                                            placeholder="Write Something"
                                        />
                                        <div className="noteFooter">
                                            <div className='deleteIcon'>
                                                <BsThreeDotsVertical size={25} onClick={()=>setFooterDropDown(index)} />
                                                {
                                                    notes.pinned ? <BsFillPinAngleFill size={25} /> : null
                                                }
                                            </div>
                                            {
                                                footerDropDown === index ? <div className='footerDropDown' onMouseLeave={()=>setFooterDropDown()}>
                                                <div className="delete" onClick={()=>{handleDelete(index);setFooterDropDown()}}>
                                                    <AiOutlineDelete size={25} />
                                                </div>
                                                <div className='pinIcon' onClick={()=>handlePin(notes.note, index)}>
                                                    <BsFillPinAngleFill size={25} />
                                                </div>
                                            </div> : null
                                            }
                                            <span>{notes.currDate}</span>
                                            <div className="starIcon" onClick={() => handleFavorite(index)}
                                                style={{
                                                    backgroundColor: `${notes.favorite ? 'black' : 'transparent'}`,
                                                    color: `${!notes.favorite ? 'black' : 'orange'}`
                                                }}>
                                                {
                                                    notes.favorite ? <AiFillStar size={25} /> : <AiOutlineStar size={25} />
                                                }

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notes