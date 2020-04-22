module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function repair(item) {
  return {
    name: item.name,
    enhancement: item.enhancement,
    durability: 100
  };
}
function succeed(item) {
  return { ...item };
}

function fail(item) {
  return { ...item };
}

function get(item) {
  return { ...item };
}
