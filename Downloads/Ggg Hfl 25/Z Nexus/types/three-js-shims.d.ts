declare module 'three';
declare module '@react-three/fiber';

declare namespace JSX {
  interface IntrinsicElements {
    // allow any webgl/three elements used in JSX without strict typing
    [elemName: string]: any;
  }
}
