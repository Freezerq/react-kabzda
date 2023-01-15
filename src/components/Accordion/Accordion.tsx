import React from "react";


type AccordionPropsType = {
    titleValue: string
    collapsedMenu: ()=>void
     accordionCollapsed: boolean

}
const Accordion1 = (props: AccordionPropsType) => {

      return ( <div>

              {props.accordionCollapsed ?  <AccordionTite
                      collapsedMenu={props.collapsedMenu}
                      title={props.titleValue}/>
                  :
                  <div><AccordionTite
                      collapsedMenu={props.collapsedMenu}
                      title={props.titleValue}/>
                      <AccordionBody /> </div>}
      </div>

      )


    // if(props.accordionCollapsed) {
    //     return (
    //         <div>
    //             <AccordionTite
    //                 collapsedMenu={props.collapsedMenu}
    //                 title={props.titleValue}/>
    //
    //
    //     )
    // } else {
    //     return (
    //         <div>
    //             <AccordionTite
    //                 collapsedMenu={props.collapsedMenu}
    //                 title={props.titleValue}/>
    //             <AccordionBody />
    //         </div>
    //     )
    // }

    // debugger

}


// export const Accordion2 = (props: AccordionPropsType) => {
//         return (
//             <div>
//                 <AccordionTite title={props.titleValue}/>
//                 {!props.collapsedMenu && <AccordionBody />}
//
//             </div>
//         )
// }



type AccordionTitePropsType = {
    title: string
    collapsedMenu: ()=>void
}
const AccordionTite = (props: AccordionTitePropsType) => {
    return ( <>

            <h3 onClick={props.collapsedMenu}>{props.title}</h3>
        </>

    )
}

// type AccordionBodyPropsType = {
//     titleValue: string
// }
const AccordionBody = () => {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}
export default Accordion1;
