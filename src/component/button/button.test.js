import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { Button } from '.';
import '@testing-library/jest-dom/extend-expect'

describe('@Button', () => {
afterEach(cleanup);

  it('should render a button', () => {
    const { debug, container, ...all } = render(<Button/>);
    const button = container.firstChild;

    expect(button).toHaveTextContent('hi')
  })

  it('should receive a click event', () => {
    const onClick = jest.fn();
    const { getByTestId } = render(<Button onClick={onClick}/>);
    const button = getByTestId('nice-button');
    fireEvent.click(button)
    expect(onClick).toHaveBeenCalled();
  })
})

