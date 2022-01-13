var global = "";
function clr() {
    var ClearResult = document.getElementById('result');
    ClearResult.value = "0";
    var ddlTrigonometry = document.getElementById('ddlTrigonometry');
    var ddlFunctions = document.getElementById('ddlFunctions');
    ddlTrigonometry.value = "Trigonometry";
    ddlFunctions.value = "Functions";
}
function clr_MC() {
    var ResultData = document.getElementById('result');
    ResultData.value = "0";
    global = "";
    var ddlTrigonometry = document.getElementById('ddlTrigonometry');
    var ddlFunctions = document.getElementById('ddlFunctions');
    ddlTrigonometry.value = "Trigonometry";
    ddlFunctions.value = "Functions";
}
function display(val) {
    var DisplayResult = document.getElementById('result');
    if (DisplayResult.value == "0") {
        DisplayResult.value = "";
        DisplayResult.value = DisplayResult.value += val;
    }
    else
        DisplayResult.value = DisplayResult.value += val;
}
function solve() {
    var SolveResult = document.getElementById('result');
    var x = SolveResult.value;
    var y = eval(x);
    SolveResult.value = y;
    var ddlTrigonometry = document.getElementById('ddlTrigonometry');
    var ddlFunctions = document.getElementById('ddlFunctions');
    ddlTrigonometry.value = "Trigonometry";
    ddlFunctions.value = "Functions";
}
function backclear() {
    var ResultData = document.getElementById('result');
    var str = ResultData.value;
    str = str.substring(0, str.length - 1);
    ResultData.value = str;
}
function factorial() {
    var ResultData = document.getElementById('result');
    var num = parseInt(ResultData.value);
    ResultData.value = FindFactorial(num);
}
function FindFactorial(num) {
    if (num < 0)
        return -1;
    else if (num == 0)
        return 1;
    else {
        return (num * FindFactorial(num - 1));
    }
}
function sqrt() {
    var ResultData = document.getElementById('result');
    var num = parseFloat(ResultData.value);
    ResultData.value = Math.sqrt(num).toString();
}
function x_square() {
    var ResultData = document.getElementById('result');
    var num = parseFloat(ResultData.value);
    ResultData.value = Math.pow(num, 2).toString();
}
function onebyX() {
    var ResultData = document.getElementById('result');
    var num = parseFloat(ResultData.value);
    ResultData.value = (1 / num).toString();
}
function mod_x() {
    var ResultData = document.getElementById('result');
    var num = parseFloat(ResultData.value);
    ResultData.value = (Math.abs(num)).toString();
}
function PI_Value() {
    var ResultData = document.getElementById('result');
    if (ResultData.value == "0") {
        ResultData.value = "";
        ResultData.value += Math.PI;
    }
    else
        ResultData.value += Math.PI;
}
function Euler_Value() {
    var ResultData = document.getElementById('result');
    if (ResultData.value == "0") {
        ResultData.value = "";
        ResultData.value += Math.E;
    }
    else
        ResultData.value += Math.E;
}
function round_2decimal() {
    var ResultData = document.getElementById('result');
    var num = parseFloat(ResultData.value);
    ResultData.value = num.toFixed(2);
}
function DEG_To_FE() {
    var ResultData = document.getElementById('result');
    document.getElementById("changeLabel").innerHTML = "DEG";
    var num = ResultData.value;
    ResultData.value = Number(num).toString();
}
function FE_To_DEG() {
    var ResultData = document.getElementById('result');
    document.getElementById("changeLabel").innerHTML = "F-E";
    var num = parseFloat(ResultData.value);
    ResultData.value = num.toExponential().toString();
}
function MS_Click() {
    var ResultData = document.getElementById('result');
    global = ResultData.value;
    ResultData.value = "0";
}
function MR_Click() {
    var ResultData = document.getElementById('result');
    ResultData.value = global;
}
function M_Plus() {
    var ResultData = document.getElementById('result');
    global = (parseFloat(ResultData.value) + parseFloat(global)).toString();
    ResultData.value = "0";
}
function M_Minus() {
    var ResultData = document.getElementById('result');
    global = (parseFloat(ResultData.value) - parseFloat(global)).toString();
    ResultData.value = "0";
}
function ddlTrigonometry_Change() {
    var ResultData = document.getElementById('result');
    var ddlTrigonometry = document.getElementById('ddlTrigonometry');
    if (ddlTrigonometry.selectedIndex > 0) {
        var value = ddlTrigonometry.options[ddlTrigonometry.selectedIndex].value;
        ResultData.value = "Math." + value + "(";
    }
    else {
        ResultData.value = "";
    }
}
function ddlFunctions_Change() {
    var ResultData = document.getElementById('result');
    var ddlFunctions = document.getElementById('ddlFunctions');
    if (ddlFunctions.selectedIndex > 0) {
        var value = ddlFunctions.options[ddlFunctions.selectedIndex].value;
        ResultData.value = "Math." + value + "(";
    }
    else {
        ResultData.value = "";
    }
}
