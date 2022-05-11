export function moveZeros(nums: number[]): number[] {
  let wIdx: number = 0
  nums.map(value => {
    if (value !== 0) {
      ;[nums[wIdx], value] = [value, nums[wIdx]]
      wIdx++
    }
  })
  for (const value of nums) {
    value > wIdx && (nums[value] = 0)
  }

  return nums
}
