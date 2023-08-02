export interface KeyValue {
  [key: string]: string;
}

export interface IPidList {
  pitchKp: number;
  pitchKi: number;
  pitchKd: number;
  rollKp: number;
  rollKi: number;
  rollKd: number;
  yawKp: number;
  yawKi: number;
  yawKd: number;
  maxAngle: number;
}
