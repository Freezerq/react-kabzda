import React, {ChangeEvent, useRef, useState} from 'react';
import {action} from '@storybook/addon-actions';


export default {
    title: 'input',
    // component: input,
}

export const UncontroldInput = ()=> <input/>


export const TrackUncontroldInput = ()=> {
    const [val, setVal] = useState('')
    const onChange = (e: ChangeEvent<HTMLInputElement>)=> {
        const actionValue = e.currentTarget.value
        setVal(actionValue)
    }
  return <>
      <input onChange={onChange}/> - {val}
  </>
}

export const GetUncontroldInput = ()=> {
    const [val, setVal] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    const save = ()=> {
        const el =  inputRef.current as HTMLInputElement;
        setVal(el.value)
    }

  return<>
      <input ref={inputRef} />-- <button onClick={save}>save</button>- actual value: {val}
  </>
}

 export const ControldInput = ()=> {
    const [val, setValue] =useState('')
     const onChange = (e: ChangeEvent<HTMLInputElement>)=> {
         setValue(e.currentTarget.value)
     }
    return <input
        value={val}
        onChange={onChange }
         />}
 export const ControldCheckbox = ()=> {
    const [chacked, setChecked] =useState(false)
     const onChange = ()=> {
         setChecked(!chacked)
     }
     return <input type={'checkbox'} onChange={onChange}/>

 }
 export const ControldSelect = ()=> {
     const [select, setSelect] =useState<string | undefined>(undefined)
     const onChange = (e: ChangeEvent<HTMLSelectElement>)=> {
         setSelect(e.currentTarget.value)
     }
     return (
         <select value={select} onChange={onChange}>
             <option>none</option>
             <option value="1">Minsk</option>
             <option value="2">Moscow</option>
             <option value="3">Kiev</option>
         </select>
     )

 }




export const ControldInputWithFixedValu = ()=> <input value={'Hello'}/>