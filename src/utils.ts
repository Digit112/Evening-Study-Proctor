export type DeepWritable<T> = {
  -readonly [P in keyof T]: T[P] extends object
    ? DeepWritable<T[P]> 
    : T[P];
};