import React from 'react';
import { Segment, Item } from 'semantic-ui-react';

export default function EventDetailedSideBar({attendees}){
    return(
        <>
<Segment
    textAlign="center"
    style={{border: 'none'}}
    attached="top"
    secondary
    inverted
    color="teal"
>
    {attendees.length} {attendees.length > 1 ? 'People' : "Person"} Going
</Segment>
<Segment attached>
    <Item.Group relaxed divided>
        {attendees.map((attendee) => (
            <Item style={{position: 'relative'}} key={attendee.id}>
            <Item.Image size="tiny" src={attendee.photoURL || '/assets/user.png'}/>
            <Item.Content verticalAlign="middle">
                <Item.Header as="h3">
                    <span>{attendee.name}</span>
                </Item.Header>
            </Item.Content>
        </Item>

        )
            )}
        
    </Item.Group>
</Segment>
</>
    )
}