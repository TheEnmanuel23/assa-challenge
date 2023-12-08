import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { GoBackButton } from "../src/components/go-back-button";

test("should render a link with the label Regresar", () => {
  render(<GoBackButton />);
  const link = screen.getByRole("link");
  expect(link).toBeInTheDocument();
  expect(link).toHaveTextContent(/^Regresar$/);
});
