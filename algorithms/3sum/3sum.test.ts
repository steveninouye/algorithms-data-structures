import threeSum from "./3sum";

describe('#threeSum', () => {
  it('should be defined', () => {
    expect(threeSum).toBeDefined()
  })

  it('should output an array', () => {
    expect(Array.isArray(threeSum([]))).toBe(true)
  })

  
})