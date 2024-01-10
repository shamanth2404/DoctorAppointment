import React from 'react'
import { services } from '../assets/data/services'
import ServiceCard from '../components/services/ServiceCard'

const Services = () => {
  return (
    <section className='pt-1'>
      <div className="container mt-0">
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[10px] lg:mt-[15px]'>
        {services.map((item,index) => <ServiceCard item={item} index={index} key={index} />)}
      
    </div>
      </div>
    </section>
  )
}

export default Services
