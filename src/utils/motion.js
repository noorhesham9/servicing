export const textVariant = (delay) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.5,
        delay: delay,
      },
    },
  };
};

export const Logolanding = (delay) => {
  return {
    hidden: {
      y: -20,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.5,
        delay: delay,
      },
    },
  };
};
export const SwiperVariant = (delay) => {
  return {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.5,
        delay: delay,
      },
    },
  };
};
export const ButtonLAnding = (delay) => {
  return {
    hidden: {
      y: 50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.5,
        delay: delay,
      },
    },
    exit: {
      x: -50,
      opacity: 0,
      transition: {
        type: "spring",
        duration: 1.5,
        delay: delay,
      },
    },
  };
};

export const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const zoomIn = (delay, duration) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};
export const zoomInlanding1 = (delay) => {
  return {
    hidden: {
      borderRadius: "60% 40% 30% 70%/60% 30% 70%",
    },
    show: {
      borderRadius: "30% 60% 70% 40%/50% 60% 30%",
      transition: {
        type: "tween",
        delay: delay,
        duration: 2.5,
        ease: "easeOut",
      },
    },
  };
};
export const zoomInlanding2 = (delay) => {
  return {
    hidden: {
      borderRadius: "30% 60% 70% 40%/50% 60% 30%",
    },
    show: {
      borderRadius: "50% 70% 75% 45%/70% 65% 47%",
      transition: {
        type: "tween",
        delay: delay,
        duration: 2.5,
        ease: "easeOut",
      },
    },
  };
};
export const zoomInlanding3 = (delay) => {
  return {
    hidden: {
      borderRadius: "50% 70% 75% 45%/70% 65% 47%",
    },
    show: {
      borderRadius: "60% 40% 30% 70%/60% 30% 70%",
      transition: {
        type: "tween",
        delay: delay,
        duration: 2.5,
        ease: "easeOut",
      },
    },
  };
};

export const slideIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};
