/** Get the value type(s) from an object. */
export type ValueOf<T> = T[keyof T];

export type OnClick<Element, ReturnType = void> = (
  event: React.MouseEvent<Element, MouseEvent>,
) => ReturnType;

/** 'any' type is valid in the case of a value for a key/value pair. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyObject<key extends string | number | symbol = string> = Record<key, any>;
