import Vue from "vue";
let strategies = {
  checkPhone: function(value, errMsg) {
    return {
      result: new RegExp(/^\d{11}$/).test(value),
      errMsg
    };
  },
  checkChinese: function(value, errMsg) {
    return {
      result: new RegExp("^[\u4e00-\u9fa5]{0,}$").test(value),
      errMsg
    };
  },
  checkNumber: function(value, errMsg) {
    return {
      result: !isNaN(Number(value)),
      errMsg
    };
  }
};

let Validator = function() {
  this.validatorFns = [];
  this.add = function(value, method, errMsg) {
    this.validatorFns.push(() => {
      return strategies[method](value, errMsg);
    });
  };
  this.check = function() {
    for (let i = 0; i < this.validatorFns.length; i++) {
      let valiFn = this.validatorFns[i];
      if (!valiFn().result) {
        Vue.prototype.$message.error(valiFn().errMsg);
        return false;
      }
    }
    return true;
  };
};

export default Validator;
