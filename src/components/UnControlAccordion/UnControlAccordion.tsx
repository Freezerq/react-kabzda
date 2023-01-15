import React, {useState} from "react";


type AccordionPropsType = {
    titleValue: string,

}

export const  UnControlAccordion = (props: AccordionPropsType) => {
  let [collapsedMenu, setCollapsedMenu] = useState(false)

    const OnToggleHandler = ()=> {
        setCollapsedMenu(!collapsedMenu)

    }

        return (
            <div>
                <AccordionTitle title={props.titleValue} onClick={OnToggleHandler}/>
                {collapsedMenu && <AccordionBody />}

            </div>
        )
}


type AccordionTitePropsType = {
    title: string
    onClick: ()=> void
}
const AccordionTitle = (props: AccordionTitePropsType) => {
    return ( <>

            <h3 onClick={()=> {props.onClick()} }>{props.title}</h3>
        </>

    )
}
const AccordionBody = () => {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}
export default UnControlAccordion;
