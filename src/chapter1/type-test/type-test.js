var daysInWeek = 7;
var uname = "ALENUI ROVIS";
var isRaining = false;
var today = new Date();
var months = ["January", "Feb", "March"];
var notDefined = undefined;
var nothing = null;
var add = function (x, y) { return x + y; };
var calculator = {
    add: add,
};
var everything = [
    daysInWeek,
    uname,
    isRaining,
    today,
    months,
    notDefined,
    nothing,
    add,
    calculator,
];
for (var _i = 0, everything_1 = everything; _i < everything_1.length; _i++) {
    var item = everything_1[_i];
    var type = typeof item;
    console.log(item, type);
}
