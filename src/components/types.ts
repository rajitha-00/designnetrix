import * as THREE from 'three';

// Type definitions for LiquidEther component
export interface LiquidEtherProps {
  colors?: string[];
  mouseForce?: number;
  cursorSize?: number;
  isViscous?: boolean;
  viscous?: number;
  iterationsViscous?: number;
  iterationsPoisson?: number;
  resolution?: number;
  isBounce?: boolean;
  autoDemo?: boolean;
  autoSpeed?: number;
  autoIntensity?: number;
  takeoverDuration?: number;
  autoResumeDelay?: number;
  autoRampDuration?: number;
}

export type UniformValue = number | number[] | THREE.Texture | THREE.Vector2 | THREE.Vector3 | THREE.Vector4;

export interface Uniforms {
  [key: string]: {
    value: UniformValue;
  };
}

export interface ShaderPassProps {
  vertexShader?: string;
  fragmentShader?: string;
  uniforms?: Uniforms;
}
