import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm';

const Payment = () => {
    const stripePromise = loadStripe('pk_test_51OJdvsLaJtktGeDoU8MC3shFxSyDjbrE7kNAwNQXlI6ce0kXIKv6Otiu0TMQbUNCng2mhRBSTPThr70gReXwvEXi00s0mC3BQo')
    return (
        <div>
            <h1 className='mb-20'> hello</h1>
            <h1 className='text-center font-bold text-2xl mb-10 border-b-slate-950 border-b'>Please Pay here</h1>
            <div className='w-1/2 mx-auto'>
                <Elements stripe={stripePromise}>
                   <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;