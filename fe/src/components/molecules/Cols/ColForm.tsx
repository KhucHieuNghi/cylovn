import { Col, Row } from 'antd';

interface ColFormProps {
    name: string
    label: string
    value: string | number | JSX.Element
}

export const ColForm = ({ label, value, name }: ColFormProps) => (
  <Row className={ name }>
    <Col span={ 6 }>
      {label}
    </Col>
    <Col span={ 18 }>
      {value}
    </Col>
  </Row>
);