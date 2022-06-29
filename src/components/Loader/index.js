/* Packages import */
import React from 'react';
/* Locals import */


const Loader = ({setLoading}) => {

    // Display loader for 5secs, after displaying change Loading statue for rendering homepage
    setTimeout(function(){
        setLoading(true);
     }, 5000);

    return (
        <>
       <div className="loader">
            <div className="container">
                <div className='wrapper'>
                    <div className='item'></div>
                    <div className='item'></div>
                    <div className='item'></div>
                    <div className='item'></div>
                    <div className='item'></div>
                    <div className='item'></div>
                </div>
            </div>
        </div>
        </>
    )
};

export default Loader;