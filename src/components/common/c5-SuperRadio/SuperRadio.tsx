/*
import React, { ChangeEvent, InputHTMLAttributes, DetailedHTMLProps } from 'react';

import styles from './SuperRadio.module.css';

type DefaultRadioPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type SuperRadioPropsType = DefaultRadioPropsType & {
  options?: any[];
  onChangeOption?: (option: any) => void;
};

const SuperRadio: React.FC<SuperRadioPropsType> = ({
  type,
  name,
  options,
  value,
  onChange,
  onChangeOption,
  className,
  ...restProps
}) => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>): void => {
    onChange && onChange(e);
    onChangeOption && onChangeOption(e.currentTarget.value);
  };

  const finalRadioClassName = styles.radio + (className ? ` ${className}` : '');

  const mappedOptions: any[] = options
    ? options.map((o, i) => (
        <label key={o} htmlFor="radio">
          <input
            type="radio"
            name={name}
            checked={o === value}
            value={o}
            onChange={onChangeCallback}
            className={finalRadioClassName}
            {...restProps}
          />
          {o}
        </label>
      ))
    : [];

  return <>{mappedOptions}</>;
};

export default SuperRadio;
*/

export {};
