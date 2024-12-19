import React from 'react'
import Sections from './Sections'
import { ToastContainer, toast } from 'react-toastify';

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "ac764c12-6bfc-4367-b2eb-abacb861edf7");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      toast.success("Thanks For sending!")
      formData('')
    }
  };

  return (
    <div id='Contact' className='w-full bg-gray-100 py-24 px-[15%]'>
         <ToastContainer />
        <Sections title={"Contact Me"} desc={"Halkaan Message iigu soo dir si aan kugu soo Jawaabo Email aad iiga soo dirtay"}/>
        <form action="" onSubmit={onSubmit} className='mt-10 max-w-[600px] mx-auto'>
            <div className='grid md:grid-cols-2 gap-2 mb-8'>
               <input type="text" placeholder='Enter Your Name' name='name'
               className='outline-0 border-[0.5px] border-gray-500 rounded-md bg-white p-3'
               />
               <input type="email" placeholder='Enter Your Email' name='email'
                className='outline-0 border-[0.5px] border-gray-500 rounded-md bg-white p-3'
               />
            </div>
            <textarea className='mb-6 resize-none w-full outline-0 border-[0.5px] border-gray-500 rounded-md bg-white p-3' rows="7" placeholder='Enter Your Message' name="message" ></textarea>
            <button className='ml-[2.5rem] md:ml-[12rem] py-3 px-8 text-center bg-[#00CD8E] text-white rounded-full flex gap-4 items-center'>Send a Message <img src="./arrow-icon-dark.png" className='w-3' /></button>
        </form>
    </div>
  )
}

export default Contact