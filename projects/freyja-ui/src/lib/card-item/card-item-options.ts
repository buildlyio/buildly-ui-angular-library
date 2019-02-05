export interface CardItemOption {
  prop: string;
  label: string;
}

export interface CardItemAction {
  label: string;
  value: string;
}
export interface CardItemOptions {
  title?: CardItemOption;
  subText?: CardItemOption;
  subText2?: CardItemOption;
  caption?: CardItemOption;
  link?: CardItemOption;
  picture?: CardItemOption;
  date1?: CardItemOption;
  date2?: CardItemOption;
  details?: CardItemOption[];
  description?: CardItemOption;
  otherActions?: CardItemAction[];
  primaryAction?: CardItemAction;
  secondaryAction?: CardItemAction;
  belowMenuPrimaryAction?: CardItemAction;
  belowMenuOtherActions?: CardItemAction[];
}
