import React from 'react'
import "./Entry.css"

function Entry(props) {
  return (
      <div id= "move">
          <dl className='main_data'>
              <div className='target'>
                  <dt>
                      <span className='Emoji'>{props.emoji}</span>
                      <br />
                      <span className='name'>{props.name}</span>
                  </dt>

                  <dd>
                      <span>
                          {props.definition}
                      </span>
                  </dd>
              </div>
          </dl>
      </div>
  )
}

export default Entry