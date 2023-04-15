import { render, screen } from '@testing-library/react';

import { FormFieldWrapper } from '@/common/components/context';
import { Input } from '@/common/components/form';

describe('FormFieldWrapper component', () => {
  it('should check if the input component is in the document', () => {
    render(
      <FormFieldWrapper label="First name">
        <Input id="name" name="name" type="text" />
      </FormFieldWrapper>,
    );

    const inputElement = screen.getByLabelText('First name');

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toBeValid();
  });

  it('should check that input is empty', () => {
    render(
      <FormFieldWrapper label="First name">
        <Input id="username" name="username" type="text" />
      </FormFieldWrapper>,
    );

    const inputElement = screen.getByLabelText('First name');

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toBeValid();
    expect(inputElement).toHaveValue('');
    expect(inputElement).not.toHaveValue('MarcosSantosDev');
  });

  it('should check that input is not empty', () => {
    render(
      <FormFieldWrapper label="First name">
        <Input
          id="username"
          name="username"
          type="text"
          defaultValue="MarcosSantosDev"
        />
      </FormFieldWrapper>,
    );

    const inputElement = screen.getByLabelText('First name');

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toBeValid();
    expect(inputElement).not.toHaveValue('');
    expect(inputElement).toHaveValue('MarcosSantosDev');
  });

  it('should check Input component in erro state', () => {
    render(
      <FormFieldWrapper
        label="Email"
        error={{
          hasError: true,
          message: 'Email is invalid!',
        }}
      >
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="marcossantosdev@example.com"
        />
      </FormFieldWrapper>,
    );

    const inputElement = screen.getByLabelText('Email');

    expect(inputElement).toBeInvalid();
    expect(inputElement).toHaveErrorMessage('Email is invalid!');
    expect(inputElement).not.toHaveErrorMessage('Pikachu!');
  });
});
