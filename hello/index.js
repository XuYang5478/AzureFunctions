/*
 * This function is not intended to be invoked directly. Instead it will be
 * triggered by an orchestrator function.
 * 
 * Before running this sample, please:
 * - create a Durable orchestration function
 * - create a Durable HTTP starter function
 * - run 'npm install durable-functions' from the wwwroot folder of your
 *   function app in Kudu
 */

module.exports = async function (context) {
    let str = `${context.bindings.item}`;
    if (str.length % 2 == 0) {
        return str.toUpperCase() + ' ';
    } else {
        return str.toLowerCase() + ' ';
    }
};