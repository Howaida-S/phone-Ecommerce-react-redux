import React from 'react';
import classes from './Title.module.css';
const title = (props) => {
  return (
    <div className='row'>
      <div className='col-10 text-title'>
        <h1 className={classes.Heading}>
          {props.name} <strong>{props.title}</strong>
        </h1>
    </div>
  </div>
  );
}
export default title;