import { render } from '@testing-library/react';

import Input from '../Input';
import InputArea from '../InputArea';

describe('z|Input', () => {
  it('Input', () => {
    const { container } = render(<Input
      showCount 
      maxLength={500} 
      placeholder='Add description'
      value={''}
      onChange={() => null}
    />);

    expect(container).toMatchSnapshot();

  });
  it('InputArea', () => {

    const { container } = render(<InputArea
      showCount 
      maxLength={500} 
      placeholder='Add description'
      value={''}
      onChange={() => null}
      autoSize={{
        minRows: 5,
        maxRows: 20,
      }}
    />);

    expect(container).toMatchSnapshot();

  });
});