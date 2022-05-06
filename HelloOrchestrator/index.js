/*
 * This function is not intended to be invoked directly. Instead it will be
 * triggered by an HTTP starter function.
 * 
 * Before running this sample, please:
 * - create a Durable activity function (default name is "Hello")
 * - create a Durable HTTP starter function
 * - run 'npm install durable-functions' from the wwwroot folder of your 
 *    function app in Kudu
 */

const df = require("durable-functions");

module.exports = df.orchestrator(function* (context) {
    // const outputs = [];

    let args = ["One", "Two", "Three", "Four", "Five"];
    let result = "";

    for (let arg of args) {
        result += yield context.df.callActivity("hello", result+arg);
    }
    
    // Replace "Hello" with the name of your Durable Activity Function.
    // outputs.push(yield context.df.callActivity("counter", count));
    // outputs.push(yield context.df.callActivity("counter", count));
    // outputs.push(yield context.df.callActivity("counter", count));

    // returns ["Hello Tokyo!", "Hello Seattle!", "Hello London!"]
    return result;
});