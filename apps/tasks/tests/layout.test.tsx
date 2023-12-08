import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { Layout } from "../src/components/layout";
import { MemoryRouter } from "react-router-dom";

test("should render layout wrapper", () => {
  render(
    <MemoryRouter>
      <Layout title="Page Title">page content</Layout>
    </MemoryRouter>
  );
  expect(screen.getByRole("heading")).toBeInTheDocument();
  expect(screen.getByText("Page Title")).toBeInTheDocument();
  expect(screen.getByText("page content")).toBeInTheDocument();
});

test("should render layout wrapper with custom action", () => {
  render(
    <MemoryRouter>
      <Layout title="Page Title" action={<button>click</button>}>
        page content
      </Layout>
    </MemoryRouter>
  );
  expect(screen.getByRole("button")).toBeInTheDocument();
});
