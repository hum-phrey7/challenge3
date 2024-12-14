



const markMass = 95;
const markHeight = 1.88;
const johnMass = 85;
const johnHeight = 1.76;

const BMImark = markMass / markHeight ** 2;
const BMIjohn = johnMass / johnHeight ** 2;

console.log(BMImark, BMIjohn,)


if( BMImark > BMIjohn){
    console.log(`Mark's BMI (${BMImark}) is higher than john's (${BMIjohn})!`)
}else{
    console.log(`John's BMI (${BMIjohn}) is higher than Mark's (${BMImark})!`)
}

