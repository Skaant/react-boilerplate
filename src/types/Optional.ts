export type Optional<T> = T | undefined;

export type OptionalNested<T> = {
  [P in keyof T]?: T[P];
};
