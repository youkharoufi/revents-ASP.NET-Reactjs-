import React from 'react';
import { Image, List } from 'semantic-ui-react'

export default function EventListAttendee(props){
    return (
        
        <List.Item>
            <Image size='mini' circular src={props.attendee.photoURL}/>
        </List.Item>
        
        
    )
}