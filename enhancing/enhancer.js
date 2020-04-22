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
  let newObj = {}

  if(item.enhancement < 15){
    newObj = {
      ...item,
      durability: item.durability - 5 
    }
  } else if(item.enhancement >= 15){
    newObj = {
      ...item,
      durability: item.durability - 10 
    }
    if(item.enhancement > 16){
      newObj = {
        name: item.name,
        durability: item.durability - 10, 
        enhancement: item.enhancement - 1 
      }
    }
  }

  return newObj;
}

function get(item) {
  return { ...item };
}
