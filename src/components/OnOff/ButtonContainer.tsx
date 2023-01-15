import React from "react";

import {ColorButtonType, FilterButtonType} from "./OnOff";
import './OnOFF.css'

type ButtonColor = {
    colorButton: ColorButtonType
    clickButton: (value: FilterButtonType)=> void
}

const ButtonColor = (props: ButtonColor) => {
    let green = (`${props.colorButton}` === 'green' ? 'green' : '')
    let red = (`${props.colorButton}` === 'red' ? 'red' : '')


    return (
        <div className='container'>
            <button className={`${green} + 'button'`} onClick={()=>props.clickButton("on")}>ON</button>
            <button className={`${red} + 'button'`} onClick={()=>props.clickButton("off")}>OFF</button>
            <svg className='circle'>
                <circle cx="20" cy="20" r="10" stroke="black" stroke-width="1" fill= {`${props.colorButton}`} />
            </svg>

        </div>
    )
}

export default ButtonColor





























