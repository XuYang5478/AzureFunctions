const df = require("durable-functions");

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const client = df.getClient(context);
    const entityId = new df.EntityId("CounterState", "one");

    let counter = (await client.readEntityState(entityId)).entityState;

    let response = {
        id: context.invocationId,
        time: new Date().toLocaleString("zh-CN"),
        counter
    }

    await client.signalEntity(entityId, "add");

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: response
    };
}