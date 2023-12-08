import { screen } from "@testing-library/react";
import { describe, expect, test, beforeAll, afterAll, afterEach } from "vitest";
import { http, HttpResponse, delay } from "msw";
import { setupServer } from "msw/node";
import { RouterProvider, renderWithProviders } from "../src/lib/test-utils";

const dummyContacts = [
  { id: "1", name: "contact1", avatar: "http://avatar1.png" },
  { id: "2", name: "contact2", avatar: "http://avata2r.png" },
];

export const handlers = [
  http.get("https://6172cfe5110a740017222e2b.mockapi.io/elements", async () => {
    await delay(150);
    return HttpResponse.json(dummyContacts);
  }),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe("contact list", () => {
  test("fetches contacts", async () => {
    renderWithProviders(<RouterProvider path="/list" />);

    expect(screen.getByTestId("contacts-loading")).toBeInTheDocument();

    expect(await screen.findByText("contact1")).toBeInTheDocument();
    expect(screen.queryByTestId("contacts-loading")).not.toBeInTheDocument();
  });
});
