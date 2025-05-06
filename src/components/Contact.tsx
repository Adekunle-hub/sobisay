import React, { useEffect, useState } from 'react'
import arrowImage from "/arrow-up.png"

const Contact = () => {
  type FormErrors = {
    fullname?: string;
    email?: string;
    phone?: string;
    message?: string;
  }


  const initialValues = {fullname:"", email:"", phone:"", message:""}
  const [formValue, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState<FormErrors>({})
  const [isSubmit, setIsSubmit] = useState(false)
  const [isFormValid, setIsFormValid] = useState(false)
  const [enableButton, setEnableButton] = useState(false)

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phoneNumberRegex = /^\+?(\d{1,3})?[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;


  const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>{ 
    const {name , value} = e.target;
    setFormValues({...formValue, [name]: value})
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    setFormErrors(validate(formValue))
    setIsSubmit(true)
    

  }

  //check for valid form
  useEffect(()=>{
    let {fullname, email, phone} = formValue;

    const isValid = 
      fullname.trim() !== "" &&
      email.trim() !== "" &&
      emailRegex.test(email) &&
      phone.trim() !== "" &&
      phoneNumberRegex.test(phone);

      setIsFormValid(isValid)
      setEnableButton(isValid)

  },[formValue])

  useEffect(()=>{
    if(Object.keys(formErrors).length === 0 && isSubmit){
      setFormValues(initialValues)
      alert("Message sent successfully")
    }

  },[formErrors])


  const validate = (values:FormErrors)=>{
    
    let errors:FormErrors = {}
    
    if(!values.fullname){
      errors.fullname = "fullname is required"
    }if(!values.email){
      errors.email = "email is required"
    }else if(!emailRegex.test(values.email)){
      errors.email = "please enter a valid email"
    }
    if(!values.phone){
      errors.phone = "phone number is required"
    }else if(!phoneNumberRegex.test(values.phone)){
    errors.phone  = "please enter a valid phone number "
    }

    return errors;
  }


  return (
    <fieldset className='md:pt-[7rem] w-[90%] mx-auto pt-[3rem]'>
      <section className=' flex rounded-3xl p-[3rem] flex-col md:flex-row mx-auto md:gap-[2rem] bg-[#024866]'>
        <div className=' md:pr-[4rem]'>
          <p className='md:text-xl text-base pb-[10px] md:pb-[1rem] text-white'>Have a project in mind?</p>
          <h2 className='md:text-4xl text-2xl text-white pb-[10px]'>Reach Out</h2>
        </div>
        <div className='md:px-[4rem]'>
        <form
          onSubmit={handleSubmit}
         className='flex relative flex-col gap-6'>
          <div className='flex flex-col gap-2'> 
          <label htmlFor="fullName" className='text-white'>Full Name</label>
            <input 
              id="fullName" 
              name="fullname" 
              placeholder="Enter your name" 
              type="text"
              value={formValue.fullname}
              onChange={handleChange}
              className='bg-white rounded-lg px-3 max-w-[100%] md:w-[32rem] py-4' 
            />
            <p className='text-red-800 font-extrabold text-sm'>{formErrors.fullname} </p>
          </div>
          
           
           <div className='flex flex-col gap-2'>
            <label htmlFor="email" className='text-white'>Email Address</label>
            <input 
              id="email" 
              name="email" 
              placeholder="Enter your email" 
              type="email" 
              onChange={handleChange}
              value={formValue.email}
              className='bg-white rounded-lg px-3 max-w-[100%] md:w-[32rem] py-4' />
              <p className='text-red-800 font-extrabold text-sm'>{formErrors.email} </p>
            </div>
            
            
            <div className='flex flex-col gap-2'>
              <label htmlFor="phone" className='text-white'>Phone Number</label>
              <input 
                id="phone" 
                name="phone" 
                placeholder="Your number" 
                type="tel" 
                onChange={handleChange}
                value={formValue.phone}
                className='bg-white rounded-lg px-3 max-w-[100%] md:w-[32rem] py-4'  />
                <p className='text-red-800 font-extrabold text-sm'>{formErrors.phone} </p>
            </div>
            
           
            <div className='flex flex-col gap-2'>
            <label htmlFor="message" className='text-white'>Message</label>
            <textarea 
              id="message" 
              name="message" 
              onChange={handleChange}
              value={formValue.message}
              placeholder="Send us a message..."

              className='bg-white rounded-lg px-3 max-w-[100%] md:w-[32rem] py-3 h-[7rem] resize-none'
            ></textarea>
            </div>
           
            
            <button 
            disabled={!enableButton}
             className= {`flex items-center self-center rounded-[4rem] bg-blue-800
              ${isFormValid 
                ? " opacity-100 cursor-pointer"
                : "opacity-40"
              }
              text-white py-[5px] md:self-end px-[1rem]`}
              
              type="submit">Contact Us<img src={arrowImage} /></button>
          </form>
        </div>
    </section>
    </fieldset>
  
  )
}

export default Contact
