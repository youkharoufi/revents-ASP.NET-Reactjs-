import React from 'react';
import { useSelector, useDispatch} from 'react-redux'
import { DECREMENT_COUNTER, INCREMENT_COUNTER } from './testReducer';
import {Button} from 'semantic-ui-react';
import { decrement, increment } from './testReducer';
import { openModal } from '../../app/common/modals/modalReducer';

export default function Sandbox(){
    const dispatch = useDispatch();
    const data = useSelector(state => state.test.data)

    return(

        <>
            <h1>Testing 123</h1>
            <h3>The data is : {data} </h3>
            <Button onClick={()=>dispatch(increment(20))} content='Increment' color='green'/>

            <Button onClick={()=>dispatch(decrement(5))} content='Decrement' color='red'/>

            <Button onClick={()=>dispatch(openModal({modalType:'TestModal', modalProps: {data}}))} content="Open Modal" color="teal"/>
        </>
    )
}