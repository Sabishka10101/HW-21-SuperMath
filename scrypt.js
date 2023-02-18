let promptOne = +prompt("X:");
let promptTwo = +prompt("Y:");
let promptThree = prompt("Znak:");
let object = { x: promptOne, y: promptTwo, z: promptThree };
let znakExam = /^[+-/*%]/.test(promptThree);
if (isNaN(promptOne)) {
    promptOne = +prompt("Помилка! Введіть числове значення X:");
}
if (isNaN(promptTwo)) {
    promptTwo = +prompt("Помилка! Введіть числове значення Y:");
}
if (znakExam === false) {
    promptThree = prompt(
        "Помилка! Введіть Znak:"
    );
}

class SuperMath {
    objectExam(obj) {
        switch (obj.z) {
            case "+":
                return obj.x + obj.y;
            case "-":
                return obj.x - obj.y;
            case "/":
                return obj.x / obj.y;
            case "*":
                return obj.x * obj.y;
            case "%":
                return obj.x % obj.y;
        }
    }
    input() {
        let conf = confirm("Everything is OK?");
        if (conf) {
            alert(result.objectExam(object));
        } else {
            promptOne = +prompt("Введіть числове значення X:");
            promptTwo = +prompt("Введіть числове значення Y:");
            promptThree = prompt("Введіть Znak:");
            conf = confirm("Everything is OK?");
            alert(result.objectExam(object));
        }
    }
}

const result = new SuperMath({});

result.objectExam(object);
result.input();