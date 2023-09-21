const boundFuncTimer = (obj, func, delay) => {
  setTimeout(function () {
    func.call(obj);
  }, delay);
};


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = boundFuncTimer;