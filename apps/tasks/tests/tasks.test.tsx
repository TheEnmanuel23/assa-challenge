import { fireEvent, screen, act } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { RouterProvider, renderWithProviders } from "../src/lib/test-utils";

describe("Tasks view", () => {
  test("should show a alert dialog after clicking the button", () => {
    renderWithProviders(<RouterProvider path="/tasks" />);
    const button = screen.getByRole("button");

    fireEvent.click(button);
    expect(screen.getByRole("alertdialog")).toBeInTheDocument();
  });

  test("should add and render a new task", async () => {
    renderWithProviders(<RouterProvider path="/tasks" />);

    const showAlertButton = screen.getByRole("button");
    fireEvent.click(showAlertButton);

    const input = screen.getByRole("textbox");
    act(() => {
      fireEvent.change(input, { target: { value: "task 1" } });
    });
    act(() => {
      fireEvent.click(screen.getByText("Confirm"));
    });

    expect(screen.getAllByRole("listitem").length).toBe(1);
  });
});
