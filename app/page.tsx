import Hero from '@/components/guestView/home/HeroHome';
import Service from '@/components/guestView/home/Service';
import Price from '@/components/guestView/home/PriceHome';
import React from 'react';
import TestimoniView from '../components/guestView/home/TestimoniView';
import FAQView from '../components/guestView/home/FaqView';
import Portofolio from '../components/guestView/home/Portofolio';


export default function page() {
  return (
    <div>
        <Hero />
        <Service />
        <Price />
        <Portofolio />
        <TestimoniView/>
        <FAQView />
    </div>
  )
}