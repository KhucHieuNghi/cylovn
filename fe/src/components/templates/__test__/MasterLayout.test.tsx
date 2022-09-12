import { render } from '@testing-library/react';

import { MasterLayout } from '../MasterLayout';

describe('z|MasterLayout', () => {
  it('MasterLayout', () => {

    const { container } = render(<MasterLayout>
      Masterlayout
    </MasterLayout>);

    expect(container).toMatchSnapshot();

  });
});