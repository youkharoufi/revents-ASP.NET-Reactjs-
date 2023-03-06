import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Segment, Item, Button, List, Icon } from 'semantic-ui-react';
import EventListAttendee from './EventListAttendee';
import { deleteEvent } from '../eventActions';
import {parse, format} from 'date-fns';

export default function EventListItem({event}){

const dispatch = useDispatch();

const dateuh = new Date(event.date);

    return (
        
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image size='tiny' circular src={event.hostPhotoURL}/>
                        <Item.Content>
                            <Item.Header content={event.title}/>
                            <Item.Description>
                                Hosted {event.hostedBy}
                            </Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name='clock'/>{format(dateuh, "MMMM d, yyyy h:mm a")}
                    <Icon name='marker'/>{event.venue}
                </span>
            </Segment>
            <Segment secondary>
                <List horizontal>
                    {event.attendees.map(attendee=>
                    <EventListAttendee attendee={attendee} key={attendee.id}/>
                )}

                </List>
            </Segment>
            <Segment clearing>
                <div>{event.description}</div>
                <Button onClick={()=>dispatch(deleteEvent(event.id))} color='red' floated='right' content='Delete'/>
                <Button as={Link} to={`/events/${event.id}`} color='teal' floated='right' content='View'/>
            </Segment>
        </Segment.Group>
        
        
        
        )
}