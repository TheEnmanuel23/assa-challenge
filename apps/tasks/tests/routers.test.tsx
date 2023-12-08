import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { RouterProvider, renderWithProviders } from "../src/lib/test-utils";

describe("validate routes by URL", () => {
  test("should render home page as initial page", () => {
    render(<RouterProvider path="/" />);
    expect(screen.getByText("Home")).toBeInTheDocument();
  });

  test("should render list page using the /list url", () => {
    renderWithProviders(<RouterProvider path="/list" />);
    expect(screen.getByText("List")).toBeInTheDocument();
  });

  test("should render tasks page using the /tasks url", () => {
    renderWithProviders(<RouterProvider path="/tasks" />);
    expect(screen.getByText("Tasks")).toBeInTheDocument();
  });
});
