const invalidValueString = "Invalid value!!";

function isValid(oneLine) {
    reg = /([\d\?]+)\,([\d\?]+)\,([\+\-\*]),(([\d\?]+),([\d\?]+))?,([\d\?]+)/;

    return oneLine.match(reg);
}

function solveWormEatingCaluculatorForPlus(intermediate) {
    // intermediate.forEach(element)
    ope_num_1 = intermediate.operand1.slice(0,-1);
    ope_num_2 = intermediate.operand2.slice(0,-1);
    res_num = intermediate.result.slice(0,-1);
    if (
        !isSymbol(ope_num_1) &
        !isSymbol(ope_num_2) &
        !isSymbol(res_num)
    ) {
        
    }
    else if (
        isSymbol(ope_num_1) & 
        !isSymbol(ope_num_2) & 
        isSymbol(res_num)
    ) {
        alert("hi");
        if (res_num < ope_num_1) {
            tmp_res_num = "1" + res_num.toString;
            ope_num_2 = parseInt(tmp_res_num) - ope_num_1;
        }
        else {
            ope_num_2 = res_num - ope_num_1;
        }
    }
    alert(ope_num_1);
    alert(ope_num_2);
    alert(res_num);

    return undefined;
}

function solveWormEatingCaluculatorForMinus(intermediate) {

    if(
        intermediate.operand1.length === intermediate.operand2.length &&
        intermediate.operand2.length === intermediate.result.length &&
        intermediate.operand1.length === intermediate.operand1.length &&
        ! intermediate.result.contains("\?")
    ) {

        
        for (let i in intermediate.result.reverse()) {


        }
    }

    return undefined;
}

function solveWormEatingCaluculatorForMulti(intermediate) {
    return undefined;
}

function solveWormEatingCaluculator(intermediate) {
    if (intermediate.operator === "+") {
        return solveWormEatingCaluculatorForPlus(intermediate);
    } else if (intermediate.operator === "-") {
        return solveWormEatingCaluculatorForMinus(intermediate);
    } else if (intermediate.operator === "*") {
        return solveWormEatingCaluculatorForMulti(intermediate);
    }
    return invalidValueString;
}

function convert(oneLine) {
    let line = oneLine.split(",");

    let operator = line[2];
    if (operator === '*') {
        if (line.length !== 6) {
            return invalidValueString;
        }

        return {
            'operand1': line[0],
            'operand2': line[1],
            'operator': operator,
            'midresult1': line[3],
            'midresult2': line[4],
            'result': line[5]
        };
    } else if (operator === '+' || operator === '-') {
        if (line.length !== 4) {
            return invalidValueString;
        }

        return {
            'operand1': line[0],
            'operand2': line[1],
            'operator': operator,
            'result': line[3]
        };
    } else {
        return invalidValueString;
    }
    
}

function isSymbol(i) {
    return i == '?';
}

// この関数を実装してください。
const execute = (testData) => {

    if (testData == null || testData == undefined) {
        return invalidValueString
    }

    testData = testData.split("\n");

    var resultData = [];
    testData.forEach(function (oneLine) {
        if (!isValid(oneLine)) {
            resultData.push(invalidValueString)
        }

        var intermediate = convert(oneLine);
        if (intermediate === invalidValueString) {
            resultData.push(invalidValueString)
        }

        var result = solveWormEatingCaluculator(intermediate);

        resultData.push(result);
    })

    return resultData.join("\n");
}
