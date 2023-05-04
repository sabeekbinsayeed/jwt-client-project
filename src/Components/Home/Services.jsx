import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://complete-project-mechanics-server-sabeekbinsayeed.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <div>
            <div className='text-center mb-5'>
                <p className='text-orange-700 font-bold text-2xl'>services</p>
                <h2 className='text-5xl font-semibold '>Our services</h2>
                <p>Lorem ipsum dolor sit amelorem quibusdam possimus?</p>

            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {services.map(service => <ServiceCard service={service}></ServiceCard>)}
            </div>
        </div>
    );
};

export default Services;