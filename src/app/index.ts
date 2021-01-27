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
  return toFixed4(length * height * 4)
}

export function rate(a: number, b: number): number {
  return toFixed4(a / b)
}

export function wallAreaRate(length: number): number {
  if (!length) {
    return 0
  }
  const wallArea = cubicWallArea(length, 2.2)
  const floorArea = cubicFloorArea(length)

  const wallAreaRate = rate(wallArea, floorArea)
  return toFixed4(wallAreaRate)
}

export function csv(lines: number, step: number): string {
  let csv = `LONGUEUR;SURFACE SOL;SURFACE MUT;RATIO MUR / SOL\n`

  let length = 0

  for (let i = 0; i < lines; i++) {
    csv += `${length};${cubicFloorArea(length)};${cubicWallArea(length, 2.2)};${toFixed4(
      wallAreaRate(length) * 100,
    )}%\n`

    length += step
  }

  return csv
}

console.log(csv(100, 1))
