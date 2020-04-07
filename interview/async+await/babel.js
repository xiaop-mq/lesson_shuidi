function _asyncToGenerator(fn) { 
  return function () { 
    var self = this, args = arguments;
     return new Promise(function (resolve, reject) { 
       var gen = fn.apply(self, args); 
       function _next(value) { 
         asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); 
        } function _throw(err) { 
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); 
        } _next(undefined); }); }; }