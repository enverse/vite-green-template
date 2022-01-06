import { render, screen, waitFor } from '@testing-library/preact';
import Home from '.';

describe('Counter', () => {
  test('should increment after "Increment" button is clicked', async () => {
    render(<Home text="lorem" />);

    await waitFor(() => {
      // .toBeInTheDocument() is an assertion that comes from jest-dom.
      // Otherwise you could use .toBeDefined().
      expect(screen.getByText('Hello Enverse lorem')).toBeInTheDocument();
    });
  });
});
