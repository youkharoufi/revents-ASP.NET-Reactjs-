import React, {useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu, Container, Button } from 'semantic-ui-react';
import SignedOutMenu from './SignedOutMenu';
import SignedInMenu from './SignedInMenu';
import { useSelector } from 'react-redux';

export default function NavBar ({setShowNavBar}){

    const navigate = useNavigate();

    //const [isAuthenticated, setAuthentication] = useState(false);

    const {authenticated} = useSelector(state => state.auth);

    function handleSignOut(){
        setShowNavBar(false);
        navigate('/');
    }

    return (
        <Menu inverted fixed='top'>
                <Container>
                    <Menu.Item as={NavLink} to='/' header onClick={()=>setShowNavBar(false)}>
                        <img src="/assets/categoryImages/logo.png" alt="logo"/>
                    </Menu.Item>
                    <Menu.Item as={NavLink} to="/events" name="Events"/>
                    <Menu.Item as={NavLink} to="/sandbox" name="Sandbox"/>
                    { authenticated &&
                    <Menu.Item as={NavLink} to="/createEvent">
                    <Button positive inverted content="Create Event"/>
                    </Menu.Item>
                    }
                    
                    {authenticated ? <SignedInMenu signOut={handleSignOut}/> : <SignedOutMenu/> }
                    
                    

                </Container>
        </Menu>
    )
}