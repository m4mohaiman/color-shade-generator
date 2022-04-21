import React, { useEffect, useState } from 'react';

const SingleColor = ({rgb, weight , index , hexColor}) => {
   const [alert, setAlert ] = useState(false);
   const bcg = rgb.join(',');
   const hexValue = `#${hexColor}`;
   console.log(bcg);
   const copyHandler = () => {
    setAlert(true); 
    navigator.clipboard.writeText(hexValue);
   }
   useEffect(()=>{
        const timeout = setTimeout(()=> {
            setAlert(false)
        },3000)
        return () => clearTimeout(timeout)
   },[alert])
  return <article onClick={copyHandler}
                 className={`color ${index > 10 && 'color-light'}`} style={{backgroundColor:`rgb(${bcg})`}}>
            <p className='percent-value'>{weight}%</p>
            <p className='color-value'>{hexValue}</p>
            {
                alert && <p className='alert'>copied to clipboard</p>
            }
         </article>
}

export default SingleColor;
