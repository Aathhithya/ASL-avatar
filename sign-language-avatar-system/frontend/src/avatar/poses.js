/**
 * 3D SKELETAL POSES & SIGN ANIMATION LIBRARY
 * 
 * Defines forward-kinematics joint rotation targets and keyframe sequences
 * for 3D Sign Language synthesis and fingerspelling.
 */

// Common Handshape Configurations
export const HAND_SHAPES = {
  REST: {
    thumb: [0.3, 0.1],
    index: [0.3, 0.2],
    middle: [0.35, 0.25],
    ring: [0.4, 0.3],
    pinky: [0.45, 0.35],
  },
  OPEN: {
    thumb: [0.0, 0.3],
    index: [0.0, 0.0],
    middle: [0.0, 0.0],
    ring: [0.0, 0.0],
    pinky: [0.0, 0.0],
  },
  FLAT: {
    thumb: [0.2, 0.0],
    index: [0.0, 0.0],
    middle: [0.0, 0.0],
    ring: [0.0, 0.0],
    pinky: [0.0, 0.0],
  },
  FIST: {
    thumb: [0.8, 0.1],
    index: [1.5, 1.4],
    middle: [1.5, 1.4],
    ring: [1.5, 1.4],
    pinky: [1.5, 1.4],
  },
  INDEX_POINT: {
    thumb: [0.8, 0.1],
    index: [0.0, 0.0],
    middle: [1.5, 1.4],
    ring: [1.5, 1.4],
    pinky: [1.5, 1.4],
  },
  V_SHAPE: {
    thumb: [0.8, 0.1],
    index: [0.0, 0.2],
    middle: [0.0, -0.2],
    ring: [1.5, 1.4],
    pinky: [1.5, 1.4],
  },
  W_SHAPE: {
    thumb: [0.9, 0.0],
    index: [0.0, 0.2],
    middle: [0.0, 0.0],
    ring: [0.0, -0.2],
    pinky: [1.5, 1.4],
  },
  THUMB_UP: {
    thumb: [-0.4, 0.3],
    index: [1.5, 1.4],
    middle: [1.5, 1.4],
    ring: [1.5, 1.4],
    pinky: [1.5, 1.4],
  },
  CUP: {
    thumb: [0.4, 0.3],
    index: [0.7, 0.6],
    middle: [0.7, 0.6],
    ring: [0.7, 0.6],
    pinky: [0.7, 0.6],
  },
  PINCH: {
    thumb: [0.7, 0.3],
    index: [0.9, 0.8],
    middle: [0.3, 0.1],
    ring: [0.3, 0.1],
    pinky: [0.3, 0.1],
  },
  L_SHAPE: {
    thumb: [-0.4, 0.8],
    index: [0.0, 0.0],
    middle: [1.5, 1.4],
    ring: [1.5, 1.4],
    pinky: [1.5, 1.4],
  },
  Y_SHAPE: {
    thumb: [-0.5, 0.7],
    index: [1.5, 1.4],
    middle: [1.5, 1.4],
    ring: [1.5, 1.4],
    pinky: [0.0, 0.5],
  },
  I_LOVE_YOU: {
    thumb: [-0.5, 0.6],
    index: [0.0, 0.0],
    middle: [1.5, 1.4],
    ring: [1.5, 1.4],
    pinky: [0.0, 0.2],
  },
};

// Default Resting Idle Pose
export const DEFAULT_IDLE_POSE = {
  head: { x: 0, y: Math.PI, z: 0 },
  neck: { x: 0, y: 0, z: 0 },
  spine: { x: 0, y: 0, z: 0 },
  chest: { x: 0, y: 0, z: 0 },
  leftShoulder: { x: 0, y: 0, z: -0.1 },
  leftArm: { x: 0.15, y: 0, z: -0.25 },
  leftForearm: { x: 0.4, y: -0.1, z: 0.3 },
  leftHand: { x: 0, y: 0, z: 0 },
  leftFingers: HAND_SHAPES.REST,
  rightShoulder: { x: 0, y: 0, z: 0.1 },
  rightArm: { x: 0.15, y: 0, z: 0.25 },
  rightForearm: { x: 0.4, y: 0.1, z: -0.3 },
  rightHand: { x: 0, y: 0, z: 0 },
  rightFingers: HAND_SHAPES.REST,
  expression: "neutral",
  mouthOpen: 0,
};

// Full A-Z Fingerspelling Dictionary
export const FINGERSPELL_POSES = {
  A: {
    rightArm: { x: 0.3, y: 0.1, z: 0.45 },
    rightForearm: { x: 1.4, y: 0.3, z: -0.6 },
    rightHand: { x: 0.1, y: -0.2, z: 0.1 },
    rightFingers: {
      thumb: [0.1, 0.6],
      index: [1.5, 1.4],
      middle: [1.5, 1.4],
      ring: [1.5, 1.4],
      pinky: [1.5, 1.4],
    },
  },
  B: {
    rightArm: { x: 0.3, y: 0.1, z: 0.45 },
    rightForearm: { x: 1.4, y: 0.3, z: -0.6 },
    rightHand: { x: 0.1, y: -0.2, z: 0.1 },
    rightFingers: {
      thumb: [1.1, -0.2],
      index: [0.0, 0.0],
      middle: [0.0, 0.0],
      ring: [0.0, 0.0],
      pinky: [0.0, 0.0],
    },
  },
  C: {
    rightArm: { x: 0.3, y: 0.1, z: 0.45 },
    rightForearm: { x: 1.3, y: 0.4, z: -0.5 },
    rightHand: { x: 0.0, y: -0.6, z: 0.2 },
    rightFingers: HAND_SHAPES.CUP,
  },
  D: {
    rightArm: { x: 0.3, y: 0.1, z: 0.45 },
    rightForearm: { x: 1.4, y: 0.3, z: -0.6 },
    rightHand: { x: 0.1, y: -0.2, z: 0.1 },
    rightFingers: {
      thumb: [0.8, 0.2],
      index: [0.0, 0.0],
      middle: [1.1, 1.0],
      ring: [1.2, 1.1],
      pinky: [1.3, 1.2],
    },
  },
  E: {
    rightArm: { x: 0.3, y: 0.1, z: 0.45 },
    rightForearm: { x: 1.4, y: 0.3, z: -0.6 },
    rightHand: { x: 0.1, y: -0.2, z: 0.1 },
    rightFingers: {
      thumb: [1.0, 0.0],
      index: [1.2, 1.1],
      middle: [1.2, 1.1],
      ring: [1.2, 1.1],
      pinky: [1.2, 1.1],
    },
  },
  F: {
    rightArm: { x: 0.3, y: 0.1, z: 0.45 },
    rightForearm: { x: 1.4, y: 0.3, z: -0.6 },
    rightHand: { x: 0.1, y: -0.2, z: 0.1 },
    rightFingers: HAND_SHAPES.PINCH,
  },
  G: {
    rightArm: { x: 0.4, y: 0.2, z: 0.4 },
    rightForearm: { x: 1.2, y: 0.6, z: -0.4 },
    rightHand: { x: 0.0, y: -1.2, z: 0.3 },
    rightFingers: {
      thumb: [0.1, 0.6],
      index: [0.0, 0.0],
      middle: [1.5, 1.4],
      ring: [1.5, 1.4],
      pinky: [1.5, 1.4],
    },
  },
  H: {
    rightArm: { x: 0.4, y: 0.2, z: 0.4 },
    rightForearm: { x: 1.2, y: 0.6, z: -0.4 },
    rightHand: { x: 0.0, y: -1.2, z: 0.3 },
    rightFingers: {
      thumb: [0.1, 0.6],
      index: [0.0, 0.0],
      middle: [0.0, 0.0],
      ring: [1.5, 1.4],
      pinky: [1.5, 1.4],
    },
  },
  I: {
    rightArm: { x: 0.3, y: 0.1, z: 0.45 },
    rightForearm: { x: 1.4, y: 0.3, z: -0.6 },
    rightHand: { x: 0.1, y: -0.2, z: 0.1 },
    rightFingers: {
      thumb: [0.9, 0.2],
      index: [1.5, 1.4],
      middle: [1.5, 1.4],
      ring: [1.5, 1.4],
      pinky: [0.0, 0.0],
    },
  },
  J: {
    rightArm: { x: 0.3, y: 0.1, z: 0.45 },
    rightForearm: { x: 1.4, y: 0.3, z: -0.6 },
    rightHand: { x: 0.4, y: -0.6, z: 0.4 },
    rightFingers: {
      thumb: [0.9, 0.2],
      index: [1.5, 1.4],
      middle: [1.5, 1.4],
      ring: [1.5, 1.4],
      pinky: [0.0, 0.0],
    },
  },
  K: {
    rightArm: { x: 0.3, y: 0.1, z: 0.45 },
    rightForearm: { x: 1.4, y: 0.3, z: -0.6 },
    rightHand: { x: 0.1, y: -0.2, z: 0.1 },
    rightFingers: {
      thumb: [0.1, 0.5],
      index: [0.0, 0.0],
      middle: [0.4, 0.2],
      ring: [1.5, 1.4],
      pinky: [1.5, 1.4],
    },
  },
  L: {
    rightArm: { x: 0.3, y: 0.1, z: 0.45 },
    rightForearm: { x: 1.4, y: 0.3, z: -0.6 },
    rightHand: { x: 0.1, y: -0.2, z: 0.1 },
    rightFingers: HAND_SHAPES.L_SHAPE,
  },
  M: {
    rightArm: { x: 0.3, y: 0.1, z: 0.45 },
    rightForearm: { x: 1.4, y: 0.3, z: -0.6 },
    rightHand: { x: 0.2, y: -0.3, z: 0.2 },
    rightFingers: {
      thumb: [0.9, 0.0],
      index: [1.4, 1.2],
      middle: [1.4, 1.2],
      ring: [1.4, 1.2],
      pinky: [1.5, 1.4],
    },
  },
  N: {
    rightArm: { x: 0.3, y: 0.1, z: 0.45 },
    rightForearm: { x: 1.4, y: 0.3, z: -0.6 },
    rightHand: { x: 0.2, y: -0.3, z: 0.2 },
    rightFingers: {
      thumb: [0.9, 0.0],
      index: [1.4, 1.2],
      middle: [1.4, 1.2],
      ring: [1.5, 1.4],
      pinky: [1.5, 1.4],
    },
  },
  O: {
    rightArm: { x: 0.3, y: 0.1, z: 0.45 },
    rightForearm: { x: 1.3, y: 0.4, z: -0.5 },
    rightHand: { x: 0.0, y: -0.5, z: 0.2 },
    rightFingers: {
      thumb: [0.8, 0.3],
      index: [0.9, 0.8],
      middle: [0.9, 0.8],
      ring: [0.9, 0.8],
      pinky: [0.9, 0.8],
    },
  },
  P: {
    rightArm: { x: 0.3, y: 0.2, z: 0.45 },
    rightForearm: { x: 1.1, y: 0.4, z: -0.4 },
    rightHand: { x: 0.5, y: -0.8, z: 0.3 },
    rightFingers: {
      thumb: [0.1, 0.5],
      index: [0.0, 0.0],
      middle: [0.4, 0.2],
      ring: [1.5, 1.4],
      pinky: [1.5, 1.4],
    },
  },
  Q: {
    rightArm: { x: 0.3, y: 0.2, z: 0.45 },
    rightForearm: { x: 1.1, y: 0.4, z: -0.4 },
    rightHand: { x: 0.6, y: -0.9, z: 0.3 },
    rightFingers: {
      thumb: [0.1, 0.6],
      index: [0.0, 0.0],
      middle: [1.5, 1.4],
      ring: [1.5, 1.4],
      pinky: [1.5, 1.4],
    },
  },
  R: {
    rightArm: { x: 0.3, y: 0.1, z: 0.45 },
    rightForearm: { x: 1.4, y: 0.3, z: -0.6 },
    rightHand: { x: 0.1, y: -0.2, z: 0.1 },
    rightFingers: {
      thumb: [0.9, 0.1],
      index: [0.0, 0.1],
      middle: [0.0, -0.3], // crossed over index
      ring: [1.5, 1.4],
      pinky: [1.5, 1.4],
    },
  },
  S: {
    rightArm: { x: 0.3, y: 0.1, z: 0.45 },
    rightForearm: { x: 1.4, y: 0.3, z: -0.6 },
    rightHand: { x: 0.1, y: -0.2, z: 0.1 },
    rightFingers: {
      thumb: [0.9, -0.1], // thumb folded over front of fist
      index: [1.5, 1.4],
      middle: [1.5, 1.4],
      ring: [1.5, 1.4],
      pinky: [1.5, 1.4],
    },
  },
  T: {
    rightArm: { x: 0.3, y: 0.1, z: 0.45 },
    rightForearm: { x: 1.4, y: 0.3, z: -0.6 },
    rightHand: { x: 0.1, y: -0.2, z: 0.1 },
    rightFingers: {
      thumb: [0.7, 0.2], // tucked under index
      index: [1.3, 1.2],
      middle: [1.5, 1.4],
      ring: [1.5, 1.4],
      pinky: [1.5, 1.4],
    },
  },
  U: {
    rightArm: { x: 0.3, y: 0.1, z: 0.45 },
    rightForearm: { x: 1.4, y: 0.3, z: -0.6 },
    rightHand: { x: 0.1, y: -0.2, z: 0.1 },
    rightFingers: {
      thumb: [0.9, 0.1],
      index: [0.0, 0.0],
      middle: [0.0, 0.0],
      ring: [1.5, 1.4],
      pinky: [1.5, 1.4],
    },
  },
  V: {
    rightArm: { x: 0.3, y: 0.1, z: 0.45 },
    rightForearm: { x: 1.4, y: 0.3, z: -0.6 },
    rightHand: { x: 0.1, y: -0.2, z: 0.1 },
    rightFingers: HAND_SHAPES.V_SHAPE,
  },
  W: {
    rightArm: { x: 0.3, y: 0.1, z: 0.45 },
    rightForearm: { x: 1.4, y: 0.3, z: -0.6 },
    rightHand: { x: 0.1, y: -0.2, z: 0.1 },
    rightFingers: HAND_SHAPES.W_SHAPE,
  },
  X: {
    rightArm: { x: 0.3, y: 0.1, z: 0.45 },
    rightForearm: { x: 1.4, y: 0.3, z: -0.6 },
    rightHand: { x: 0.1, y: -0.2, z: 0.1 },
    rightFingers: {
      thumb: [0.8, 0.1],
      index: [0.8, 0.9], // hooked index
      middle: [1.5, 1.4],
      ring: [1.5, 1.4],
      pinky: [1.5, 1.4],
    },
  },
  Y: {
    rightArm: { x: 0.3, y: 0.1, z: 0.45 },
    rightForearm: { x: 1.4, y: 0.3, z: -0.6 },
    rightHand: { x: 0.1, y: -0.2, z: 0.1 },
    rightFingers: HAND_SHAPES.Y_SHAPE,
  },
  Z: {
    rightArm: { x: 0.3, y: 0.1, z: 0.45 },
    rightForearm: { x: 1.4, y: 0.3, z: -0.6 },
    rightHand: { x: 0.2, y: -0.4, z: 0.2 },
    rightFingers: HAND_SHAPES.INDEX_POINT,
  },
};

// Core Vocabulary Keyframe Sequences
export const POSES = {
  // HELLO: Friendly wave from temple outward
  HELLO: [
    {
      progress: 0.0,
      head: { x: -0.05, y: 0.05, z: 0 },
      rightArm: { x: 0.6, y: 0.3, z: 0.8 },
      rightForearm: { x: 1.7, y: 0.4, z: -0.7 },
      rightHand: { x: 0.2, y: -0.3, z: 0.3 },
      rightFingers: HAND_SHAPES.FLAT,
      expression: "smile",
    },
    {
      progress: 0.5,
      head: { x: 0.0, y: 0.0, z: 0 },
      rightArm: { x: 0.7, y: 0.2, z: 0.95 },
      rightForearm: { x: 1.5, y: 0.2, z: -0.5 },
      rightHand: { x: 0.1, y: 0.2, z: -0.2 },
      rightFingers: HAND_SHAPES.OPEN,
      expression: "smile",
    },
    {
      progress: 1.0,
      head: { x: 0.02, y: -0.02, z: 0 },
      rightArm: { x: 0.6, y: 0.2, z: 0.85 },
      rightForearm: { x: 1.6, y: 0.3, z: -0.6 },
      rightHand: { x: 0.15, y: -0.2, z: 0.2 },
      rightFingers: HAND_SHAPES.OPEN,
      expression: "smile",
    },
  ],

  // THANK-YOU: Hand starts at chin/mouth and extends forward with gratitude
  "THANK-YOU": [
    {
      progress: 0.0,
      head: { x: -0.05, y: 0, z: 0 },
      rightArm: { x: 0.8, y: 0.1, z: 0.4 },
      rightForearm: { x: 1.9, y: 0.5, z: -0.7 },
      rightHand: { x: 0.2, y: -0.3, z: 0.1 },
      rightFingers: HAND_SHAPES.FLAT,
      expression: "smile",
    },
    {
      progress: 0.5,
      head: { x: 0.05, y: 0, z: 0 },
      rightArm: { x: 0.5, y: 0.0, z: 0.3 },
      rightForearm: { x: 0.8, y: 0.1, z: -0.2 },
      rightHand: { x: -0.2, y: 0.0, z: 0.0 },
      rightFingers: HAND_SHAPES.FLAT,
      expression: "smile",
    },
    {
      progress: 1.0,
      head: { x: 0.08, y: 0, z: 0 },
      rightArm: { x: 0.4, y: 0.0, z: 0.25 },
      rightForearm: { x: 0.5, y: 0.0, z: -0.1 },
      rightHand: { x: -0.3, y: 0.0, z: 0.0 },
      rightFingers: HAND_SHAPES.FLAT,
      expression: "smile",
    },
  ],

  // PLEASE: Circular motion of flat hand over chest
  PLEASE: [
    {
      progress: 0.0,
      head: { x: 0.05, y: 0, z: 0 },
      rightArm: { x: 0.5, y: -0.2, z: 0.4 },
      rightForearm: { x: 1.5, y: 0.7, z: -0.6 },
      rightHand: { x: 0.2, y: -0.5, z: 0.3 },
      rightFingers: HAND_SHAPES.FLAT,
      expression: "smile",
    },
    {
      progress: 0.5,
      head: { x: 0.05, y: 0, z: 0 },
      rightArm: { x: 0.6, y: -0.1, z: 0.3 },
      rightForearm: { x: 1.4, y: 0.8, z: -0.7 },
      rightHand: { x: 0.1, y: -0.6, z: 0.2 },
      rightFingers: HAND_SHAPES.FLAT,
      expression: "smile",
    },
    {
      progress: 1.0,
      head: { x: 0.05, y: 0, z: 0 },
      rightArm: { x: 0.5, y: -0.2, z: 0.4 },
      rightForearm: { x: 1.5, y: 0.7, z: -0.6 },
      rightHand: { x: 0.2, y: -0.5, z: 0.3 },
      rightFingers: HAND_SHAPES.FLAT,
      expression: "smile",
    },
  ],

  // YES: Fist nodding like a head
  YES: [
    {
      progress: 0.0,
      head: { x: 0.1, y: 0, z: 0 },
      rightArm: { x: 0.4, y: 0.1, z: 0.35 },
      rightForearm: { x: 1.3, y: 0.2, z: -0.4 },
      rightHand: { x: -0.3, y: 0, z: 0 },
      rightFingers: HAND_SHAPES.FIST,
      expression: "smile",
    },
    {
      progress: 0.5,
      head: { x: -0.05, y: 0, z: 0 },
      rightArm: { x: 0.4, y: 0.1, z: 0.35 },
      rightForearm: { x: 1.3, y: 0.2, z: -0.4 },
      rightHand: { x: 0.4, y: 0, z: 0 },
      rightFingers: HAND_SHAPES.FIST,
      expression: "smile",
    },
    {
      progress: 1.0,
      head: { x: 0.1, y: 0, z: 0 },
      rightArm: { x: 0.4, y: 0.1, z: 0.35 },
      rightForearm: { x: 1.3, y: 0.2, z: -0.4 },
      rightHand: { x: -0.3, y: 0, z: 0 },
      rightFingers: HAND_SHAPES.FIST,
      expression: "smile",
    },
  ],

  // NO: Index, middle, thumb snap shut with head shake
  NO: [
    {
      progress: 0.0,
      head: { x: 0, y: -0.15, z: 0 },
      rightArm: { x: 0.4, y: 0.2, z: 0.4 },
      rightForearm: { x: 1.4, y: 0.3, z: -0.5 },
      rightHand: { x: 0.1, y: -0.2, z: 0 },
      rightFingers: {
        thumb: [0.0, 0.4],
        index: [0.0, 0.0],
        middle: [0.0, 0.0],
        ring: [1.5, 1.4],
        pinky: [1.5, 1.4],
      },
      expression: "serious",
    },
    {
      progress: 0.5,
      head: { x: 0, y: 0.15, z: 0 },
      rightArm: { x: 0.4, y: 0.2, z: 0.4 },
      rightForearm: { x: 1.4, y: 0.3, z: -0.5 },
      rightHand: { x: 0.2, y: -0.2, z: 0 },
      rightFingers: {
        thumb: [0.8, 0.1],
        index: [1.2, 1.0],
        middle: [1.2, 1.0],
        ring: [1.5, 1.4],
        pinky: [1.5, 1.4],
      },
      expression: "serious",
    },
    {
      progress: 1.0,
      head: { x: 0, y: -0.1, z: 0 },
      rightArm: { x: 0.4, y: 0.2, z: 0.4 },
      rightForearm: { x: 1.4, y: 0.3, z: -0.5 },
      rightHand: { x: 0.2, y: -0.2, z: 0 },
      rightFingers: {
        thumb: [0.8, 0.1],
        index: [1.2, 1.0],
        middle: [1.2, 1.0],
        ring: [1.5, 1.4],
        pinky: [1.5, 1.4],
      },
      expression: "serious",
    },
  ],

  // HELP: Left flat hand supporting right thumbs-up fist rising together
  HELP: [
    {
      progress: 0.0,
      leftArm: { x: 0.3, y: 0.1, z: -0.3 },
      leftForearm: { x: 1.1, y: -0.4, z: 0.4 },
      leftHand: { x: -0.2, y: 0.2, z: 0 },
      leftFingers: HAND_SHAPES.FLAT,
      rightArm: { x: 0.3, y: -0.1, z: 0.3 },
      rightForearm: { x: 1.2, y: 0.4, z: -0.4 },
      rightHand: { x: 0.0, y: -0.2, z: 0 },
      rightFingers: HAND_SHAPES.THUMB_UP,
      expression: "focused",
    },
    {
      progress: 1.0,
      leftArm: { x: 0.5, y: 0.1, z: -0.3 },
      leftForearm: { x: 1.3, y: -0.4, z: 0.4 },
      leftHand: { x: -0.2, y: 0.2, z: 0 },
      leftFingers: HAND_SHAPES.FLAT,
      rightArm: { x: 0.5, y: -0.1, z: 0.3 },
      rightForearm: { x: 1.4, y: 0.4, z: -0.4 },
      rightHand: { x: 0.0, y: -0.2, z: 0 },
      rightFingers: HAND_SHAPES.THUMB_UP,
      expression: "focused",
    },
  ],

  // WHERE: Both hands open palms up swaying gently side to side with questioning tilt
  WHERE: [
    {
      progress: 0.0,
      head: { x: 0.05, y: 0.1, z: -0.1 },
      leftArm: { x: 0.35, y: -0.2, z: -0.4 },
      leftForearm: { x: 1.0, y: -0.3, z: 0.3 },
      leftHand: { x: -0.3, y: 0.4, z: 0 },
      leftFingers: HAND_SHAPES.OPEN,
      rightArm: { x: 0.35, y: 0.2, z: 0.4 },
      rightForearm: { x: 1.0, y: 0.3, z: -0.3 },
      rightHand: { x: -0.3, y: -0.4, z: 0 },
      rightFingers: HAND_SHAPES.OPEN,
      expression: "question",
    },
    {
      progress: 0.5,
      head: { x: 0.05, y: -0.1, z: 0.1 },
      leftArm: { x: 0.35, y: -0.1, z: -0.5 },
      leftForearm: { x: 1.0, y: -0.2, z: 0.4 },
      leftHand: { x: -0.3, y: 0.2, z: 0 },
      leftFingers: HAND_SHAPES.OPEN,
      rightArm: { x: 0.35, y: 0.1, z: 0.5 },
      rightForearm: { x: 1.0, y: 0.2, z: -0.4 },
      rightHand: { x: -0.3, y: -0.2, z: 0 },
      rightFingers: HAND_SHAPES.OPEN,
      expression: "question",
    },
    {
      progress: 1.0,
      head: { x: 0.05, y: 0.1, z: -0.1 },
      leftArm: { x: 0.35, y: -0.2, z: -0.4 },
      leftForearm: { x: 1.0, y: -0.3, z: 0.3 },
      leftHand: { x: -0.3, y: 0.4, z: 0 },
      leftFingers: HAND_SHAPES.OPEN,
      rightArm: { x: 0.35, y: 0.2, z: 0.4 },
      rightForearm: { x: 1.0, y: 0.3, z: -0.3 },
      rightHand: { x: -0.3, y: -0.4, z: 0 },
      rightFingers: HAND_SHAPES.OPEN,
      expression: "question",
    },
  ],

  // WHAT: Open hands slightly closer, shrugging inquiry
  WHAT: [
    {
      progress: 0.0,
      head: { x: -0.05, y: 0, z: 0.05 },
      leftArm: { x: 0.3, y: -0.1, z: -0.35 },
      leftForearm: { x: 1.1, y: -0.2, z: 0.2 },
      leftHand: { x: -0.2, y: 0.3, z: 0 },
      leftFingers: HAND_SHAPES.OPEN,
      rightArm: { x: 0.3, y: 0.1, z: 0.35 },
      rightForearm: { x: 1.1, y: 0.2, z: -0.2 },
      rightHand: { x: -0.2, y: -0.3, z: 0 },
      rightFingers: HAND_SHAPES.OPEN,
      expression: "question",
    },
    {
      progress: 0.5,
      head: { x: 0.05, y: 0, z: -0.05 },
      leftArm: { x: 0.32, y: -0.2, z: -0.4 },
      leftForearm: { x: 1.0, y: -0.3, z: 0.3 },
      leftHand: { x: -0.3, y: 0.4, z: 0 },
      leftFingers: HAND_SHAPES.OPEN,
      rightArm: { x: 0.32, y: 0.2, z: 0.4 },
      rightForearm: { x: 1.0, y: 0.3, z: -0.3 },
      rightHand: { x: -0.3, y: -0.4, z: 0 },
      rightFingers: HAND_SHAPES.OPEN,
      expression: "question",
    },
    {
      progress: 1.0,
      head: { x: -0.05, y: 0, z: 0.05 },
      leftArm: { x: 0.3, y: -0.1, z: -0.35 },
      leftForearm: { x: 1.1, y: -0.2, z: 0.2 },
      leftHand: { x: -0.2, y: 0.3, z: 0 },
      leftFingers: HAND_SHAPES.OPEN,
      rightArm: { x: 0.3, y: 0.1, z: 0.35 },
      rightForearm: { x: 1.1, y: 0.2, z: -0.2 },
      rightHand: { x: -0.2, y: -0.3, z: 0 },
      rightFingers: HAND_SHAPES.OPEN,
      expression: "question",
    },
  ],

  // WHO: Right index finger circling / wiggling near mouth
  WHO: [
    {
      progress: 0.0,
      head: { x: 0.05, y: 0.08, z: 0 },
      rightArm: { x: 0.7, y: 0.1, z: 0.35 },
      rightForearm: { x: 1.8, y: 0.5, z: -0.6 },
      rightHand: { x: 0.2, y: -0.3, z: 0.1 },
      rightFingers: {
        thumb: [0.6, 0.4],
        index: [0.0, 0.0],
        middle: [1.5, 1.4],
        ring: [1.5, 1.4],
        pinky: [1.5, 1.4],
      },
      expression: "question",
    },
    {
      progress: 0.5,
      head: { x: 0.05, y: 0.08, z: 0 },
      rightArm: { x: 0.7, y: 0.1, z: 0.35 },
      rightForearm: { x: 1.8, y: 0.5, z: -0.6 },
      rightHand: { x: 0.2, y: -0.3, z: 0.1 },
      rightFingers: {
        thumb: [0.6, 0.4],
        index: [0.8, 0.7],
        middle: [1.5, 1.4],
        ring: [1.5, 1.4],
        pinky: [1.5, 1.4],
      },
      expression: "question",
    },
    {
      progress: 1.0,
      head: { x: 0.05, y: 0.08, z: 0 },
      rightArm: { x: 0.7, y: 0.1, z: 0.35 },
      rightForearm: { x: 1.8, y: 0.5, z: -0.6 },
      rightHand: { x: 0.2, y: -0.3, z: 0.1 },
      rightFingers: {
        thumb: [0.6, 0.4],
        index: [0.0, 0.0],
        middle: [1.5, 1.4],
        ring: [1.5, 1.4],
        pinky: [1.5, 1.4],
      },
      expression: "question",
    },
  ],

  // NAME: H-handshape of right hand tapping twice over left H-handshape
  NAME: [
    {
      progress: 0.0,
      leftArm: { x: 0.3, y: 0.1, z: -0.25 },
      leftForearm: { x: 1.2, y: -0.5, z: 0.4 },
      leftHand: { x: 0.0, y: 0.5, z: 0 },
      leftFingers: {
        thumb: [0.8, 0.1],
        index: [0.0, 0.0],
        middle: [0.0, 0.0],
        ring: [1.5, 1.4],
        pinky: [1.5, 1.4],
      },
      rightArm: { x: 0.4, y: -0.1, z: 0.25 },
      rightForearm: { x: 1.4, y: 0.5, z: -0.5 },
      rightHand: { x: 0.2, y: -0.4, z: 0 },
      rightFingers: {
        thumb: [0.8, 0.1],
        index: [0.0, 0.0],
        middle: [0.0, 0.0],
        ring: [1.5, 1.4],
        pinky: [1.5, 1.4],
      },
      expression: "focused",
    },
    {
      progress: 0.4,
      rightForearm: { x: 1.1, y: 0.4, z: -0.4 },
    },
    {
      progress: 0.7,
      rightForearm: { x: 1.35, y: 0.5, z: -0.5 },
    },
    {
      progress: 1.0,
      rightForearm: { x: 1.1, y: 0.4, z: -0.4 },
    },
  ],

  // GO: Both index fingers point forward and arc smoothly away
  GO: [
    {
      progress: 0.0,
      leftArm: { x: 0.3, y: 0.0, z: -0.2 },
      leftForearm: { x: 1.4, y: -0.2, z: 0.2 },
      leftHand: { x: 0.2, y: 0.0, z: 0 },
      leftFingers: HAND_SHAPES.INDEX_POINT,
      rightArm: { x: 0.3, y: 0.0, z: 0.2 },
      rightForearm: { x: 1.4, y: 0.2, z: -0.2 },
      rightHand: { x: 0.2, y: 0.0, z: 0 },
      rightFingers: HAND_SHAPES.INDEX_POINT,
      expression: "focused",
    },
    {
      progress: 0.5,
      leftArm: { x: 0.6, y: 0.0, z: -0.2 },
      leftForearm: { x: 0.7, y: -0.1, z: 0.1 },
      leftHand: { x: -0.2, y: 0.0, z: 0 },
      rightArm: { x: 0.6, y: 0.0, z: 0.2 },
      rightForearm: { x: 0.7, y: 0.1, z: -0.1 },
      rightHand: { x: -0.2, y: 0.0, z: 0 },
      expression: "focused",
    },
    {
      progress: 1.0,
      leftArm: { x: 0.7, y: 0.0, z: -0.2 },
      leftForearm: { x: 0.3, y: 0.0, z: 0.0 },
      leftHand: { x: -0.4, y: 0.0, z: 0 },
      rightArm: { x: 0.7, y: 0.0, z: 0.2 },
      rightForearm: { x: 0.3, y: 0.0, z: 0.0 },
      rightHand: { x: -0.4, y: 0.0, z: 0 },
      expression: "focused",
    },
  ],

  // STOP: Right open hand chops down decisively on left open palm
  STOP: [
    {
      progress: 0.0,
      leftArm: { x: 0.3, y: 0.1, z: -0.3 },
      leftForearm: { x: 1.1, y: -0.4, z: 0.4 },
      leftHand: { x: -0.2, y: 0.3, z: 0 },
      leftFingers: HAND_SHAPES.FLAT,
      rightArm: { x: 0.7, y: 0.0, z: 0.4 },
      rightForearm: { x: 1.5, y: 0.3, z: -0.5 },
      rightHand: { x: 0.3, y: -0.6, z: 0.2 },
      rightFingers: HAND_SHAPES.FLAT,
      expression: "serious",
    },
    {
      progress: 0.7,
      leftArm: { x: 0.3, y: 0.1, z: -0.3 },
      leftForearm: { x: 1.1, y: -0.4, z: 0.4 },
      leftHand: { x: -0.2, y: 0.3, z: 0 },
      leftFingers: HAND_SHAPES.FLAT,
      rightArm: { x: 0.4, y: -0.1, z: 0.2 },
      rightForearm: { x: 1.0, y: 0.4, z: -0.3 },
      rightHand: { x: 0.0, y: -0.7, z: 0.2 },
      rightFingers: HAND_SHAPES.FLAT,
      expression: "serious",
    },
    {
      progress: 1.0,
      leftArm: { x: 0.3, y: 0.1, z: -0.3 },
      leftForearm: { x: 1.1, y: -0.4, z: 0.4 },
      leftHand: { x: -0.2, y: 0.3, z: 0 },
      leftFingers: HAND_SHAPES.FLAT,
      rightArm: { x: 0.4, y: -0.1, z: 0.2 },
      rightForearm: { x: 1.0, y: 0.4, z: -0.3 },
      rightHand: { x: 0.0, y: -0.7, z: 0.2 },
      rightFingers: HAND_SHAPES.FLAT,
      expression: "serious",
    },
  ],

  // DOCTOR: Right fingertips tap pulse inside left wrist
  DOCTOR: [
    {
      progress: 0.0,
      leftArm: { x: 0.3, y: 0.1, z: -0.3 },
      leftForearm: { x: 1.2, y: -0.5, z: 0.4 },
      leftHand: { x: -0.3, y: 0.3, z: 0 },
      leftFingers: HAND_SHAPES.FLAT,
      rightArm: { x: 0.4, y: -0.1, z: 0.3 },
      rightForearm: { x: 1.4, y: 0.5, z: -0.5 },
      rightHand: { x: 0.2, y: -0.4, z: 0 },
      rightFingers: {
        thumb: [0.7, 0.2],
        index: [0.7, 0.6],
        middle: [0.7, 0.6],
        ring: [1.5, 1.4],
        pinky: [1.5, 1.4],
      },
      expression: "focused",
    },
    {
      progress: 0.5,
      rightForearm: { x: 1.15, y: 0.45, z: -0.4 },
    },
    {
      progress: 1.0,
      rightForearm: { x: 1.3, y: 0.5, z: -0.5 },
    },
  ],

  // WATER: W-handshape tapping chin/lips twice
  WATER: [
    {
      progress: 0.0,
      head: { x: -0.05, y: 0, z: 0 },
      rightArm: { x: 0.7, y: 0.1, z: 0.35 },
      rightForearm: { x: 1.8, y: 0.5, z: -0.6 },
      rightHand: { x: 0.2, y: -0.3, z: 0.1 },
      rightFingers: HAND_SHAPES.W_SHAPE,
      expression: "smile",
    },
    {
      progress: 0.4,
      rightForearm: { x: 1.95, y: 0.55, z: -0.65 },
    },
    {
      progress: 0.7,
      rightForearm: { x: 1.75, y: 0.45, z: -0.55 },
    },
    {
      progress: 1.0,
      rightForearm: { x: 1.95, y: 0.55, z: -0.65 },
    },
  ],

  // EMERGENCY: E-handshape shaking side-to-side with urgency
  EMERGENCY: [
    {
      progress: 0.0,
      head: { x: 0.05, y: -0.05, z: 0 },
      rightArm: { x: 0.4, y: 0.1, z: 0.4 },
      rightForearm: { x: 1.4, y: 0.3, z: -0.5 },
      rightHand: { x: 0.1, y: -0.4, z: 0.1 },
      rightFingers: FINGERSPELL_POSES.E.rightFingers,
      expression: "serious",
    },
    {
      progress: 0.3,
      rightHand: { x: 0.1, y: 0.2, z: 0.1 },
    },
    {
      progress: 0.6,
      rightHand: { x: 0.1, y: -0.4, z: 0.1 },
    },
    {
      progress: 1.0,
      rightHand: { x: 0.1, y: 0.2, z: 0.1 },
    },
  ],

  // SORRY: Right fist rotating gently over chest with apologetic posture
  SORRY: [
    {
      progress: 0.0,
      head: { x: 0.1, y: 0, z: -0.05 },
      rightArm: { x: 0.5, y: -0.15, z: 0.35 },
      rightForearm: { x: 1.5, y: 0.7, z: -0.6 },
      rightHand: { x: 0.1, y: -0.5, z: 0.2 },
      rightFingers: HAND_SHAPES.FIST,
      expression: "serious",
    },
    {
      progress: 0.5,
      head: { x: 0.12, y: 0, z: -0.05 },
      rightArm: { x: 0.55, y: -0.1, z: 0.3 },
      rightForearm: { x: 1.4, y: 0.8, z: -0.7 },
      rightHand: { x: 0.0, y: -0.6, z: 0.1 },
      rightFingers: HAND_SHAPES.FIST,
      expression: "serious",
    },
    {
      progress: 1.0,
      head: { x: 0.1, y: 0, z: -0.05 },
      rightArm: { x: 0.5, y: -0.15, z: 0.35 },
      rightForearm: { x: 1.5, y: 0.7, z: -0.6 },
      rightHand: { x: 0.1, y: -0.5, z: 0.2 },
      rightFingers: HAND_SHAPES.FIST,
      expression: "serious",
    },
  ],

  // GOOD: Right hand touching chin and landing smoothly in left open palm
  GOOD: [
    {
      progress: 0.0,
      leftArm: { x: 0.2, y: 0.0, z: -0.25 },
      leftForearm: { x: 1.0, y: -0.4, z: 0.3 },
      leftHand: { x: -0.2, y: 0.3, z: 0 },
      leftFingers: HAND_SHAPES.FLAT,
      rightArm: { x: 0.8, y: 0.1, z: 0.35 },
      rightForearm: { x: 1.9, y: 0.5, z: -0.7 },
      rightHand: { x: 0.2, y: -0.3, z: 0.1 },
      rightFingers: HAND_SHAPES.FLAT,
      expression: "smile",
    },
    {
      progress: 1.0,
      leftArm: { x: 0.3, y: 0.1, z: -0.3 },
      leftForearm: { x: 1.1, y: -0.4, z: 0.4 },
      leftHand: { x: -0.2, y: 0.3, z: 0 },
      leftFingers: HAND_SHAPES.FLAT,
      rightArm: { x: 0.35, y: -0.1, z: 0.25 },
      rightForearm: { x: 1.1, y: 0.4, z: -0.4 },
      rightHand: { x: -0.1, y: -0.3, z: 0.1 },
      rightFingers: HAND_SHAPES.FLAT,
      expression: "smile",
    },
  ],

  // BAD: Right hand touching chin and flipping away downwards
  BAD: [
    {
      progress: 0.0,
      head: { x: 0.05, y: 0, z: 0 },
      rightArm: { x: 0.8, y: 0.1, z: 0.35 },
      rightForearm: { x: 1.9, y: 0.5, z: -0.7 },
      rightHand: { x: 0.2, y: -0.3, z: 0.1 },
      rightFingers: HAND_SHAPES.FLAT,
      expression: "serious",
    },
    {
      progress: 0.5,
      head: { x: 0.08, y: 0, z: 0 },
      rightArm: { x: 0.5, y: 0.1, z: 0.3 },
      rightForearm: { x: 1.0, y: 0.2, z: -0.3 },
      rightHand: { x: -0.2, y: -0.8, z: 0.5 }, // flipped down
      rightFingers: HAND_SHAPES.FLAT,
      expression: "serious",
    },
    {
      progress: 1.0,
      head: { x: 0.1, y: 0, z: 0 },
      rightArm: { x: 0.4, y: 0.1, z: 0.35 },
      rightForearm: { x: 0.8, y: 0.1, z: -0.2 },
      rightHand: { x: 0.5, y: -1.2, z: 0.3 },
      rightFingers: HAND_SHAPES.FLAT,
      expression: "serious",
    },
  ],
};

// Helper: Linear interpolation for joint rotation objects
export function lerpRotation(a, b, t) {
  if (!a && !b) return { x: 0, y: 0, z: 0 };
  if (!a) return { ...b };
  if (!b) return { ...a };
  return {
    x: a.x + (b.x - a.x) * t,
    y: a.y + (b.y - a.y) * t,
    z: a.z + (b.z - a.z) * t,
  };
}

// Helper: Interpolate finger joint curls
export function lerpFingers(a, b, t) {
  if (!a && !b) return HAND_SHAPES.REST;
  if (!a) return { ...b };
  if (!b) return { ...a };
  const res = {};
  for (const finger of ["thumb", "index", "middle", "ring", "pinky"]) {
    const fA = a[finger] || [0, 0];
    const fB = b[finger] || [0, 0];
    const out = [
      fA[0] + (fB[0] - fA[0]) * t,
      fA[1] + (fB[1] - fA[1]) * t, // was (fB[1] - fB[1]) -> second joint never animated
    ];
    if (fA[2] !== undefined || fB[2] !== undefined) {
      const sA = fA[2] !== undefined ? fA[2] : fB[2];
      const sB = fB[2] !== undefined ? fB[2] : fA[2];
      out.push(sA + (sB - sA) * t); // finger splay
    }
    res[finger] = out;
  }
  return res;
}
