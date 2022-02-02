/*
import React, {
  ChangeEvent,
  DetailedHTMLProps,
  InputHTMLAttributes,
  KeyboardEvent,
} from 'react';

import styles from './SuperInputText.module.css';

type DefaultInputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type SuperInputTextPropsType = DefaultInputPropsType & {
  onChangeText?: (value: string) => void;
  onEnter?: () => void;
  error?: string;
  spanClassName?: string;
};

const SuperInputText: React.FC<SuperInputTextPropsType> = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  type,
  onChange,
  onChangeText,
  onKeyPress,
  onEnter,
  error,
  className,
  spanClassName,
  ...restProps
}) => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>): void => {
    onChange && onChange(e);
    onChangeText && onChangeText(e.currentTarget.value);
  };
  const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>): void => {
    onKeyPress && onKeyPress(e);
    onEnter && e.key === 'Enter' && onEnter();
  };

  const finalSpanClassName = `${styles.error} ${spanClassName || ''}`;

  const finalInputClassName = `${styles.input} ${
    error ? styles.errorInput : styles.superInput
  } ${className}`;

  return (
    <>
      <input
        type="text"
        onChange={onChangeCallback}
        onKeyPress={onKeyPressCallback}
        className={finalInputClassName}
        {...restProps}
      />

      {error && <span className={finalSpanClassName}>{error}</span>}
    </>
  );
};

export default SuperInputText;
*/
export {};
