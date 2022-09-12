import { Input as InputAntd } from 'antd';
import { TextAreaProps } from 'antd/lib/input';
import styled from 'styled-components';

const { TextArea } = InputAntd;

const InputAreaStyled = styled(TextArea)`
    textarea{
        border-radius: 8px !important;
        border: 1px solid #3ac5c9 !important;
        &:hover, &:focus{
            border: 1px solid #3ac5c9 !important;
        }   
    }
`;

export const InputArea = (props: TextAreaProps) => <InputAreaStyled { ...props } />;

export default InputArea;