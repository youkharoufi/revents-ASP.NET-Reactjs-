import React, {useState} from 'react';
import { Segment, Header, Button, FormField, Label} from 'semantic-ui-react';
import cuid from 'cuid';
import {Link, useParams} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createEvent, updateEvent } from '../eventActions';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, handleChange, handleSubmit, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../../../app/common/form/MyTextInput';
import MyTextArea from '../../../app/common/form/MyTextArea';
import MySelectInput from '../../../app/common/form/MySelectInput';
import { categoryData } from '../../../app/api/categoryOptions';
import MyDateInput from '../../../app/common/form/MyDateInput';

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

    const validationSchema = Yup.object({
        title: Yup.string().required("You must provide a title"),
        description: Yup.string().required("You must provide a description"),
        category: Yup.string().required(),

        city: Yup.string().required(),
        venue: Yup.string().required(),
        date: Yup.string().required(),


    })

    function handleFormSubmit(values){
        dispatch(createEvent({...values, id: cuid(), hostedBy: "l'pup", attendees:[], hostPhotoURL:'assets/categoryImages/user.png'}));
        navigate('/events');
    }

    function handleUpdatedFormSubmit(values){
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

            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={(values)=> {
            selectedEvent ? handleUpdatedFormSubmit(values) : handleFormSubmit(values)

                console.log(values)
            }}>

            {({isSubmitting, isValid, dirty}) => (

<Form className="ui form">

<Header sub color='teal' content="Event Details" />
<MyTextInput name='title' placeholder="event title"/>

<MyTextArea name='description' placeholder="event description"/>

<MySelectInput name='category' placeholder="event category" options={categoryData}/>

<Header sub color="teal" content="Event Location"/>
<MyTextInput name='city' placeholder="city"/>

<MyTextInput name='venue' placeholder="venue"/>

<MyDateInput name='date' placeholder="event date" timeFormat="HH:mm"
showTimeSelect
timeCaption='time'
dateFormat='MMMM d, yyyy h:mm a'/>


    {/* <Form.Field>
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
    </Form.Field> */}

    <Button loading={isSubmitting} disabled={isSubmitting || !isValid || !dirty} type="submit" floated="right" positive content="Submit" />
    <Button disabled={isSubmitting} as={Link} to="/events" type="button" floated="right" content="Cancel" />

    </Form>
            )}

                    
            
            </Formik>
            
        </Segment>
    )
}