// Determine if a number can be considered narcissitic

function doILookBigInThis(value) {
  const number = String(value).split('').map(el => Number(el));
  const base = Number(number.length);

  const sum = number.map(el => Math.pow(el, base)).reduce((a,b) => a+b);
  if (value === sum) return true;
  return false;
}


module.exports = doILookBigInThis;