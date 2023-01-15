import React, {useState} from "react";
import ButtonColor from "./ButtonContainer";

export type FilterButtonType = 'on'| 'off' | ''
export type ColorButtonType = 'green' | 'red' | ''

export const OnOff = () => {
    let colorButton: ColorButtonType = ""
    let [filter, setfilter] = useState<FilterButtonType>('on')
    filter === 'on'? colorButton = 'green' :  colorButton = 'red'

    const clickButton = (value: FilterButtonType)=> {
        setfilter(value)

    }

    return(
        <ButtonColor colorButton={colorButton} clickButton={clickButton}/>

    )
}

