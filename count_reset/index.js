const df = require("durable-functions");

module.exports = async function (context, req) {
    const client = df.getClient(context);
    const entityId = new df.EntityId("CounterState", "one");
    await client.signalEntity(entityId, "reset");

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: "Counter reset to 0."
    };
}