import React from 'react';

export enum TestComponentVariants {
  primary = 'primary',
  secondary = 'secondary',
};

export type onTestComponentClickEvent = {
  action: string
};
export type onTestComponentClick = (e: onTestComponentClickEvent) => void | undefined;

export type onTestComponentChangeEvent = {
  value: string
};
export type onTestComponentChange = (e: onTestComponentChangeEvent) => void | undefined;

export interface TestComponentProps {
  id?: string
  label?: string
  variant?: TestComponentVariants
  value?: string
  onClick?: onTestComponentClick
  onChange?: onTestComponentChange
};
const TestComponentDefaultProps = {
  id: null,
  label: null,
  variant: TestComponentVariants.primary,
  value: null,
  onClick: function() {},
  onChange: function() {},
};
export const TestComponent = (props: TestComponentProps) => {
  const { id, label, value, variant, onClick, onChange } = props;
  const handleClick = (event: React.MouseEvent) => {
    if (typeof onClick === 'function') {
      onClick({action: 'clicked'});
    }
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (typeof onChange === 'function') {
      onChange({value: event.currentTarget.value});
    }
  };
  const rootClass = ['root', variant].join(' ');
  return (
    <div className={rootClass}>
      <label htmlFor={id}>{label}:</label>
      <input id={id} autoComplete={'off'} data-testid={'input'} value={value} onChange={handleChange} />
      <div><button onClick={handleClick}>Click</button></div>
    </div>
  );
};
TestComponent.defaultProps = TestComponentDefaultProps;

export default TestComponent;
