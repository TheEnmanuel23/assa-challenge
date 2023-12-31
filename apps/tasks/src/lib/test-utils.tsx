import React, { PropsWithChildren } from "react";
import { render } from "@testing-library/react";
import type { RenderOptions } from "@testing-library/react";
import { Provider } from "react-redux";

import { setupStore, type AppStore, type RootState } from "../lib/store";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: Partial<RootState>;
  store?: AppStore;
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

export function RouterProvider({ path }: { path: string }) {
  const router = routes.find((item) => item.path === path);

  return (
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path={router?.path} element={router?.element}></Route>
      </Routes>
    </MemoryRouter>
  );
}
