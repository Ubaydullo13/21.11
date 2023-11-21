// 13

function stringQoshish(a) {
  let something = "Something";
  return something.concat(" ", a);
}

let result = stringQoshish("is better than nothing");

console.log(result);

result = stringQoshish("Bob Jane");

console.log(result);

//   18

function nameString(name) {
  return name + "Edabit";
}

let natija = nameString("Mubashir");
console.log(natija);

natija = nameString("Matt");
console.log(natija);

// 26

function fun(num) {
  return num === 7;
}

console.log(fun(4)); // false
console.log(fun(9)); // false
console.log(fun(7)); // true

//   27

function checkEquality(x, y) {
  // Agar 2 qiymat ma'lumot turi jihatidan teng bo'lsa rost qiymat qaytarilsin
  if (x === y) {
    return true;
  } else {
    // Aks holda yolg'on qiymat qaytarilsin
    return false;
  }
}

console.log(checkEquality(1, true)); // false
console.log(checkEquality(0, "0")); // false
console.log(checkEquality(1, 1)); //true

//   28

function booleanToString(bool) {
  return bool.toString();
}

console.log(booleanToString(true));
console.log(booleanToString(false));

//   29

const arrowFunc = (value) => value;

console.log(arrowFunc(3));
console.log(arrowFunc("3"));
console.log(arrowFunc(true));

// 30

function frameSoni(minut, frame) {
  return minut * 60 * frame;
}

console.log(frameSoni(1, 1));
console.log(frameSoni(10, 1));
console.log(frameSoni(10, 25));

//   31

function calc(str) {
  return eval(str);
}

console.log(calc("23+4"));
console.log(calc("45-15"));
console.log(calc("13+2-5*2"));
console.log(calc("49/7*2-3"));

// 32

function teng10(num1, num2) {
  if (num1 === 10 || num2 === 10 || num1 + num2 === 10) {
    return true;
  } else {
    return false;
  }
}

console.log(teng10(9, 10));
console.log(teng10(9, 9));
console.log(teng10(1, 9));

//   33
function litrMasofa(km) {
  if (km < 15) {
    return 100;
  } else {
    return km * 10;
  }
}

console.log(litrMasofa(15));
console.log(litrMasofa(23.5));
console.log(litrMasofa(3));

//   34

function fan(a, b) {
  return Math.max(a, b);
}
console.log(fan(-3, -7));
console.log(fan(-1, 0));
console.log(fan(1000, 400));

//   37

function boshStr(str) {
  return str.length === 0;
}

console.log(boshStr(""));
console.log(boshStr(" "));
console.log(boshStr("a"));

//   38

function bolinsin5(son) {
  return son % 5 === 0;
}

console.log(bolinsin5(5));
console.log(bolinsin5(-55));
console.log(bolinsin5(37));

//   39

function bolinsin100(son) {
  return son % 100 === 0;
}

console.log(bolinsin100(1));
console.log(bolinsin100(1000));
console.log(bolinsin100(100));

// 40

function uzunlik(str) {
  if (str === "") {
    return 0;
  } else {
    // Boshida bir belgi kamaytiring va qolganini qaytaring
    return 1 + uzunlik(str.slice(1));
  }
}

console.log(uzunlik("apple"));
console.log(uzunlik("make"));
console.log(uzunlik("a"));
console.log(uzunlik(""));
console.log(uzunlik(" "));
