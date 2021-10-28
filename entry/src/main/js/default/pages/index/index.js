export default {
    data: {
        expression: "1+1",
        result: "= 2",
        temp_result: 0,
        memory_data: 0,
    },
    onInit() {

    },
    input(e) {
        var data = e.target.attr.value;
        console.log(data);
    }
}
