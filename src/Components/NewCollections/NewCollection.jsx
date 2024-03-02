import React from 'react'
import './NewCollections.css'
import Item from '../Item/item'
import new_collection from '../Assests/new_collections'
const NewCollection = () => {
  return (
    <div className="new-collections">
        <h1>NEW FLAVOURS</h1>
        <hr/>
        <div className="collections">
            {new_collection.map((item,i)=>{
              return (
                <Item
                  key={i}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />)
            })}
        </div>
    </div>
  )
}

export default NewCollection
