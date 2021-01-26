import { sum } from '../app/index'

describe('Main index test suite', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
  })
})
