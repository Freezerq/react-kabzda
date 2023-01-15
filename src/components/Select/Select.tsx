import React, {useState} from 'react';
import classes from './Select.module.css'

type ItemType = {
    title: string
    value: any
}



type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: Array<ItemType>
}

const Select = (props: SelectPropsType) => {

    const selectedItem = props.items.find(i => i.value === props.value)
    const [isActive, setIsActive] = useState(true)

    const [isHovered, setIsHovered] = useState(props.value)
    const hoveredItem = props.items.find(i => i.value === isHovered)



    const showSelectOptions = () => {
        setIsActive(!isActive)
    }


    return (
        <>
            <select>
                <option value="">Minsk</option>
                <option value="">Moscow</option>
                <option value="">Prague</option>
            </select>
            <div className={classes.select}>
                <span className={classes.main} onClick={showSelectOptions}>{selectedItem && selectedItem.title}</span>
                {isActive ?
                    <div className={classes.items}>
                    {props.items.map((i, index) =>
                        <div
                            className={classes.items + ' ' + (hoveredItem === i ? classes.hover : '')}
                            onMouseEnter={() => {setIsHovered(i.value)}}
                            key={index}
                            onClick={() => { props.onChange(i.value); showSelectOptions() }}
                        >{i.title}
                        </div>)}
                    </div> : ''
                }
            </div>
        </>
    );
};

export default Select;