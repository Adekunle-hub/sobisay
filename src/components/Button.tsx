import React from "react";
import { motion, useMotionValue } from "framer-motion";

type HeaderProps = {
  onNavClick: (section: string) => void;
  closeMenu?: () => void;
};

type NavigationPropsLink = {
  contents: string[];
};

type ButtonProps = HeaderProps & NavigationPropsLink;

const Buttons: React.FC<ButtonProps> = ({
  contents,
  onNavClick,
  closeMenu,
}) => {
  const buttonMotionValues = contents.map(() => ({
    x: useMotionValue(0),
    y: useMotionValue(0),
  }));

  const isMobile = () => {
    return window.innerWidth <= 768 || "ontouchstart" in window;
  };

  let sensitivity: number = 0.4;
  let maxMovement: number = 40;

  const handleMove = (
    clientX: number,
    clientY: number,
    index: number,
    element: HTMLElement
  ) => {
    if (isMobile()) return;

    const buttonDimension = element.getBoundingClientRect();
    let centerX = (buttonDimension.left + buttonDimension.right) / 2;
    let centerY = (buttonDimension.top + buttonDimension.bottom) / 2;

    const moveX = (clientX - centerX) * sensitivity;
    const moveY = (clientY - centerY) * sensitivity;

    buttonMotionValues[index].x.set(
      Math.max(-maxMovement, Math.min(maxMovement, moveX))
    );
    buttonMotionValues[index].y.set(
      Math.max(-maxMovement, Math.min(maxMovement, moveY))
    );
  };

  const handleMouseMove = (
    e: React.MouseEvent<HTMLLIElement>,
    index: number
  ) => {
    handleMove(e.clientX, e.clientY, index, e.currentTarget);
  };

  const handleMouseLeave = (index: number) => {
    buttonMotionValues[index].x.set(0);
    buttonMotionValues[index].y.set(0);
  };
  const handleTouchMove = (
    e: React.TouchEvent<HTMLLIElement>,
    index: number
  ) => {
    if (isMobile()) return;
    const touch = e.touches[0];
    handleMove(touch.clientX, touch.clientY, index, e.currentTarget);
  };

  const handleTouchEnd = (index: number) => {
    buttonMotionValues[index].x.set(0);
    buttonMotionValues[index].y.set(0);
  };

  const handleClick = (content: string) => {
    onNavClick(content);
    if (closeMenu) {
      closeMenu();
    }
  };
  return (
    <motion.button className="md:flex gap-[1.5rem]  w-full items-center justify-center text-left ">
      {contents.map((content, index) => {
        return (
          <ul
            className={`cursor-pointer pb-[0.5rem] md:pb-[0] text-lg font-semibold mb-[1rem] w-full  md:border-none border-b-1
          border-[rgba(61,61,61,0.3)]
          ${content === "Contact Us" ? "!border-none" : ""} `}
          >
            <motion.li
              key={index}
              style={
                !isMobile()
                  ? {
                      x: buttonMotionValues[index].x,
                      y: buttonMotionValues[index].y,
                    }
                  : {}
              }
              onTouchMove={(e) => {
                handleTouchMove(e, index);
              }}
              onTouchEnd={() => {
                handleTouchEnd(index);
              }}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={() => handleMouseLeave(index)}
              className={`
              ${content === "Home" ? "md:hidden block " : ""}
              ${
                content === "Contact Us"
                  ? "bg-[#024866] text-white rounded-3xl w-1/2 sm:w-full text-center md:px-[1rem]  py-[0.5rem]  md:mt-[0] whitespace-nowrap "
                  : ""
              } `}
            >
              <a
                href={`#${content}`}
                onClick={() => {
                  handleClick(content);
                }}
                className="no-underline"
              >
                {content}
              </a>
            </motion.li>
          </ul>
        );
      })}
    </motion.button>
  );
};

export default Buttons;
