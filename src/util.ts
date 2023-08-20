export function encodeLayersToBitMask(layers: number[]): number {
  let bitMask = 0;

  for (const layer of layers) {
    bitMask = bitMask | (1 << layer);
  }

  return bitMask;
}

export function combineBitMasks(mask1: number, mask2: number): number {
  return (mask1 << 16) | mask2;
}
