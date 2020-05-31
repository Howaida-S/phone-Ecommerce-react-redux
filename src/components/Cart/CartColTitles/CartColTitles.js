import React from 'react';
const cartColTitles = () => {
  const style = {
    margin: '0 auto',
    textTransform:'capitalize',
    color: 'var(--mainBlue)'
  }
  return (
    <div 
      className='container-fluid d-none d-lg-block' 
      style={{textAlign: 'center', marginBottom: '1rem'}}>
      <div className='row'>
{/* ---------------- 1st col ------------------- */}        
        <div className='col-10 col-lg-2 Center' style={style}>
          <p>products</p>
        </div>
{/* ---------------- 2nd col ------------------- */}        
        <div className='col-10 col-lg-2 Center' style={style}>
          <p>name of product</p>
        </div>  
{/* ---------------- 3rd col ------------------- */}        
        <div className='col-10 col-lg-2 Center' style={style}>
          <p>price</p>  
        </div>  
{/* ---------------- 4th col ------------------- */}        
        <div className='col-10 col-lg-2 Center' style={style}>
          <p>quantity</p>
        </div>
{/* ---------------- 5th col ------------------- */}        
        <div className='col-10 col-lg-2 Center' style={style}>
          <p>remove</p>
        </div>
{/* ---------------- 6th col ------------------- */}        
        <div className='col-10 col-lg-2 Center' style={style}>
          <p>total</p>
        </div>
      </div>
    </div>
  );
}

export default cartColTitles;