import React from 'react';
import { Segment, Item, Button, List, Icon } from 'semantic-ui-react';
import EventListAttendee from './EventListAttendee';

export default function EventListItem(props){
    return (
        
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image size='tiny' circular src={props.event.hostPhotoURL}/>
                        <Item.Content>
                            <Item.Header content={props.event.title}/>
                            <Item.Description>
                                Hosted {props.event.hostedBy}
                            </Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name='clock'/>{props.event.date}
                    <Icon name='marker'/>{props.event.venue}
                </span>
            </Segment>
            <Segment secondary>
                <List horizontal>
                    {props.event.attendees.map(attendee=>
                    <EventListAttendee attendee={attendee} key={attendee.id}/>
                )}

                </List>
            </Segment>
            <Segment clearing>
                <div>{props.event.description}</div>
                <Button color='teal' floated='right' content='View'/>
            </Segment>
        </Segment.Group>
        
        
        
        )
}