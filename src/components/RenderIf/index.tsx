import { Fragment } from "react";

interface IRenderIfProprs {
  children: React.ReactElement[] | React.ReactElement;
  condition: boolean;
}

export const RenderIf = ({ children, condition }: IRenderIfProprs) => {
  return condition ? <Fragment>{children}</Fragment> : null;
};
