/**
 * @vitest-environment jsdom
 */

import { describe, expect, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Header from "../components/Header/Header";
import { primary, secundary, tertiary } from "../components/ui/colors";
import Button from "../components/Button";
import { ButtonStyled } from "../components/ui/ButtonStyled";

describe("Header", () => {
  test("should be render the correct alt text", () => {
    render(<Header />);

    expect(screen.getByRole("img")).toHaveAttribute("alt", "Logo");
  });
  test("Heading should contain the correct text ", () => {
    render(<Header />);
    expect(screen.getByTestId("HeaderTitle")).toHaveTextContent(
      "Pistacchio Healthy Food"
    );
  });
  test("Should contain the button with the correct text", () => {
    render(<Header />);
    expect(screen.getByRole("button")).toHaveTextContent("Ver Catálogo");
  });

test('change color on hover',  () => {
    render(<Header />);
    expect(screen.getByRole("button"))

    userEvent.unhover(screen.getByRole("button"));

    expect(screen.getByRole("button")).toHaveStyle(`background-color: ${tertiary}`);
  });
});
