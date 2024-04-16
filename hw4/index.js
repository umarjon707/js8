let cars = [
    {
        mode: "malibu 2",
        mark: "GM",
        color: "white",
        price: 30000,
        engine: 2.4,
        year: 2023
    },
    {
        mode: "Tahoe",
        mark: "GM",
        color: "black",
        price: 90000,
        engine: 3.5,
        year: 2024
    },
    {
        mode: "Bugatti",
        mark: "BG",
        color: "blue",
        price: 2000000,
        engine: 5.5,
        year: 2020
    },
    {
        mode: "Matiz",
        mark: "Daewoo",
        color: "green",
        price: 3000,
        engine: 5.5,
        year: 2015
    },
    {
        mode: "Nexia 2",
        mark: "GM",
        color: "gray",
        price: 7000,
        engine: .6,
        year: 2010
    },
    {
        mode: "Camry",
        mark: "Toyota",
        color: "white",
        price: 70000,
        engine: 3.5,
        year: 2022
    },
]


 let from = prompt()
 let up = prompt()

 cars.forEach((cars)=>{
    if(cars.price>=from && cars.price<=up){
        alert(cars.mode,cars.price);
    } 
}
)
 
 let expensive = cars.reduce((current,prev) => prev.price > current.price ? prev : current);;
 console.log(expensive);
 
 
 let cheap = cars.reduce((prev, current) => prev.price < current.price ? prev : current);
 console.log(cheap);
 
 
 let fast = cars.reduce((prev, current) => prev.engine > current.engine ? prev : current);
 console.log(fast);
 
 
 let old = cars.reduce((current,prev) => current.year < prev.year ? prev : current);
 console.log(old);





// найти самую дорогую машину 
// найти самую дешевую машину 
// найти самую бысрую машину
// найти самую старую
















// Нахождение самой дорогой машины
// let mostExpensiveCar = cars[0];
// for (let i = 1; i < cars.length; i++) {
//     if (cars[i].price > mostExpensiveCar.price) {
//         mostExpensiveCar = cars[i];
//     }
// }
// console.log("Самая дорогая машина:", mostExpensiveCar);

// // Нахождение самой дешевой машины
// let cheapestCar = cars[0];
// for (let i = 1; i < cars.length; i++) {
//     if (cars[i].price < cheapestCar.price) {
//         cheapestCar = cars[i];
//     }
// }
// console.log("Самая дешевая машина:", cheapestCar);

// // Нахождение самой быстрой машины
// let fastestCar = cars[0];
// for (let i = 1; i < cars.length; i++) {
//     if (cars[i].engine > fastestCar.engine) {
//         fastestCar = cars[i];
//     }
// }
// console.log("Самая быстрая машина:", fastestCar);

// // Нахождение самой старой машины
// let oldestCar = cars[0];
// for (let i = 1; i < cars.length; i++) {
//     if (cars[i].year < oldestCar.year) {
//         oldestCar = cars[i];
//     }
// }
// console.log("Самая старая машина:", oldestCar);