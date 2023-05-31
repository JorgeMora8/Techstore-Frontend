import React from 'react'

const Loading = () => {
  return (
    <div className='loadingContainer'>
        <img src="./TechstoreLogo.png" style={{width:"300px"}} alt="" />
        <b className='loadingTitle'>Loading data... </b>
        <div className="spinner-border text-light" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
    </div>
  )
}

export default Loading