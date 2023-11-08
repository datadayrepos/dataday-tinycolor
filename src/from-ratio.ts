import type { RGBA } from './interfaces'
import { convertToPercentage } from './util'
import { TinyColor } from './index'

export interface RatioInput {
  r: number | string
  g: number | string
  b: number | string
  a?: number | string
}

/**
 * If input is an object, force 1 into "1.0" to handle ratios properly
 * String input requires "1.0" as input, so 1 will be treated as 1
 */
export function fromRatio(ratio: RatioInput, opts?: any): TinyColor {
  const newColor: Partial<RGBA> = {
    b: convertToPercentage(ratio.b),
    g: convertToPercentage(ratio.g),
    r: convertToPercentage(ratio.r),
  }
  if (ratio.a !== undefined)
    newColor.a = Number(ratio.a)

  return new TinyColor(newColor as RGBA, opts)
}

/** old random function */
export function legacyRandom(): TinyColor {
  return new TinyColor({
    b: Math.random(),
    g: Math.random(),
    r: Math.random(),
  })
}
