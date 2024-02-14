// write unit tests for SignInForm component using jest
// and react testing library
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SignInForm from "../components/SignInForm";

test("should render SignInForm component", () => {
  render(<SignInForm />);
  const formElement = screen.getByTestId("form");
  expect(formElement).toBeInTheDocument();
});

test("should display error message when input fields are empty", () => {
  render(<SignInForm />);
  const submitButton = screen.getByRole("button", { name: /submit/i });
  userEvent.click(submitButton);
  const errorMessage = screen.getAllByTestId("error-message");
  expect(errorMessage).toHaveLength(2);
  expect(errorMessage[0]).toHaveTextContent("Email is required");
  expect(errorMessage[1]).toHaveTextContent("Password is required");
});

test("should display email validation error message", () => {
  render(<SignInForm />);
  const emailInput = screen.getByLabelText(/email/i);
  userEvent.type(emailInput, "test");
  const submitButton = screen.getByRole("button", { name: /submit/i });
  userEvent.click(submitButton);
  const errorMessage = screen.getByTestId("error-message");
  expect(errorMessage).toHaveTextContent("Email is invalid");
});

test("should display password validation error message", () => {
  render(<SignInForm />);
  const passwordInput = screen.getByLabelText(/password/i);
  userEvent.type(passwordInput, "pass");
  const submitButton = screen.getByRole("button", { name: /submit/i });
  userEvent.click(submitButton);
  const errorMessage = screen.getByTestId("error-message");
  expect(errorMessage).toHaveTextContent(
    "Password must be at least 6 characters"
  );
});

test("should submit form when input fields are valid", () => {
  render(<SignInForm />);
  const emailInput = screen.getByLabelText(/email/i);
  const passwordInput = screen.getByLabelText(/password/i);
});

// write a unit test case to test Sign up form
