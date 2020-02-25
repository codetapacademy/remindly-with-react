import React from "react";
import ReactDOM from "react-dom";
import { renderToDom } from ".";

describe("index", () => {
  // Cache the original values
  const originalRender = ReactDOM.render;
  const originalSelector = global.document.querySelector;
  beforeEach(() => {
    // Mocking the functions
    ReactDOM.render = jest.fn();
    global.document.querySelector = jest.fn(() => true);
  });

  afterEach(() => {
    // Cleanup - after each test
    ReactDOM.render = originalRender;
    global.document.querySelector = originalSelector;
  });

  it("should call the render method", () => {
    // Test the renderToDom method
    renderToDom();
    // See if the mock is getting called
    expect(ReactDOM.render).toHaveBeenCalled();
    // See if the mock is getting called
    expect(global.document.querySelector).not.toHaveBeenCalled();
  });
});
