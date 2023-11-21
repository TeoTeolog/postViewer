import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

export const withRouter = (component) => () =>
  (
    <BrowserRouter>
      <Suspense fallback={<div>Loading</div>}>{component()}</Suspense>
    </BrowserRouter>
  );
