import React from 'react';
import { Grid } from 'semantic-ui-react'
import EventDetailedHeader from './EventDetailedHeader';
import EventDetailedSideBar from './EventDetailedSideBar';
import EventDetailedInfo from './EventDetailedInfo';
import EventDetailedChat from './EventDetailedChat';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function EventDetailedPage({match}){

    match = useParams();

    const event = useSelector(state => state.event.events.find(e => e.id === match.id))

    return (
            <Grid>
                <Grid.Column width={10}>
                    <EventDetailedHeader event={event}/>
                    <EventDetailedInfo event={event}/>
                    <EventDetailedChat/>
                </Grid.Column>
                    
                <Grid.Column width={6}>
                    <EventDetailedSideBar attendees={event.attendees}/>
                </Grid.Column>
            </Grid>    

)
}