

/////////////////// CHUPADA ELEMENTOS ////////////////


// CHUPADA TOTAL //
const targetGoal = document.getElementById("targetGoal");
const btnTot = document.getElementById("btnTot");
const goalText = document.getElementById("goal");

// CHUPADA DIAS Y SUS BOTONES //

const mondayInput = document.getElementById("monday");
const btnMon = document.getElementById("btnMon");

const tuesdayInput = document.getElementById("tuesday");
const btnTue = document.getElementById("btnTue");

const wednesdayInput = document.getElementById("wednesday");
const btnWed = document.getElementById("btnWed");

const thursdayInput = document.getElementById("thursday");
const btnThu = document.getElementById("btnThu");

const fridayInput = document.getElementById("friday");
const btnFri = document.getElementById("btnFri");

const saturdayInput = document.getElementById("saturday");
const btnSat = document.getElementById("btnSat");

const sundayInput = document.getElementById("sunday");
const btnSun = document.getElementById("btnSun");

//// CHUPADA AVERAGE TEXT ////

const averageDaily = document.getElementById("averageDaily");

//// CHUPADA DIAGNOSIS TEXT ////

const diagnosisText = document.getElementById("diagnosis");



///////////////// VARIABLES ///////////////////


// DIAS VARIABLES //
let sumMon = 0;
let sumTue = 0;
let sumWed = 0;
let sumThu = 0;
let sumFri = 0;
let sumSat = 0;
let sumSun = 0;

let sumTotal = 0;

let mathWeek = 0;

let targetValue = 0;

///// WEEK ARRAY /////

const weekArray = [];

// EVENT LISTENERS LOGIC DAYS //


// TARGET GOAL LISTENER //
btnTot.addEventListener("click", () => {
  targetValue = Number(targetGoal.value);
  if (targetValue !== 0) {
    goalText.innerText = `DAILY GOAL = ${targetValue} kCal`;
  } else {
    goalText.innerText = `DAILY GOAL = No input`;
  }
});

// DAILY INPUT LISTENERS //
btnMon.addEventListener("click", () => {
  const monNum = Number(mondayInput.value);
  if (monNum !== sumMon) {
    sumMon = Number(mondayInput.value);
    weekArray.push(sumMon);
    

    sumTotal = sumMon + sumTue + sumWed + sumThu + sumFri + sumSat + sumSun;

    mathWeek = sumTotal / weekArray.length;
    
    averageDaily.innerText = `Average = ${mathWeek} kCal`;
    diagnosis();
  } else return;
});

btnTue.addEventListener("click", () => {
  const tueNum = Number(tuesdayInput.value);
  if (tueNum !== sumTue) {
    sumTue = Number(tuesdayInput.value);
    weekArray.push(sumTue);
   

    sumTotal = sumMon + sumTue + sumWed + sumThu + sumFri + sumSat + sumSun;

    mathWeek = sumTotal / weekArray.length;
    averageDaily.innerText = `Average = ${mathWeek} kCal`;
    diagnosis();
  } else return;
});

btnWed.addEventListener("click", () => {
  const wedNum = Number(wednesdayInput.value);
  if (wedNum !== sumWed) {
    sumWed = Number(wednesdayInput.value);
    weekArray.push(sumWed);
   

    sumTotal = sumMon + sumTue + sumWed + sumThu + sumFri + sumSat + sumSun;

    mathWeek = sumTotal / weekArray.length;
    averageDaily.innerText = `Average = ${mathWeek} kCal`;
    diagnosis();
  } else return;
});

btnThu.addEventListener("click", () => {
  const thuNum = Number(thursdayInput.value);
  if (thuNum !== sumThu) {
    sumThu = Number(thursdayInput.value);
    weekArray.push(sumThu);
 

    sumTotal = sumMon + sumTue + sumWed + sumThu + sumFri + sumSat + sumSun;

    mathWeek = sumTotal / weekArray.length;
    averageDaily.innerText = `Average = ${mathWeek} kCal`;
    diagnosis();
  } else return;
});

btnFri.addEventListener("click", () => {
  const friNum = Number(fridayInput.value);
  if (friNum !== sumFri) {
    sumFri = Number(fridayInput.value);
    weekArray.push(sumFri);
   

    sumTotal = sumMon + sumTue + sumWed + sumThu + sumFri + sumSat + sumSun;

    mathWeek = sumTotal / weekArray.length;
    averageDaily.innerText = `Average = ${mathWeek} kCal`;
    diagnosis();
  } else return;
});

btnSat.addEventListener("click", () => {
  const satNum = Number(saturdayInput.value);
  if (satNum !== sumSat) {
    sumSat = Number(saturdayInput.value);
    weekArray.push(sumSat);
  

    sumTotal = sumMon + sumTue + sumWed + sumThu + sumFri + sumSat + sumSun;

    mathWeek = sumTotal / weekArray.length;
    averageDaily.innerText = `Average = ${mathWeek} kCal`;
    diagnosis();
  } else return;
});

btnSun.addEventListener("click", () => {
  const sunNum = Number(sundayInput.value);
  if (sunNum !== sumSun) {
    sumSun = Number(sundayInput.value);
    weekArray.push(sumSun);
  

    sumTotal = sumMon + sumTue + sumWed + sumThu + sumFri + sumSat + sumSun;

    mathWeek = sumTotal / weekArray.length;
    averageDaily.innerText = `Average = ${mathWeek} kCal`;
    diagnosis();
  } else return;
});

///// FUNCTIONS /////

function diagnosis() {
  // si pusiste kCal en los dias pero nada en el target //
  if (targetValue === 0) {
    goalText.innerText = "DAILY GOAL = please input target";
    diagnosisText.innerText = "Diagnosis = Can't Calculate";
    return;
  // si el average kCal es igual al objetivo en target //
  } else if (mathWeek === targetValue) {
    diagnosisText.innerText = "Diagnosis = Right on track!";
  // si el average kCal es mayor al objetivo en target //
  } else if (mathWeek > targetValue) {
    diagnosisText.innerText = "Diagnosis = You are gaining weight!";
  // si el average kCal es menor al objetivo en target //
  } else if (mathWeek < targetValue) {
  diagnosisText.innerText = "Diagnosis = You are losing weight!";
}
}
