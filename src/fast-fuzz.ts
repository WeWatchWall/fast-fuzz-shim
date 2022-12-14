import 'reflect-metadata';
import { Results } from './result';

// Import the shims.
import { 
  arg as fuzzArgsShim,
  argType as fuzzArgTypeShim,
  method as fuzzMethodShim,
  prop as fuzzPropShim,
  propType as fuzzPropTypeShim,
  skipArg as fuzzSkipArgShim,
  skipMethod as fuzzSkipMethodShim,
  skipProp as fuzzSkipPropShim
} from './decorators';

/**
 * Fuzz the TS folder.
 * @param folder 
 * @param [maxTime] 
 * @param [methodPattern]
 * @param [classPattern]
 * @param [src]
 * @param [dist]
 * @param [verbose]
 * @param [force]
 * @param [resultsOut] 
 */
let fuzz = async function (
  _folder: string,
  _threads?: number,
  _maxTime = 1e4,
  _methodPattern?: string,
  _classPattern?: string,
  _filePattern?: string,
  _src?: string,
  _dist?: string,
  _verbose = false,
  _force = false,
  _resultsOut: Results[] = []
) {
  throw new Error('Not implemented');
};

// Store the shims so they can be overridden by the real implementation.
let fuzzArg = fuzzArgsShim;
let fuzzArgType = fuzzArgTypeShim;
let fuzzMethod = fuzzMethodShim;
let fuzzProp = fuzzPropShim;
let fuzzPropType = fuzzPropTypeShim;
let fuzzSkipArg = fuzzSkipArgShim;
let fuzzSkipMethod = fuzzSkipMethodShim;
let fuzzSkipProp = fuzzSkipPropShim;

try {
  // Try to load the real implementation, which fails in production.
  const {
    fuzz: fuzzDev,
    fuzzArg: fuzzArgDev,
    fuzzArgType: fuzzArgTypeDev,
    fuzzMethod: fuzzMethodDev,
    fuzzProp: fuzzPropDev,
    fuzzPropType: fuzzPropTypeDev,
    fuzzSkipArg: fuzzSkipArgDev,
    fuzzSkipMethod: fuzzSkipMethodDev,
    fuzzSkipProp: fuzzSkipPropDev
  } = require('fast-fuzz');

  // Override the shims with the real implementation.
  fuzz = fuzzDev;
  fuzzArg = fuzzArgDev;
  fuzzArgType = fuzzArgTypeDev;
  fuzzMethod = fuzzMethodDev;
  fuzzProp = fuzzPropDev;
  fuzzPropType = fuzzPropTypeDev;
  fuzzSkipArg = fuzzSkipArgDev;
  fuzzSkipMethod = fuzzSkipMethodDev;
  fuzzSkipProp = fuzzSkipPropDev;
} catch (error) {
  // The fast-fuzz package is not installed in production.
}

export { 
  fuzz,
  fuzzArg,
  fuzzArgType,
  fuzzMethod,
  fuzzProp,
  fuzzPropType,
  fuzzSkipArg,
  fuzzSkipMethod,
  fuzzSkipProp
}
