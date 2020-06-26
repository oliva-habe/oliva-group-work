const invalidValueString = "Invalid value!!";

function isValid(oneLine) {
    reg = /([\?\d]+)\,([\d\?]+)\,([\+\-\*])\,(([\d\?]+)\,([\d\?]+)\,)?([\d\?]+)/;

    let match = oneLine.match(reg);
    return match != null;
}

function solveWormEatingCaluculatorForPlus(intermediate) {
    // intermediate.forEach(element)
    ope_num_1 = intermediate.operand1.slice(-1);
    ope_num_2 = intermediate.operand2.slice(-1);
    res_num = intermediate.result.slice(-1);
    res_move_up_num = null;
    if (
        !isSymbol(ope_num_1) &&
        !isSymbol(ope_num_2) &&
        !isSymbol(res_num)
    ) {

    } else if (
        !isSymbol(ope_num_1) &&
        isSymbol(ope_num_2) &&
        !isSymbol(res_num)
    ) {
        if (res_num < ope_num_1) {
            tmp_res_num = "1" + String(res_num);
            ope_num_2 = parseInt(tmp_res_num, 10) - ope_num_1;
        } else {
            ope_num_2 = res_num - ope_num_1;
        }
    } else if (
        isSymbol(ope_num_1) &&
        !isSymbol(ope_num_2) &&
        !isSymbol(res_num)
    ) {
        if (res_num < ope_num_2) {
            tmp_res_num = "1" + String(res_num);
            ope_num_1 = parseInt(tmp_res_num, 10) - ope_num_2;
        } else {
            ope_num_1 = res_num - ope_num_2;
        }
    } else if (
        !isSymbol(ope_num_1) &&
        !isSymbol(ope_num_2) &&
        isSymbol(res_num)
    ) {
        tmp_res_num = parseInt(ope_num_1) + parseInt(ope_num_2);
        if (String(tmp_res_num).length >= 2) {
            res_num = String(tmp_res_num).slice(-1);
            res_move_up_num = String(tmp_res_num).slice(0, 1);
        } else {
            res_num = tmp_res_num;
        }
    }

    if (res_move_up_num) {
        res_num = String(res_move_up_num) + res_num;
    }

    res = [];
    res.push(ope_num_1);
    res.push(ope_num_2);
    res.push("+");
    res.push(res_num);

    return res;
}

function solveWormEatingCaluculatorForMinus(intermediate) {

    // maxLength = Math.max(intermediate.operand1.length, intermediate.operand2.length, intermediate.result.length);
    //
    // opl1Rev = intermediate.operand1.reverse();
    // opl2Rev = intermediate.operand2.reverse();
    // resRev = intermediate.result.reverse();
    //
    // for (var i = 0; i < maxLength; i++) {
    //     if(isSymbol(opl1Rev[i]) && isSymbol(opl2Rev[i]) && isSymbol(resRev[i])) {
    //         break;
    //     } else if (isSymbol(opl1Rev[i]) && isSymbol(opl2Rev[i]) && !isSymbol(resRev[i])) {
    //
    //     }
    // }

    return invalidValueString;
}

function solveWormEatingCaluculatorForMulti(intermediate) {
    return invalidValueString;
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

    if (testData === null || testData === undefined) {
        return invalidValueString
    }

    testData = testData.split("\n");

    var resultData = [];
    testData.forEach(function (oneLine) {
        var valid = isValid(oneLine);
        if (!valid) {
            resultData.push(invalidValueString);
            return;
        }

        var intermediate = convert(oneLine);
        if (intermediate === invalidValueString) {
            resultData.push(invalidValueString);
            return;
        }

        var result = solveWormEatingCaluculator(intermediate);

        console.log(oneLine + " " + result);
        resultData.push(result);
    })

    return resultData.join("\n");
}
