//const mi_var=5;
const log4js = require('log4js');

const logger = log4js.getLogger();
logger.level = 'debug';

let x = 4;

logger.debug(`El valor de la variable es ${x}`);
logger.error(`El valor de la variable es ${x}`);
logger.info(`El valor de la variable es ${logger.isTraceEnabled()}`);
logger.warn(`El valor de la variable es ${x}`);
logger.trace(`El valor de la variable es ${x}`);
logger.fatal(`El valor de la variable es ${x}`);


function sumar(x, y){
    return x+y;
}

module.exports = sumar;