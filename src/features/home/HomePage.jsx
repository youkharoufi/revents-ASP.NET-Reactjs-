import React from 'react';
import { Segment, Container, Image, Button, Icon, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom'

export default function HomePage({setShowNavBar}){
    

    return (
        <Segment inverted textAlign="center" vertical className="masthead">
            <Container>
                <Header as='h1' inverted>
                    <Image size='massive' src='/assets/categoryImages/logo.png' style={{marginBottom:12}} />
                    Re-events
                </Header>
                <Button as={Link} to="/events" onClick={()=>setShowNavBar(true)} size="huge" inverted>
                    Get Started
                    <Icon name='right arrow'/>
                </Button>
            </Container>
        </Segment>
    )
}