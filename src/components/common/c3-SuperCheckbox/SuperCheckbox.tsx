/*
import React, { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes } from 'react';

import styles from './SuperCheckbox.module.css';

type DefaultInputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type SuperCheckboxPropsType = DefaultInputPropsType & {
  onChangeChecked?: (checked: boolean) => void;
  spanClassName?: string;
  // checked: boolean
};

const SuperCheckbox: React.FC<SuperCheckboxPropsType> = ({
  type,
  spanClassName,
  onChange,
  onChangeChecked,
  className,
  children,
  ...restProps
}) => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>): void => {
    onChange && onChange(e);
    onChangeChecked && onChangeChecked(e.currentTarget.checked);
  };

  const finalInputClassName = `${styles.checkbox} ${className || ''}`;

  return (
    <label className={styles.label} htmlFor="checkbox">
      <input
        id="checkbox"
        type="checkbox"
        onChange={onChangeCallback}
        className={finalInputClassName}
        {...restProps}
      />
      {children && <span className={styles.spanClassName}>{children}</span>}
    </label>
  );
};

export default SuperCheckbox;
*/

export {};
