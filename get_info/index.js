const { TableClient } = require("@azure/data-tables");
const connectionString = "DefaultEndpointsProtocol=https;AccountName=datafordevelop1;AccountKey=dHQmkgb7wohWzgQhApHoX2dpFODdUkQfp52cRSHpArZONNTnFX+uEpiLzPSOGzW0N06ydfifhLfwEMfMjfwEeg==;EndpointSuffix=core.windows.net";
const tableClient = TableClient.fromConnectionString(connectionString, "student");

module.exports = async function (context, req) {
    const id = (req.query.id || (req.body && req.body.id));
    let data;

    if (id) {
        data = await tableClient.getEntity("stu_info", id);
    } else {
        let items = tableClient.listEntities();
        let all = [];
        for await (let item of items) {
            all.push(item);
        }
        data = all;
    }

    let response = {
        status: 200,
        message: "success",
        data
    }

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: response
    };
}