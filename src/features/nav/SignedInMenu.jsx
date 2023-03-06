import React from 'react';
import { Dropdown, Menu, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


export default function SignedInMenu({signOut}){

    const {currentUser} = useSelector(state => state.auth);

    return (
        <Menu.Item position="right">
            <Image avatar spaced='right' src={currentUser.photoURL}/>
            <Dropdown pointing='top left' text="l'pup">
                <Dropdown.Menu>
                    <Dropdown.Item as={Link} to='/createEvent' text='Create Event' icon='plus' />
                    <Dropdown.Item text="My profile" icon='user' />
                    <Dropdown.Item onClick={signOut} text="Sign out" icon='power' />                    
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
    )
}