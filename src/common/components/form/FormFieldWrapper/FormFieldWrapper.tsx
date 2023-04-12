import * as React from 'react';

import Error from '../Error/Error';
import Label from '../Label/Label';

import { FormFieldWrapperProps } from './FormFieldWrapper.types';

import styles from './FormFieldWrapper.module.scss';

function FormFieldWrapper({ children, label, error }: React.PropsWithChildren<FormFieldWrapperProps>) {
  const labelId = React.useId();

  const childComponent = React.Children.only(children);

  const childComponentWithProps = React.Children.map(childComponent, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child as React.ReactElement<{ id: string }>, { id: labelId });
    }

    return null;
  });

  return (
    <div className={styles['form-field-wrapper']}>
      <Label htmlFor={labelId}>{label}</Label>
      {childComponentWithProps}
      {error && error.hasError && <Error>{error.message}</Error>}
    </div>
  );
}

export default FormFieldWrapper;
