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

const df = require("durable-functions")

module.exports = df.entity(function (context) {
    const currentValue = context.df.getState(() => 1);
    switch (context.df.operationName) {
        case "add":
            context.df.setState(currentValue + 1);
            break;
        case "get":
            context.df.return(currentValue);
            break;
        case "reset":
            context.df.setState(1);
            break;
    }
});