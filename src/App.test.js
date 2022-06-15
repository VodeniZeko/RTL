import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { replaceCamelCaseWithSpaces } from "./App";

test("button has correct initial setup and changes color on click", () => {
  render(<App />);

  //find an element "by role as recommnded" with a role button and and text "change to blue"
  const testedButton = screen.getByRole("button", { name: "Change to Blue" });

  //expect a background color to be 'red'
  expect(testedButton).toHaveStyle({ backgroundColor: "red" });

  //click the button
  fireEvent.click(testedButton);

  //expect the button background to be blue
  expect(testedButton).toHaveStyle({ backgroundColor: "blue" });

  //expect button text to change
  expect(testedButton.textContent).toBe("Change to Red");
});

test("initially button is enabled and when checkmark is checked it will become disabled", () => {
  render(<App />);

  // get the button and verify that button is enabled
  const testedButton = screen.getByRole("button", { name: "Change to Blue" });
  expect(testedButton).toBeEnabled();

  // get the checkbox and verify that checkbox is un-checked
  const testedCheckbox = screen.getByRole("checkbox", {
    name: "Disable Button",
  });
  expect(testedCheckbox).not.toBeChecked();

  //click the checkbox and expect the button to be disabled
  fireEvent.click(testedCheckbox);
  expect(testedButton).toBeDisabled();

  //click the checkbox again and expect the button to be enabled
  fireEvent.click(testedCheckbox);
  expect(testedButton).toBeEnabled();
});

describe("replace camelCase with spaces between texst", () => {
  test("work when no inner capital letters", () => {
    expect(replaceCamelCaseWithSpaces("red")).toBe("red");
  });
  test("work when only one inner capital letters", () => {
    expect(replaceCamelCaseWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });
  test("work when multiple inner capital letters", () => {
    expect(replaceCamelCaseWithSpaces("MediumVioletRed")).toBe(
      "Medium Violet Red"
    );
  });
});
