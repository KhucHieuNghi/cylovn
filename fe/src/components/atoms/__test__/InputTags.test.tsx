import { render } from '@testing-library/react';

import { InputTags } from '../InputTags';

describe('z|InputTags', () => {

  it('Input', () => {

    const { container } = render(<InputTags
      options={['a', 'b']}
      value={[]}
      onSelect={() => null}
      onDeselect={() => null}
    />);

    expect(container).toMatchSnapshot();

  });
});