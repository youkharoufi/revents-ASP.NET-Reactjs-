import React from 'react';
import {Segment, Image, Header, Button, Item } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function EventDetailedHeader({event}){

    const eventImageStyle = {
        filter: 'brightness(30%)'
    };
    
    const eventImageTextStyle = {
        position: 'absolute',
        bottom: '5%',
        left: '5%',
        width: '100%',
        height: 'auto',
        color: 'white'
    };

    return(
        <Segment.Group>
    <Segment basic attached="top" style={{padding: '0'}}>
        <Image src={`/assets/categoryImages/${event.category}.jpg`} fluid style={eventImageStyle}/>

        <Segment basic style={eventImageTextStyle}>
            <Item.Group>
                <Item>
                    <Item.Content>
                        <Header
                            size="huge"
                            content='Event Title'
                            style={{color: 'white'}}
                        />
                        <p>{event.date}</p>
                        <p>
                            Hosted by <strong>{event.hostedBy}</strong>
                        </p>
                    </Item.Content>
                </Item>
            </Item.Group>
        </Segment>
    </Segment>

    <Segment attached="bottom" clearing>
        <Button>{event.venue}</Button>
        <Button color="teal">JOIN THIS EVENT</Button>

        <Button as={Link} to={`/manage/${event.id}`} style={{width:100}} color="orange" floated="right">
            Manage Event
        </Button>
    </Segment>
</Segment.Group>
    )
}