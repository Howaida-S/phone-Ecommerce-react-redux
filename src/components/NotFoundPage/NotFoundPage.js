import React from 'react';
const NotFoundPage = (props) => {
  const style = {
    textAlign: 'center',
    textTransform: 'uppercase',
    paddingTop: '3rem',
    margin: '0 auto',
  }
  return (
    <div className='container'>
    <div className='row'>
      <div className='col-10 text-title' style={style}>
        <h1>4 0 4</h1>
        <h1> error</h1>
        <h1>page not found</h1>
        <h3>the requested url 
          {/* console.log(props) and found pathname in  location*/}
          <span style={{color: '#dc3545'}}>{props.location.pathname}</span> 
          was not found</h3>
      </div>
    </div>
  </div>
  );
}

export default NotFoundPage;