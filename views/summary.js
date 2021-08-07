import React from 'react'

const Summary = ({ data }) => {
  return (
    <div>
      <h2>This graph shows that:</h2>
      {data.map((bullet) => {
        return (
          <div style={{ flexDirection: 'row', display: 'flex' }}>
            <i className={`fa ${bullet.icon}`} style={{ marginRight: 8 }}></i>
            <div dangerouslySetInnerHTML={{ __html: `${bullet.text}` }} />

          </div>
        )
      })}
    </div>
  )
}
export default Summary