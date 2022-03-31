import axios from "axios";

const Car_API_BASE_URL ="http://192.168.211.127:8080/api/v1/car";

class CarService{

     getCar()
     {
         return axios.get(Car_API_BASE_URL);
     }

     createCar(car)
     {

        return axios.post(Car_API_BASE_URL,car)

     }

     getCarByID(carID)
     {
         return axios.get(Car_API_BASE_URL + '/' + carID);
     }

     updateCar(car ,carID)
     {
         return axios.put(Car_API_BASE_URL +'/' + carID,car)
     }

     deleteCar(carID)
     {
         return axios.delete(Car_API_BASE_URL +'/'+ carID)
     }
}

export default  new CarService();