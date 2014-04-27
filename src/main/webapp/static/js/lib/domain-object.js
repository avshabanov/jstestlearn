/**
 * Declares base domain object.
 * Minimalistic backbone-alike definition of the domain objects without bells and whistles.
 * Oriented to REST API with "shortened" field names.
 *
 * @author Alexander Shabanov
 */

module(["model"], function (model) {

  function DomainObject(options) {
  }


  DomainObject.define = function DomainObject_define(domainNamespace, objectName, mapping) {
    var parameterMapping = mapping.parameters;

    // prepare keys
    var keys = [];
    for (var key in parameterMapping) {
      if (parameterMapping.hasOwnProperty(key)) {
        keys.push(key);
      }
    }

    var ctor = function (options) {
      options = options || {};
      var payload = options.payload || {};
      var optModel = options.model || {};
      for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        // initialize by payload name
        if (key in payload) {
          this[key] = payload[key];
        }
        // initialize by parameter name
        var parameterName = parameterMapping[key];
        if (parameterName in optModel) {
          this[key] = optModel[parameterName];
        }
      }
    }
    ctor.name = objectName;
    domainNamespace[objectName] = ctor;

    // initialize getters
    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];
      var parameterName = parameterMapping[key];

      // Create getter name, i.e. title => getTitle
      var getterName = "get" + parameterName.charAt(0).toUpperCase() + parameterName.substring(1);
      var getterFn = (function (key) {
        return function (options) {
          if (this.hasOwnProperty(key)) {
          return this[key];
          }

          if (options && typeof options.defaultValue != "undefined") {
            return options.defaultValue;
          }

          return undefined;
        };
      } (key));

      getterFn.name = getterName;
      ctor.prototype[getterName] = getterFn;
    }
  }

  //
  // Export
  //

  model.DomainObject = DomainObject;
});
