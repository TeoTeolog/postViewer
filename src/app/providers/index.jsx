import { withRouter } from "./with-router";
import { withStore } from "./with-store";
import { withStyle } from "./with-style";

export const withProviders = (component) =>
  withStore(withStyle(withRouter(component)));
