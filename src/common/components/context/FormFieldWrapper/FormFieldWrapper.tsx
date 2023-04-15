import * as React from 'react';

import { Error, Label } from '@/common/components/form';

import { FormFieldWrapperProps } from './FormFieldWrapper.types';

import styles from './FormFieldWrapper.module.scss';

type InputObjectCloneProps = {
  id: string;
  'aria-errormessage': string;
  'aria-invalid': boolean;
};

function FormFieldWrapper({
  children,
  label,
  error,
}: React.PropsWithChildren<FormFieldWrapperProps>) {
  const labelId = React.useId();
  const errorMessageId = React.useId();

  const childComponent = React.Children.only(children);

  const childComponentWithProps = React.Children.map(childComponent, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(
        child as React.ReactElement<InputObjectCloneProps>,
        {
          id: labelId,
          'aria-errormessage': errorMessageId,
          'aria-invalid': error?.hasError ?? false,
        },
      );
    }

    return null;
  });

  return (
    <div className={styles['form-field-wrapper']}>
      <Label htmlFor={labelId}>{label}</Label>
      {childComponentWithProps}
      <Error id={errorMessageId} showError={error?.hasError ?? false}>
        {error?.message}
      </Error>
    </div>
  );
}

export default FormFieldWrapper;
