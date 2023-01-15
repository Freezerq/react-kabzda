import React, {useState} from "react";

// type SelectedStarType = {
//     selectedStar: boolean
// }
export const UnControlledRaiting = () => {

    let [value, setValue] = useState(0)
    // const OnButtonHandler = ()=> {
    //
    //     console.log("currenTarget")
    // }

    // const OnButtonHandler = (e: any) => {
    //     switch (e.currentTarget.value) {
    //         case "1" :
    //             return setValue(1)
    //         case "2" :
    //             return setValue(2)
    //         case "3" :
    //             return setValue(3)
    //         case "4" :
    //             return setValue(4)
    //         case "5" :
    //             return setValue(5)
    //         default:
    //             setValue(value)
    //     }
    // }

    return (
        <div>

            <Star selected={value > 0}  setValue={()=>{ setValue(1)}} />
            <Star selected={value > 1} setValue={ ()=>{ setValue(2)}} />
            <Star selected={value > 2} setValue={ ()=>{ setValue(3)}} />
            <Star selected={value > 3} setValue={ ()=>{ setValue(4)}} />
            <Star selected={value > 4} setValue={ ()=>{ setValue(5)}} />
        </div>
    )

}

type StarPropsType = {
    selected: boolean

    setValue: ()=> void

}

const Star = (props: StarPropsType) => {

    return (
        <span onClick={()=> {props.setValue()}}>
            {props.selected ? <b>star </b> : 'star '}
        </span>

//       props.selected === true ? <span
//       onClick={()=>props.OnButtonHandler}
//       ><b>Star</b> </span> :
// <span
//           onClick={()=>props.OnButtonHandler}
//       >Star </span>
    )
    // if (props.selected === true) {
    //     return (<span><b>Star</b> </span>)
    // } else {
    //     return (<span>Star </span>)


}