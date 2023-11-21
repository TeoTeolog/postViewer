import { store } from "#app/store";
import { Suspense } from "react";
import { Provider } from "react-redux";

export const withStore = (component) => () =>
  (
    <Provider store={store}>
      <Suspense fallback={<div>Loading</div>}>{component()}</Suspense>
    </Provider>
  );
