import { Input as InputAntd, InputProps } from 'antd';
import styled from 'styled-components';

const InputStyled = styled(InputAntd)`
    border: 1px solid #3ac5c9 !important;
    border-radius: 8px !important;
`;

export const Input = (props: InputProps) => <InputStyled { ...props } />;

export default Input;