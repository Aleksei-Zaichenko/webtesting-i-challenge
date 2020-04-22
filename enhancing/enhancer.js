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
  return item.enhancement === 20 ? {...item} : {...item, enhancement: item.enhancement + 1};
}

function fail(item) {
  return { ...item };
}

function get(item) {
  return { ...item };
}
