
import React from 'react'
import {motion, useMotionValue} from "framer-motion"





interface NavigationPropsLink{
  contents:string[];
}

const Buttons:React.FC<NavigationPropsLink> = ({contents}) => {


const buttonMotionValues  = contents.map(()=>
(
    {
      x:useMotionValue(0),
      y:useMotionValue(0)
    }
  )
);


  let sensitivity:number = 0.4
  let maxMovement:number = 40

  const handleMouseMove = (e:React.MouseEvent<HTMLLIElement>, index:number)=>{
    const buttonDimension = e.currentTarget.getBoundingClientRect()
    let centerX = (buttonDimension.left + buttonDimension.right) / 2;
    let centerY = (buttonDimension.top + buttonDimension.bottom) / 2;

    const mouseX = (e.clientX - centerX ) * sensitivity;
    const mouseY = (e.clientY - centerY ) * sensitivity;

    buttonMotionValues[index].x.set(Math.max(-maxMovement, Math.min(maxMovement,mouseX)));
    buttonMotionValues[index].y.set(Math.max(-maxMovement, Math.min(maxMovement,mouseY)));

  };

  const handleMouseLeave =(index:number)=>{
    buttonMotionValues[index].x.set(0)
    buttonMotionValues[index].y.set(0)
  }
 

  return (
    <motion.button
    
     className='md:flex gap-[1.5rem]  w-full items-center justify-center text-left '>
        {contents.map((content, index) =>{
          return ( 
           <ul
          className='cursor-pointer pb-[0.5rem] md:pb-[0] font-semibold mb-[1rem] w-full  md:border-none border-b-1
          border-[rgba(61,61,61,0.3)]  '
           >
           <motion.li key={index}
             style={{
              x : buttonMotionValues[index].x,
              y : buttonMotionValues[index].y
             }}
             onMouseMove ={(e)=> handleMouseMove(e, index)}
             onMouseLeave ={()=>handleMouseLeave(index)}
             >
            {content}
            </motion.li>
           </ul> 
            
           
          )
        })}

    </motion.button>
  )
}

export default Buttons;
