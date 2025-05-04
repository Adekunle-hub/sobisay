
import customersFeedback from "../../CustomersFeedback"


const Feedback = () => {
  console.log(customersFeedback)
  return (
    <>
      <section className='md:py-[3rem] py-[2rem] w-full bg-[#F1F1F1]'>
        <div className='w-[90%] mx-auto'>
          <h1 className='md:text-4xl text-2xl text-center pb-[2rem] pt-[1rem]'>Customer's <span className='text-blue-800'> Feedback </span></h1>
          <article className='grid grid-flow-col overflow-x-auto md:grid-flow-row md:auto-cols-auto auto-cols-[80%] md:grid-cols-3 md:py-[3rem] gap-[1.2rem] '>
            {customersFeedback.map((customersFeedback, index)=>(
              <section key={index} className='flex flex-col justify-between  gap-[3rem] rounded-3xl bg-white py-6 px-4'>
                <p className='md:text-lg pt-[10px] text-sm'> 
                    {customersFeedback.feedback}
                </p>
              <div className='flex items-center  gap-[10px]'>
                  <img src={customersFeedback.customer.organizationImage} className='w-[40px] h-[40px] rounded-[50%]' />
                <div>
                  <h1 className='text-sm   font-bold'>{customersFeedback.customer.post}</h1>
                  <p className='md:text-base text-xs pt-[3px] italic'>{customersFeedback.customer.name}</p>
                </div>
              </div>
              </section>
            ))}

              
          </article>
        </div>

      </section>
    </>
  )
}

export default Feedback
