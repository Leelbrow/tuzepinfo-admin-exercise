import { cleanup, render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { afterEach, beforeEach, describe, expect, test } from "vitest";
import routes from "../routes";
import AppShell from "./AppShell";
import menuItems from "./menu-items";

describe(AppShell.name, () => {
  let router: ReturnType<typeof createMemoryRouter>;

  beforeEach(() => {
    router = createMemoryRouter(routes);
  });

  afterEach(() => {
    cleanup();
  });

  test("renders correctly", () => {
    const { container } = render(<RouterProvider router={router} />);
    expect(container).toMatchSnapshot();
  });

  describe("navigates correctly when a menu item is clicked", () => {
    menuItems.forEach((menuItem) => {
      test(menuItem.name, async () => {
        const user = userEvent.setup();
        render(<RouterProvider router={router} />);
        await user.click(screen.getByText(menuItem.name));
        expect(router.state.location.pathname).toBe(menuItem.url);
      });
    });
  });
});
