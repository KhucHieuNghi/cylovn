import { render } from '@testing-library/react';

import Button from '../Button';

describe('z|Button', () => {
  it('block', () => {

    const { container } = render(<Button
      type='primary' 
      block 
      onClick={ () => null } >
      Button
    </Button>);
    
    expect(container).toMatchSnapshot();

  });

  it('loading', () => {

    const { container } = render(<Button
      type='primary' 
      block 
      loading
      onClick={ () => null } >
      Button
    </Button>);

    expect(container).toMatchSnapshot();

  });
});