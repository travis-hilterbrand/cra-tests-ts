import React from 'react';

export const TestComponentsVariants = {
  primary: 'primary',
  secondary: 'secondary',
};

const TestComponentDefaultProps = {
  id: null,
  label: null,
  variant: 'primary',
  value: null,
  onClick: function() {},
  onChange: function() {},
};
export const TestComponent = (props) => {
  const { id, label, value, variant, onClick, onChange } = props;
  const handleClick = (e) => {
    if (typeof onClick === 'function') {
      onClick({action: 'clicked'});
    }
  };
  const handleChange = (e) => {
    if (typeof onChange === 'function') {
      onChange({value: e.currentTarget.value});
    }
  };
  const rootClass = ['root', variant].join(' ');
  return (
    <div className={rootClass}>
      <label htmlFor={id}>{label}:</label>
      <input id={id} autoComplete={'off'} role="input" value={value} onChange={handleChange} />
      <div><button onClick={handleClick}>Click</button></div>
    </div>
  );
};
TestComponent.defaultProps = TestComponentDefaultProps;

export default TestComponent;
