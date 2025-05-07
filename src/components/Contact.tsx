import React, { useEffect, useState } from 'react'
import arrowImage from "/arrow-up.png"
import toast, {Toaster} from 'react-hot-toast'

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
  const [isLoading, setIsLoading] = useState(false)



  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phoneNumberRegex = /^\+?(\d{1,3})?[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
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


  const onSubmit = async (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    setFormErrors(validate(formValue))
    setIsSubmit(true)
    setIsLoading(true)
    setFormValues(initialValues)
    formData.append("access_key", "20104d1f-a9ad-47d4-b59c-a3b1e7f7b689");
    try{
      await toast.promise(
        fetch("https://api.web3forms.com/submit",{
          method:"POST",
          headers:{
            "Content-Type" : "application/json",
            Accept:"application/json"
          },
          body: JSON.stringify(Object.fromEntries(formData))
        }).then((res) => res.json()),
        {
          loading:"Sending your message...",
          success:(res) =>{
            if(res.success){
              setFormValues(initialValues)
              return "Message sent successfully"
            }else{
              throw new Error(res.message)
            }
          },
           error: (err) => err.message || 'Failed to send message. Please try again.'
        }
  )}
    catch(error){
      console.error(error)
    }finally {
      setIsLoading(false)
    };

  }
 
  const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>{ 
    const {name , value} = e.target;
    setFormValues({...formValue, [name]: value})
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
  
    }

  },[formErrors])


 

  return (
    <fieldset className='md:pt-[7rem] w-[90%] mx-auto pt-[3rem]'>
      <section className=' flex rounded-3xl   p-[3rem] flex-col md:flex-row mx-auto md:gap-[4rem] bg-[#024866]'>
        <div className='lg:w-[30%] w-[100%]  md:pr-[4rem]'>
          <p className='md:text-xl text-base pb-[10px] md:pb-[1rem] text-white'>Have a project in mind?</p>
          <h2 className='md:text-4xl text-2xl text-white pb-[10px]'>Reach Out</h2>
        </div>
        
        <div className='lg:w-[50%] w-[100%]  '>
        <Toaster position="top-right" />
        <form
          onSubmit={onSubmit}
         className='flex relative flex-col gap-6'>
         
          <div className='flex flex-col  gap-2'> 
          <label htmlFor="fullName" className='text-white lg:text-base text-sm '>Full Name</label>
            <input 
              id="fullName" 
              name="fullname" 
              placeholder="Enter your name" 
              type="text"
              value={formValue.fullname}
              onChange={handleChange}
              className='bg-white rounded-lg px-3  w-[100%]  py-3' 
            />
            <p className='text-red-800 font-extrabold text-left text-sm'>{formErrors.fullname} </p>
          </div> 
          <div className='flex flex-col gap-2'>
            <label htmlFor="email" className='text-white lg:text-base text-sm'>Email Address</label>
            <input 
              id="email" 
              name="email" 
              placeholder="Enter your email" 
              type="email" 
              onChange={handleChange}
              value={formValue.email}
              className='bg-white rounded-lg px-3  w-[100%] py-3' />
              <p className='text-red-800 font-extrabold text-sm'>{formErrors.email} </p>
            </div>
            
            
            <div className='flex flex-col gap-2'>
              <label htmlFor="phone" className='text-white lg:text-base text-sm'>Phone Number</label>
              <input 
                id="phone" 
                name="phone" 
                placeholder="Your number" 
                type="tel" 
                onChange={handleChange}
                value={formValue.phone}
                className='bg-white rounded-lg px-3 w-[100%] py-3'  />
                <p className='text-red-800 font-extrabold text-sm'>{formErrors.phone} </p>
            </div>
            
           
            <div className='flex flex-col gap-2'>
            <label htmlFor="message" className='text-white lg:text-base text-sm'>Message</label>
            <textarea 
              id="message" 
              name="message" 
              onChange={handleChange}
              value={formValue.message}
              placeholder="Send us a message..."

              className='bg-white rounded-lg px-3 w-[100%] py-3 h-[7rem] resize-none'
            ></textarea>
            </div>            
            <button 
            disabled={!enableButton}
             className= {`flex items-center w-[120px] self-end rounded-[4rem] bg-[#106285]
              ${isFormValid 
                ? " opacity-100 cursor-pointer"
                : "opacity-70"
              }
              text-white py-[5px]   px-[20px]`}
              
              type="submit">{isLoading ? "Loading" : "Submit"}<img src={arrowImage} /></button>
          </form>
        </div>
    </section>
    </fieldset>
  
  )
}


export default Contact;
