import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { routers } from "../routers";

function RouterProvider({ path }: { path: string }) {
  const router = routers.find((item) => item.path === path);

  return (
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path={router?.path} element={router?.element}></Route>
      </Routes>
    </MemoryRouter>
  );
}

describe("validate routes by URL", () => {
  test("should render home page as initial page", () => {
    render(<RouterProvider path="/" />);
    expect(screen.getByText("Home")).toBeInTheDocument();
  });

  test("should render list page using the /list url", () => {
    render(<RouterProvider path="/list" />);
    expect(screen.getByText("List")).toBeInTheDocument();
  });

  test("should render tasks page using the /tasks url", () => {
    render(<RouterProvider path="/tasks" />);
    expect(screen.getByText("Tasks")).toBeInTheDocument();
  });
});
