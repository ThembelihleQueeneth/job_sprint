import React from "react";
import styles from '../../styles/Button.module.css'

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

export const Button: React.FC<ButtonProps> = ({ children, onClick, type = "button" }) => {
  return (
    <button className={styles.detailsBtn} onClick={onClick} type={type}>
      {children}
    </button>
  );
};
