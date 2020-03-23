import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Button } from './button.component'
import '@testing-library/jest-dom/extend-expect'

describe('#Button', () => {
  it('should render a button', () => {
    const {debug, container, ...all} = render(<Button />);
    // console.log(Object.keys(all));
    const button = container.firstChild;
    debug();
    expect(button).toHaveTextContent('Hohoho');
  })

  it('should receive a clickEvent', () => {
    const onClick = jest.fn()
    const { getByTestId } = render(<Button onClick={onClick}/>);
    const button = getByTestId('awesome-button');
    fireEvent.click(button)
    expect(button).toBeTruthy()
    expect(onClick).toHaveBeenCalled()
    fireEvent.click(button)
    expect(onClick).toHaveBeenCalledTimes(2)
  })
})
