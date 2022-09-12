import { Button as ButtonAntd } from 'antd';
import { ButtonProps } from 'antd/lib/button/button';
import styled from 'styled-components';

const ButtonStyled = styled(ButtonAntd)`
    &.ant-btn-primary{
        background: #3ac5c9;
        border-color: #3ac5c9;
        &:hover, &:active, &:focus{
            background: #3ac5c9;
            border-color: #3ac5c9;
        }
    }
    border-radius: 8px !important;
`;
    
export const Button = (props: ButtonProps) => <ButtonStyled { ...props } />;

export default Button;