import React from 'react'
import { render } from 'react-dom'
import { renderToDom } from '.'

describe('index', () => {
  const originalRender = ReactDOM.render
  const originalSelector = global.document.querySelector
  beforeEach(() => {
    ReactDOM.render = jest.fn()
    global.document.querySelector = jest.fn(() => true)
  })

  afterEach (() => {
    ReactDOM.render = originalRender
    global.document.querySelector = originalSelector
  })

  it('should call the render method', () => {
    renderToDom()
    expect(ReactDOM.render).toHaveBeenCalled();
    expect(global.document.querySelector).toHaveBeenCalled();
  })
})