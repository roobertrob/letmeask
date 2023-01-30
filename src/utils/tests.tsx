import { ReactElement } from 'react';
import { render as rtlRender, RenderOptions } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

const render = (ui: ReactElement, options?: RenderOptions) =>
  rtlRender(<BrowserRouter>{ui}</BrowserRouter>, options);

export * from '@testing-library/react';
export { render };
