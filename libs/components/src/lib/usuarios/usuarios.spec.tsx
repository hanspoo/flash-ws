import { render } from '@testing-library/react';

import Usuarios from './usuarios';

describe('Usuarios', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Usuarios />);
    expect(baseElement).toBeTruthy();
  });
});
