function allTheArgs(func, ...args) {
  // Your code here
  return function() {
    return func.apply(this, [...args, ...arguments]);
  };
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = allTheArgs;