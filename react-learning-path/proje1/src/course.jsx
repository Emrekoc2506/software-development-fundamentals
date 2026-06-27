import React from 'react';

function course({ course }) {
    const { id, title, description, link, image } = course;
    return (
        <div className='course'>
            <div src={image} >
                <img></img>

                <h4>{title}</h4>
                <h5> {description} </h5>
                <h6> {link} </h6>


            </div>
        </div>
    )
}

export default course;