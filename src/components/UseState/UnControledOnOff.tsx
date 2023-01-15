import React, {useState} from 'react';

type PropsType = {

    onChange: (on: boolean) => void
}

const UnControledOnOff = (props: PropsType) => {

    console.log('OnOff rendering')


    let [on, setOn] = useState(false)
    console.log('On:' + on)

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: on ? 'green' : 'white',
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        padding: '2px',
        backgroundColor: on ? 'white' : 'red',
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: on ? 'green' : 'white',
    }


    const onClicked = () => {
        props.onChange(true)
        setOn(true)
    }
    const offClicked = () => {
        props.onChange(false)
        setOn(false)
    }

    return (

        <div>
            <div style={onStyle} onClick={  onClicked}>On</div>
            <div style={offStyle} onClick={offClicked}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}

export default UnControledOnOff