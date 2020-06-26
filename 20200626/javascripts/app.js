let invalidValueString = "Invalid value!!";

function isValid(oneLine) {
    return false;
}

function solveWormEatingCaluculator(intermediate) {
    return undefined;
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

// この関数を実装してください。
const execute = (testData) => {

    if (testData == null || testData == undefined) {
        return invalidValueString
    }

    testData = testData.split("\r\n");

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
