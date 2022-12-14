import React from 'react';
import { useField } from 'formik';
import _TextFieldMaterial from '@mui/material/TextField';
import MaterialUITextFieldProps from '@mui/material/TextField/TextFieldProps';
import styled from 'styled-components';
import { flexbox, FlexboxProps, space, SpaceProps } from 'styled-system';

type TextFieldProps = MaterialUITextFieldProps &
  FlexboxProps &
  SpaceProps & {
    name: string;
  };

export const TextFieldMaterial = styled(_TextFieldMaterial)<TextFieldProps>`
  ${flexbox}
  ${space}
`;

const TextField = (props: TextFieldProps) => {
  const { name, ...rest } = props;

  const [field] = useField(name);

  return <TextFieldMaterial {...field} {...rest} />;
};

export default TextField;
