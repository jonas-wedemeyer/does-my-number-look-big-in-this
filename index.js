// Determine if a number can be considered narcissitic

function doILookBigInThis(value) {
  const str = value + ''
  const strLen = str.length
  let total = 0
  for (let i = 0; i < str.length; i++) {
    total += Math.pow(str[i], strLen)
  }
  if (total === value) return true
  return false
}


module.exports = doILookBigInThis;