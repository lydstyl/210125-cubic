import { toFixed4, area, cubicFloorArea, cubicWallArea, rate, wallAreaRate } from '../app/index'

describe('Main index test suite', () => {
  it('fix four number 0.3333', () => {
    expect(toFixed4(0.33333)).toBe(0.3333)
  })

  it('fix four number 0.6667', () => {
    expect(toFixed4(0.66666)).toBe(0.6667)
  })

  it('calculate area', () => {
    expect(area(3, 4)).toBe(12)
  })

  it('calculate cubic floor area', () => {
    expect(cubicFloorArea(3)).toBe(9)
  })

  it('calculate cubic floor area with 4 numbers after .', () => {
    expect(cubicFloorArea(3.214550253)).toBe(10.3333)
  })

  it('calculate wall area', () => {
    expect(cubicWallArea(3, 2)).toBe(24)
  })

  it('calculate rate with 4 numbers after . 0.66666666 --> 0.6667', () => {
    expect(rate(2, 3)).toBe(0.6667)
  })

  it('calculate rate with 4 numbers after . 0.33333333 --> 0.3333', () => {
    expect(rate(1, 3)).toBe(0.3333)
  })

  it('calculate wall area rate', () => {
    expect(wallAreaRate(2)).toBe(4.4)
  })
})
