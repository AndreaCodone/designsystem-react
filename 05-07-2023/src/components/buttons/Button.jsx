import React, { useState, useEffect } from "react";

import styles from "./Button.module.scss";

import { FaArrowRight } from "react-icons/fa6";

const Button = (props) => {
  const { icon, iconLeft, label, outline, size, square } = props || null;

  // icon
  // icon position left o right
  // fill o outline

  // size
  // xl md sm

  // disable
  // rounded

  console.log(size);

  return (
    <div
      className={`
        ${styles.Button}
        ${iconLeft ? styles.iconLeft : ""}
        ${outline ? styles.outline : styles.fill}
        ${size ? styles[size] : styles.md}
        ${square ? styles.square : styles.default}
     `}
    >
      {label && !square && label}
      {icon && <FaArrowRight />}
    </div>
  );
};

export default Button;
