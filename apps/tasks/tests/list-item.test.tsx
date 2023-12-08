import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { ListItem } from "../src/pages/list/list-item";

test("should render list item", () => {
  render(<ListItem imageSrc="http:/fakeimage.png" label="fullName" />);
  expect(screen.getByText("fullName")).toBeInTheDocument();
});
