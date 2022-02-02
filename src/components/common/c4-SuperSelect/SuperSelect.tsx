/*
import React, { SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent } from 'react';

import styles from './SuperSelect.module.css';

type DefaultSelectPropsType = DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>;

type SuperSelectPropsType = DefaultSelectPropsType & {
  options?: string[];
  onChangeOption?: (option: string) => void;
};

const SuperSelect: React.FC<SuperSelectPropsType> = ({
  options,
  className,
  onChange,
  onChangeOption,
  ...restProps
}) => {
  const mappedOptions = options
    ? options.map((o, i) => (
        <option key={o} value={o} className={styles.option}>
          {o}
        </option>
      ))
    : [];

  const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>): void => {
    onChange && onChange(e);
    onChangeOption && onChangeOption(e.currentTarget.value);
  };

  const finalSelectClassName = styles.select + (className ? ` ${className}` : '');

  return (
    <select onChange={onChangeCallback} className={finalSelectClassName} {...restProps}>
      {mappedOptions}
    </select>
  );
};

export default SuperSelect;
*/

export {};
