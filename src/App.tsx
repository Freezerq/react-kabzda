import React, {useState} from 'react';
import './App.css';
import Accordion1 from "./components/Accordion/Accordion";
// import {Accordion2}  from "./components/Accordion/Accordion";
import {Rating, RaitingValueType} from "./components/Rating/Rating";
import UnControledOnOff from "./components/UseState/UnControledOnOff";
import UnControlAccordion from "./components/UnControlAccordion/UnControlAccordion";
import {UnControlledRaiting} from "./components/UnControlRating/UnControledRating";
import ControledOnOff from './components/UseState/ControledOnOff';
import Select from "./components/Select/Select";

const App = () => {
    let [rautingValue, setRaitegValue] = useState<RaitingValueType>(1)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [OnOffControlled, setOnOffControlled] = useState<boolean>(false)
// console.log(accordionCollapsed)

    const [value, setValue] = useState('1')

    const onChangeFunc = (value: string) => {
        setValue(value)
    }

    return <Select value={value} onChange={onChangeFunc} items={[{title: 'Moskow', value: '1'}, {title: 'Kiev', value: '2'}, {title: 'Minsk', value: '3'}]}/>
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}


export default App;
