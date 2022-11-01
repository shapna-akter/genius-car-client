import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const service = useLoaderData()
    return (
        <div>
            {service.title}
        </div>
    );
};

export default Checkout;