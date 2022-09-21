import { render } from '@testing-library/react';

import ReactComps from './react-comps';

describe('ReactComps', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactComps />);
    expect(baseElement).toBeTruthy();
  });
});
