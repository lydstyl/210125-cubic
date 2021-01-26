export function toFixed4(num: number): number {
  return parseFloat(num.toFixed(4))
}

export function area(length: number, width: number): number {
  return length * width
}

export function cubicFloorArea(length: number): number {
  return toFixed4(area(length, length))
}

export function cubicWallArea(length: number, height: number): number {
  return length * height * 4
}

export function rate(a: number, b: number): number {
  return toFixed4(a / b)
}

export function wallAreaRate(length: number): number {
  const wallArea = cubicWallArea(length, 2.2)
  const floorArea = cubicFloorArea(length)

  const wallAreaRate = rate(wallArea, floorArea)
  return toFixed4(wallAreaRate)
}
