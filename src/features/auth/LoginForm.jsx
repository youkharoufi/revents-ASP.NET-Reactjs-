import React from 'react';
import ModalWrapper from '../../app/common/modals/ModalWrapper';
import * as Yup from 'yup';
import { Formik, Form} from 'formik';
import MyTextInput from '../../app/common/form/MyTextInput';
import { Button } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { SignInUser } from './authActions';
import { closeModal } from '../../app/common/modals/modalReducer';

export function LoginForm(){

    const dispatch = useDispatch();

    const initialValues = {email:'', password:''};

    function SignIn(values){
        console.log(values);
        dispatch(SignInUser(values));
        dispatch(closeModal());
        
    }

    return (
        <ModalWrapper size='mini' header="Sign in Re-vents">
            <Formik initialValues={initialValues}
            validationSchema = {Yup.object({
                email: Yup.string().required().email(),
                password: Yup.string().required()
            })}
            onSubmit={values=> SignIn(values)}
            >
            
            {({isSubmitting, isValid, dirty}) => (
                <Form className='ui form'>
                    <MyTextInput name="email" placeholder="Email Address"/>
                    <MyTextInput name="password" type="password" placeholder="Password"/>

                    <Button 
                        
                            disabled={!isValid || !dirty || isSubmitting}
                            type='submit'
                            fluid
                            size='large'
                            color='teal'
                            content='Login'/>

                </Form>
            )}

            </Formik>

        </ModalWrapper>
    )
}