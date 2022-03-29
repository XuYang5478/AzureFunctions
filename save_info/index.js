module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    context.bindings.tableBinding = [];

    let data = (req.body || {});
    let stu = {};

    if (typeof data == "object") {
        stu = data;
    } else {
        let infos = String(data).split("&");
        infos.forEach((value) => {
            let info = value.split("=");
            stu[info[0]] = info[1];
        });
    }

    context.bindings.tableBinding.push({
        PartitionKey: "stu_info",
        RowKey: stu.id,
        Name: stu.name,
        Department: stu.department,
        Class: stu.class
    });
}