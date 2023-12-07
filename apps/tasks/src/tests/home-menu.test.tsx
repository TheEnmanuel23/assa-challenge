import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Home from "../home";

describe("should render two links", () => {
  test("should render an link with Tasks as label", () => {
    render(<Home />);
    expect(screen.getByText("Tasks")).toBeInTheDocument();
  });
  test("should render an link with List as label", () => {
    render(<Home />);
    expect(screen.getByText("List")).toBeInTheDocument();
  });
  test("should render an link with Regresar as label", () => {
    render(<Home />);
    expect(screen.getByText("Regresar")).toBeInTheDocument();
  });
});
