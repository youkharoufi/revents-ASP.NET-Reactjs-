import React, {useState} from "react";
import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar";

function App() {

  // const title = React.createElement('h1', {}, 'Revents no JSX');
  // const div = React.createElement('div', {className:'App'}, title);

  const [formOpen, setFormOpen] = useState(false);

  return (
    <>
      <NavBar setFormOpen={setFormOpen}/>
      {/* <button className='ui icon red button'>
        <i className='user icon'/> CSS Button
      </button>
      <Button icon='user' content='React Button' color='green'/> */}
      <Container className="main">
      <EventDashboard formOpen={formOpen} setFormOpen={setFormOpen}/>
      </Container>
    </>
    
  );
}

export default App;
