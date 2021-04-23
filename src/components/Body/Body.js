import React from 'react'
import './Body.css'
import BodyItem from './Body-item'

const Body = (props) => {
  console.log('Body', props)

  return (
    <>
      <div className="app-body">
        <ul className="wrap">
          <BodyItem {...props} />
        </ul>
      </div>
    </>
  )
}

export default Body;