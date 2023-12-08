import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { RouterProvider, createMemoryRouter } from "react-router-dom";

import { routes } from "../routes";

describe("should render two links", () => {
  test("should render Tasks link", () => {
    const router = createMemoryRouter(routes);
    render(<RouterProvider router={router} />);

    expect(screen.getByText("Tasks")).toBeInTheDocument();
  });
  test("should render List link", () => {
    const router = createMemoryRouter(routes);
    render(<RouterProvider router={router} />);
    expect(screen.getByText("List")).toBeInTheDocument();
  });
});

describe("validate page transition", () => {
  test("should render tasks view after clicking on the Tasks link", async () => {
    const router = createMemoryRouter(routes);
    render(<RouterProvider router={router} />);

    expect(screen.getByRole("heading")).toHaveTextContent("Home");
    const tasksLink = screen.getByText("Tasks");
    fireEvent.click(tasksLink);
    expect(screen.getByRole("heading")).toHaveTextContent("Tasks");
  });

  test("should render list view after clicking on the List link", async () => {
    const router = createMemoryRouter(routes);
    render(<RouterProvider router={router} />);

    expect(screen.getByRole("heading")).toHaveTextContent("Home");
    const listLink = screen.getByText("List");
    fireEvent.click(listLink);
    expect(screen.getByRole("heading")).toHaveTextContent("List");
  });
});
