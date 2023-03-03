import React, {useState} from 'react';
import { Segment, Header, Form, Button } from 'semantic-ui-react';
import cuid from 'cuid';
import {Link, useParams} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createEvent, updateEvent } from '../eventActions';
import { useNavigate } from 'react-router-dom';

export default function EventForm({match}){

    match = useParams();
    
    const selectedEvent = useSelector(state => state.event.events.find(e=>e.id === match.id));

    const dispatch = useDispatch();

    const navigate = useNavigate()


    const initialValues = selectedEvent ?? {
        title:'',
        category:'',
        description:'',
        city:'',
        venue:'',
        date:''
    }

    const [values, setValues]= useState(initialValues);

    function handleFormSubmit(){
        dispatch(createEvent({...values, id: cuid(), hostedBy: "l'pup", attendees:[], hostPhotoURL:'assets/categoryImages/user.png'}));
        navigate('/events');
    }

    function handleUpdatedFormSubmit(){
        dispatch(updateEvent({...selectedEvent, ...values}));
        navigate('/events');
    }

    function handleInputChange(e){
        const {name, value} = e.target;
        setValues({...values, [name]:value})
    }

    return(
        <Segment clearing>
            <Header content={!selectedEvent ? "Create new event" : "Update event"}/>
            <Form onSubmit={ !selectedEvent ? handleFormSubmit : handleUpdatedFormSubmit}>
                <Form.Field>
                    <input type="text" placeholder='Event title' name='title' value={values.title} onChange={(e)=>handleInputChange(e)}/>
                </Form.Field>

                <Form.Field>
                    <input type="text" placeholder='Description' name='description' value={values.description} onChange={(e)=>handleInputChange(e)}/>
                </Form.Field>

                <Form.Field>
                    <input type="text" placeholder='City' name='city' value={values.city} onChange={(e)=>handleInputChange(e)}/>
                </Form.Field>

                <Form.Field>
                    <input type="text" placeholder='Venue' name='venue' value={values.venue} onChange={(e)=>handleInputChange(e)}/>
                </Form.Field>

                <Form.Field>
                    <input type="date" placeholder='Date' name='date' value={values.date} onChange={(e)=>handleInputChange(e)}/>
                </Form.Field>

                <Button type="submit" floated="right" positive content="Submit" />
                <Button as={Link} to="/events" type="button" floated="right" content="Cancel" />

            </Form>
        </Segment>
    )
}