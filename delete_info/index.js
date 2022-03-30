const { TableClient } = require("@azure/data-tables")
const connectionString = "DefaultEndpointsProtocol=https;AccountName=datafordevelop1;AccountKey=dHQmkgb7wohWzgQhApHoX2dpFODdUkQfp52cRSHpArZONNTnFX+uEpiLzPSOGzW0N06ydfifhLfwEMfMjfwEeg==;EndpointSuffix=core.windows.net";
const tableClient = TableClient.fromConnectionString(connectionString, "student");

module.exports = async function (context, req) {

    const id = (req.query.id || (req.body && req.body.id));
    let success = false;
    if (id) {
        tableClient.deleteEntity("stu_info", id);
        success = true;
    }

    let response = {
        status: success ? 200 : 404,
        message: success ? "successfully deleted" : "Id not found"
    }

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: response
    };
}