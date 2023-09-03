import React from 'react'
import ConceptItem from './ConceptItem'

const ConceptList = (props) => {
  return (
    <ul id="concepts">
        {props.items.map(item=>{
            return(
                <ConceptItem title={item.title} image={item.image} description={item.description}  />
            )
        })}
  
    </ul>
  )
}

export default ConceptList