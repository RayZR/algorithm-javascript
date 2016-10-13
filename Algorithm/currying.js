//javascript currying 
function curry(fn, n) {  
  var arity = n || fn.length;

  return function curried() {
      var args = toArray(arguments), 
          context = this;

      return args.length >= arity ?
          fn.apply(context, args) :
          function () {
              var rest = toArray(arguments);

              return curried.apply(context, args.concat(rest));
          };
  };
}