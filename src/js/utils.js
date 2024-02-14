export function collides(r1, r2) {
  if (r1.y + r1.height <= r2.y) {
    return false
  } else if (r1.y >= r2.y + r2.height) {
    return false
  } else if (r1.x + r1.width <= r2.x) {
    return false
  } else if (r1.x >= r2.x + r2.width) {
    return false
  } else {
    return true
  }
}

export function makeArray2D(input) {
  let newArray = []
  for (let i = 0; i < input.length; i += 20) {
    newArray.push(input.slice(i, i + 20))
  }
  return newArray
}

export function transformToSeconds(input) {
  return ((Date.now() - input) / 1000).toFixed(1)
}
