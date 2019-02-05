export interface ModalAction {
  label: string;
  value: string;
}
export interface ModalContent {
  title?: string;
  text?: string;
  primaryAction?: ModalAction;
  dangerAction?: ModalAction;
  secondaryAction?: ModalAction;
}
