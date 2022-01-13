var global = ""
function clr()
{
    let ClearResult = document.getElementById('result') as HTMLInputElement;
    ClearResult.value = "0";
    let ddlTrigonometry = document.getElementById('ddlTrigonometry') as HTMLInputElement;
    let ddlFunctions = document.getElementById('ddlFunctions') as HTMLInputElement;
    ddlTrigonometry.value = "Trigonometry";
    ddlFunctions.value = "Functions";
}
function clr_MC()
{
    let ResultData = document.getElementById('result') as HTMLInputElement;
    ResultData.value = "0"
    global = ""
    let ddlTrigonometry = document.getElementById('ddlTrigonometry') as HTMLInputElement;
    let ddlFunctions = document.getElementById('ddlFunctions') as HTMLInputElement;
    ddlTrigonometry.value = "Trigonometry";
    ddlFunctions.value = "Functions";
}
function display(val)
{
    let DisplayResult = document.getElementById('result') as HTMLInputElement;
    if(DisplayResult.value == "0")
    {
        DisplayResult.value = ""
        DisplayResult.value = DisplayResult.value += val ;
    }
    else
        DisplayResult.value = DisplayResult.value += val ;
}

function solve()
{
    let SolveResult = document.getElementById('result') as HTMLInputElement;
    let x = SolveResult.value
    let y = eval(x)
    SolveResult.value = y
    let ddlTrigonometry = document.getElementById('ddlTrigonometry') as HTMLInputElement;
    let ddlFunctions = document.getElementById('ddlFunctions') as HTMLInputElement;
    ddlTrigonometry.value = "Trigonometry";
    ddlFunctions.value = "Functions";
}
function backclear()
{
    let ResultData = document.getElementById('result') as HTMLInputElement;
    let str = ResultData.value
    str = str.substring(0, str.length - 1);
    ResultData.value = str
}
function factorial()
{
    let ResultData = document.getElementById('result') as HTMLInputElement;
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
function sqrt()
{
    let ResultData = document.getElementById('result') as HTMLInputElement;
    var num = parseFloat(ResultData.value);
    ResultData.value = Math.sqrt(num).toString();
}
function x_square()
{
    let ResultData = document.getElementById('result') as HTMLInputElement;
    var num = parseFloat(ResultData.value);
    ResultData.value = Math.pow(num,2).toString();
}
function onebyX()
{
    let ResultData = document.getElementById('result') as HTMLInputElement;
    var num = parseFloat(ResultData.value);
    ResultData.value = (1/num).toString();
}
function mod_x()
{
    let ResultData = document.getElementById('result') as HTMLInputElement;
    var num = parseFloat(ResultData.value);
    ResultData.value = (Math.abs(num)).toString();
}
function PI_Value()
{
    let ResultData = document.getElementById('result') as HTMLInputElement;

    if(ResultData.value == "0")
    {
        ResultData.value = ""
        ResultData.value += Math.PI;
    }
    else
        ResultData.value += Math.PI;
}
function Euler_Value()
{
    let ResultData = document.getElementById('result') as HTMLInputElement;
    if(ResultData.value == "0")
    {
        ResultData.value = ""
        ResultData.value += Math.E;
    }
    else
    ResultData.value += Math.E;
}
function round_2decimal()
{
    let ResultData = document.getElementById('result') as HTMLInputElement;
    var num = parseFloat(ResultData.value);
    ResultData.value = num.toFixed(2);
}
function DEG_To_FE()
{
    let ResultData = document.getElementById('result') as HTMLInputElement;
    document.getElementById("changeLabel").innerHTML = "DEG";
    var num = ResultData.value
    ResultData.value = Number(num).toString()
}
function FE_To_DEG()
{
    let ResultData = document.getElementById('result') as HTMLInputElement;
    document.getElementById("changeLabel").innerHTML = "F-E";
    var num = parseFloat(ResultData.value);
    ResultData.value = num.toExponential().toString();
}
function MS_Click()
{
    let ResultData = document.getElementById('result') as HTMLInputElement;
    global = ResultData.value;
    ResultData.value = "0"
}
function MR_Click()
{
    let ResultData = document.getElementById('result') as HTMLInputElement;
    ResultData.value = global
}
function M_Plus()
{
    let ResultData = document.getElementById('result') as HTMLInputElement;
    global =  (parseFloat(ResultData.value) +  parseFloat(global)).toString()
    ResultData.value = "0" 
}
function M_Minus()
{
    let ResultData = document.getElementById('result') as HTMLInputElement;
    global =  (parseFloat(ResultData.value) -  parseFloat(global)).toString()
    ResultData.value = "0" 
}
function ddlTrigonometry_Change()
{
    let ResultData = document.getElementById('result') as HTMLInputElement;
    let ddlTrigonometry = document.getElementById('ddlTrigonometry') as HTMLSelectElement;
    if(ddlTrigonometry.selectedIndex > 0)
    {
        var value = ddlTrigonometry.options[ddlTrigonometry.selectedIndex].value;
        ResultData.value ="Math."+value+"("
    }
    else
    {
        ResultData.value = ""
    }
}
function ddlFunctions_Change()
{
    let ResultData = document.getElementById('result') as HTMLInputElement;
    let ddlFunctions = document.getElementById('ddlFunctions') as HTMLSelectElement;
    if(ddlFunctions.selectedIndex > 0)
    {
        var value = ddlFunctions.options[ddlFunctions.selectedIndex].value;
        ResultData.value ="Math."+value+"("
    }
    else
    {
        ResultData.value = ""
    }
}


