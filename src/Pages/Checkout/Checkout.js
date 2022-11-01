import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Checkout = () => {
    const {_id, title, price} = useLoaderData();
    const {user} = useContext(AuthContext);
    const handlePlaceOrder = event =>{
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const message = form.message.value;
        const phone = form.phone.value;

        // database ei order take pathabo
        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message,
        }
    }
    
    return (
        <div>
            <form onSubmit={handlePlaceOrder}>
                <h2 className="text-4xl">You are about to order: {title}</h2>
                <p className="text-2xl">Price: {price} </p>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name="firstName" type="text" placeholder="First name" className="input input-ghost w-full input-bordered" />
                    <input name="lastName" type="text" placeholder="Last name" className="input input-ghost w-full input-bordered" />
                    <input name="phone" type="text" placeholder="Your Phone" className="input input-ghost w-full input-bordered" />
                    <input name="email" type="text" placeholder="Your Email" defaultValue={user?.email} className="input input-ghost w-full input-bordered" readOnly/>
                </div>
                <textarea name="message" className="textarea textarea-bordered h-24 w-full" placeholder="Your message"></textarea>
                <input className='btn' type="submit" value="Place your order" />
            </form>
        </div>
    ); 
};

export default Checkout;