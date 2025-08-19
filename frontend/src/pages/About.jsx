import React from 'react'
import Title from '../component/Title'
import about from '../assets/about.jpg'
import NewLetterBox from '../component/NewLetterBox'
import Footer from '../component/Footer.jsx'
import '../App.css';


function About() {
  return (
    <div className=' w-full min-h-[100vh] flex items-center justify-center flex-col  bg-gradient-to-l from-[#141414] to-[#0c2025] gap-[50px] pt-[80px]'>
      <Title text1={'ABOUT'} text2={'US'}/>
      <div className='w-[100%]  flex items-center justify-center flex-col lg:flex-row'>

        <div className='lg:w-[50%] w-[100%] flex items-center justify-center '>
          <img src={about} alt="" className='lg:w-[65%] w-[80%] shadow-md shadow-black rounded-sm' />
        </div>
        <div className='lg:w-[50%] w-[80%] flex items-start justify-center gap-[20px]  flex-col mt-[20px] lg:mt-[0px]'>
          <p className='lg:w-[90%] w-[100%] text-[white] md:text-[16px] text-[13px]'>
            SaveCart born for smart, seamless shopping—created to deliver quality products, trending styles, and everyday essentials in one place. With reliable service, fast delivery, and great value, SaveCart makes your online shopping experience simple, satisfying, and stress-free.
          </p>
          <p className='lg:w-[90%] w-[100%] text-[white] md:text-[16px] text-[13px]'>
             modern shoppers—combining style, convenience, and affordability. Whether it’s fashion, essentials, or trends, we bring everything you need to one trusted platform with fast delivery, easy returns, and a customer-first shopping experience you’ll love.
          </p>
          <p className='lg:w-[80%] w-[100%] text-[15px] text-[white] lg:text-[18px] mt-[10px] font-bold'>Our Mission</p>
          <p className='lg:w-[90%] w-[100%] text-[white] md:text-[16px] text-[13px]'>
            Our mission is to redefine online shopping by delivering quality, affordability, and convenience. SaveCart connects customers with trusted products and brands, offering a seamless, customer-focused experience that saves time, adds value, and fits every lifestyle and need.
          </p>
        </div>
      </div>
    <div className='w-[100%] flex items-center justify-center flex-col gap-[10px]'>
  <Title text1={'WHY'} text2={'CHOOSE US'} />
  <div className='w-[80%] flex items-center justify-center lg:flex-row flex-col py-[40px] gap-6'>

    {[
      {
        title: "Quality Assurance",
        desc: "We guarantee quality through strict checks, reliable sourcing, and a commitment to customer satisfaction always."
      },
      {
        title: "Convenience",
        desc: "Shop easily with fast delivery, simple navigation, secure checkout, and everything you need in one place."
      },
      {
        title: "Exceptional Customer Service",
        desc: "Our dedicated support team ensures quick responses, helpful solutions, and a smooth shopping experience every time."
      }
    ].map((item, i) => (
      <div
        key={i}
        className="lg:w-[33%] w-[90%] h-[250px] border border-gray-100 flex items-center justify-center gap-[20px] flex-col px-[40px] py-[10px] text-white backdrop-blur-[2px] bg-[#ffffff0b] transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-cyan-200/20 hover:border-cyan-300 hover:bg-[#ffffff1a] rounded-xl"
      >
        <b className='text-[20px] font-semibold text-[#bff1f9]'>{item.title}</b>
        <p className='text-center'>{item.desc}</p>
      </div>
    ))}
    
  </div>
</div>

      <NewLetterBox/>
      <Footer />
      
    </div>
  )
}

export default About
