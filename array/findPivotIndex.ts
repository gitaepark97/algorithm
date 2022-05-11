export function findPivotIndex(nums: number[]): number {
  const sum: number = nums.reduce((preSum, value) => preSum + value)
  let leftsum = 0
  let rightSum = sum
  let pastPivot = 0

  for (const value of nums) {
    rightSum -= value
    leftsum += pastPivot

    if (leftsum === rightSum) return nums.indexOf(value)

    pastPivot = value
  }

  return -1
}
