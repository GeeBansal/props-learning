import React from 'react'

import componentsImage from '../assets/images/components.png';
import stateImage from '../assets/images/state.png';
import eventsImage from '../assets/images/events.png';

const ConceptItem = (props) => {
  return (
   
        <li className="concept">
          <img src={props.image} alt={props.title} />
        <h2>{props.title}</h2>
          <p>{props.description}</p>
        </li>
   
  )
}

export default ConceptItem