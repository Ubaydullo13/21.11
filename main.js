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


// 41

function bolinsin(x, y) {
  if(x % y === 0){
    return true
  }else{
    return false
  }
}

console.log(bolinsin(98, 7));
console.log(bolinsin(85, 4));

// 42

function raqam(str) {
  // Stringni raqamga o'girib qaytarish
  return Number(str);
}

console.log(raqam("6"));
console.log(raqam("1000"));  
console.log(raqam("12"));   


// 43 
function tortYuzi(a, b){
  if(a <= 0 || b <= 0){
    return -1
  }else{
    return a * b
  }
}

console.log(tortYuzi(3, 4));
console.log(tortYuzi(10, 11));
console.log(tortYuzi(-1, 5));
console.log(tortYuzi(0, 2));

// 44

function ismFam(ism, familiya) {
  return familiya + ', ' + ism;
}

console.log(ismFam("First", "Last"));
console.log(ismFam("John", "Doe"));
console.log(ismFam("Mary", "Jane"));

// 45

function bug(x) {
  // Agar x true bo'lsa "sad days", aks holda "it's a good day" qaytarilsin
  return x ? "sad days" : "it's a good day";
}

console.log(bug(true));
console.log(bug(false));

// 46

function tushirMassiv(arr, tushirishSoni) {
  // Massivni boshidan boshlab nechta elementni tushurish
  return arr.slice(tushirishSoni);
}
console.log(tushirMassiv([1, 2, 3], 1));
console.log(tushirMassiv([1, 2, 3], 2)); 
console.log(tushirMassiv([1, 2, 3], 5));
console.log(tushirMassiv([1, 2, 3], 0)); 

// 47

function ovozlar(ovozObj) {
  // Ovoz berib qo'llab quvvatlashlar sonini va ovoz berib qo'llamaganlar sonini qabul qilish
  const upvotes = ovozObj.upvotes || 0;
  const downvotes = ovozObj.downvotes || 0;
  
  return upvotes - downvotes;
}

console.log(ovozlar({ upvotes: 13, downvotes: 0 }));
console.log(ovozlar({ upvotes: 2, downvotes: 33 }));  
console.log(ovozlar({ upvotes: 132, downvotes: 132 }));

// 48

function negativ(son){
  // return 0 - son
  return -Math.abs(son);
}

console.log(negativ(4));
console.log(negativ(15));
console.log(negativ(-4));
console.log(negativ(0));

// 49

function almash(arr) {
  // Massiv elementlarini o'rnini almash
  const result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}

console.log(almash([1, 2, 3, 4]));
console.log(almash([9, 9, 2, 3, 4]));
console.log(almash([]));             

// 50

function kinogaKirish(yosh, otaOna) {
  // Yosh kamida 15 va ota-onasi bilan birgami yoki yo'qmi?
  return yosh >= 15 || otaOna;
}

console.log(kinogaKirish(14, true));
console.log(kinogaKirish(14, false));
console.log(kinogaKirish(16, false));
