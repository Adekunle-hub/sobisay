
import React from 'react'
import {motion, useMotionValue} from "framer-motion"



type HeaderProps = {
  onNavClick:(section:string) => void
}


type NavigationPropsLink ={
  contents:string[];
}

type ButtonProps = HeaderProps & NavigationPropsLink;

const Buttons:React.FC<ButtonProps> = ({contents, onNavClick}) => {
  



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

  const handleMove = (clientX: number, clientY: number, index: number, element: HTMLElement) =>{
    const buttonDimension = element.getBoundingClientRect()
    let centerX = (buttonDimension.left + buttonDimension.right) / 2;
    let centerY = (buttonDimension.top + buttonDimension.bottom) / 2;

    const moveX = (clientX - centerX ) * sensitivity;
    const moveY = (clientY - centerY ) * sensitivity;

    buttonMotionValues[index].x.set(Math.max(-maxMovement, Math.min(maxMovement,moveX)));
    buttonMotionValues[index].y.set(Math.max(-maxMovement, Math.min(maxMovement,moveY)));

  }

  const handleMouseMove = (e:React.MouseEvent<HTMLLIElement>, index:number)=>{
    handleMove(e.clientX, e.clientY, index, e.currentTarget)
  };

  const handleMouseLeave =(index:number)=>{
    buttonMotionValues[index].x.set(0)
    buttonMotionValues[index].y.set(0)
  }
 const handleTouchMove = (e:React.TouchEvent<HTMLLIElement>, index:number) => {
  const touch = e.touches[0]
  handleMove(touch.clientX, touch.clientY, index, e.currentTarget)
 }

 const handleTouchEnd = (index:number)=>{
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
             onTouchMove={(e)=>{handleTouchMove(e, index)}}
             onTouchEnd={()=>{handleTouchEnd(index)}}
             onMouseMove ={(e)=> handleMouseMove(e, index)}
             onMouseLeave ={()=>handleMouseLeave(index)}
             onClick={()=>{onNavClick(content)}} 
             className={content === "Home" ? "md:hidden block": ""}
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
