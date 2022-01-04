import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

import styles from './SuperButton.module.css';

type DefaultButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type SuperButtonPropsType = DefaultButtonPropsType & {
  red?: boolean;
};

const SuperButton: React.FC<SuperButtonPropsType> = ({
  red,
  className,
  ...restProps
}) => {
  const finalClassName = `${styles.button} ${
    red ? styles.red : styles.default
  } ${className}`;

  return <button type="button" className={finalClassName} {...restProps} />;
};

export default SuperButton;
