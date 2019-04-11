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
  let durability = item.durability
  let enhancement = item.enhancement
  if (enhancement < 15) durability -= 5
  else {
    if (enhancement > 16) enhancement--
    durability -= 10
  }
  if (durability < 0) durability = 0
  return { ...item, durability: durability, enhancement: enhancement }
}

function repair(item) {
  return { ...item, durability: 100 }
}

function get(item) {
  let name = item.name
  if (item.enhancement > 0) name = `[+${item.enhancement}] ${name}`
  return { ...item, name: name }
}
