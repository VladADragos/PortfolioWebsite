import React, { Component } from 'react';

import Info from '../info';
// import  Form  from '../form';
import ContactForm from '../ContactForm';

export default function Footer() {
  return (
    <section className='footer' id='footer'>
      <div className='footer__container'>
        {/* <Form /> */}
        <ContactForm />
      </div>
    </section>
  );
}
