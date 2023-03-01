import React, {useState} from 'react';
import { Grid } from 'semantic-ui-react';
import EventForm from '../eventForm/EventForm';
import EventList from './EventList';
import { sampleData } from '../../../app/api/sampleData';

export default function EventDashboard({formOpen, setFormOpen, selectEvent, selectedEvent}){

    const [events, setEvents]= useState(sampleData);

    function handleCreateEvent(event){
        setEvents([...events, event])
    }

    function handleUpdatedEvent(updatedEvent){
        setEvents(events.map( evt=>
            evt.id === updatedEvent.id ? updatedEvent : evt
        ));
        selectEvent(null);
        setFormOpen(false);
    }

    function handleDeleteEvent(eventId){
        setEvents(events.filter(evt => evt.id !== eventId))
    }
    
    return(
        
        <Grid>
            <Grid.Column width={10}>
                <EventList events={events} selectEvent={selectEvent} deleteEvent={handleDeleteEvent}/>
            </Grid.Column>
                
            <Grid.Column width={6}>
                {formOpen &&
                    <EventForm setEvents={setEvents} createEvent={handleCreateEvent} setFormOpen={setFormOpen} selectedEvent={selectedEvent}
                    key={selectedEvent ? selectedEvent.id : null} updatedEvent={handleUpdatedEvent}
                    />
                }
            </Grid.Column>
        </Grid>
        
        
    )
}