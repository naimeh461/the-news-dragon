import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div className='w-50 mx-auto'>
            <h2>Terms and conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus assumenda ea praesentium perferendis laudantium aspernatur et consequuntur pariatur nihil. Incidunt aliquam nesciunt consectetur assumenda harum totam rerum at delectus perferendis!</p>
            <p>Go Back To Register<Link to="/register">Register</Link></p>
        </div>
    );
};

export default Terms;