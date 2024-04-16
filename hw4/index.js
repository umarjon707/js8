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
















