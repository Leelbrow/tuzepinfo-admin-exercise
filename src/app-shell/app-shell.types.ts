import { ReactElement } from "react";

export interface MenuItemData {
  readonly name: string;
  readonly icon: ReactElement;
  readonly url: string;
}
