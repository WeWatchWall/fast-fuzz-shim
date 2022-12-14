export type BuiltIn = 'boolean' | 'integer' | 'float' | 'date' | 'string';

/**
 * Decorator for properties with built-in types.
 * i.e.: boolean, integer, float, date, string.
 * @param type 
 * @param [dimension] Default = `0`.
 * @param [min] 
 * @param [max] 
 * @returns prop Type = `PropertyDecorator`.
 */
export const prop = function (
  _type: BuiltIn,
  _dimension = 0,
  _min?: number,
  _max?: number
): PropertyDecorator {

  return (
    _target: any,
    _key: string | symbol
  ) => {
    return;
  };
};

/**
 * Decorator for properties with imported types.
 * @param typeName 
 * @param [dimension] Default = `0`.
 */
export const propType = function (
  _typeName: string,
  _dimension = 0
): PropertyDecorator {

  return (
    _target: any,
    _key: string | symbol
  ) => {
    return;
  };
};

/**
 * Decorator to set properties to falsy values.
 * @returns prop Type = `PropertyDecorator`.
 */
export const skipProp: PropertyDecorator = (
  _target: any,
  _key: string | symbol
) => {
    return;
};

/**
 * Decorator for method arguments with built-in types.
 * i.e.: boolean, integer, float, date, string.
 * @param type 
 * @param [dimension] Default = `0`.
 * @param [min] 
 * @param [max] 
 * @returns arg Type = `ParameterDecorator`.
 */
export const arg = function (
  _type: BuiltIn,
  _dimension = 0,
  _min?: number,
  _max?: number
): ParameterDecorator {

  return (
    _target: any,
    _key: string | symbol,
    _index: number
  ) => {
    return;
  };
};

/**
 * Decorator for method arguments with imported types.
 * @param type 
 * @param [dimension] Default = `0`.
 */
export const argType = function (
  _type: string,
  _dimension = 0
): ParameterDecorator {

  return (
    _target: any,
    _key: string | symbol,
    _index: number
  ) => {
    return;
  };
};

/**
 * Decorator for skipping method arguments.
 * @returns arg Type = `ParameterDecorator`.
 */
export const skipArg: ParameterDecorator = (
  _target: any,
  _key: string | symbol,
  _index: number
) => {
  return;
};

/**
 * Decorator for methods.
 * @returns method Type = `MethodDecorator`.
 */
export const method: MethodDecorator = (
  _target: any,
  _key: string | symbol,
  descriptor: PropertyDescriptor
) => {
  return descriptor;
};

/**
 * Decorator for skipping methods in tests.
 * @returns method Type = `MethodDecorator`.
 */
export const skipMethod: MethodDecorator = (
  _target: any,
  _key: string | symbol,
  descriptor: PropertyDescriptor
) => {
  return descriptor;
};