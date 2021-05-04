import React, { useRef } from "react";
import { Transition } from "react-transition-group";

const GrowTransition = ({
  children,
  transitionIn,
  duration,
  ...otherProps
}) => {
  const nodeRef = useRef();
  const defaultStyle = {
    transition: `transform ${duration}ms ease-in-out`,
    transform: "scale(0)",
    // transition: `opacity ${duration}ms ease-in-out`,
    // opacity: "0",
  };

  const transitionStyles = {
    entering: { transform: "scale(1)" },
    entered: { transform: "scale(1)" },
    exiting: { transform: "scale(0)" },
    exited: { transform: "scale(0)" },
  };
  return (
    <Transition
      nodeRef={nodeRef}
      in={transitionIn}
      timeout={duration}
      {...otherProps}
    >
      {(state) => (
        <div
          ref={nodeRef}
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          {children}
        </div>
      )}
    </Transition>
  );
};
GrowTransition.defaultProps = {
  transitionIn: false,
  duration: 0,
};

export default GrowTransition;
