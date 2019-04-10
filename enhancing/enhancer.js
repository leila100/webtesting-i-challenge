module.exports = {
  succeed,
  fail,
  repair,
  get
}

function succeed(item) {
  let enhancement = item.enhancement
  if (enhancement < 20) enhancement++
  return { ...item, enhancement: enhancement }
}

function fail(item) {
  return { ...item }
}

function repair(item) {
  return { ...item, durability: 100 }
}

function get(item) {
  return { ...item }
}
