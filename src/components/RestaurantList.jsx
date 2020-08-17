import React, { useEffect, useContext } from 'react';
import RestaurantFinder from '../apis/RestaurantFinder'
import { RestaurantsContext } from '../context/RestaurantsContext';

const RestaurantList = (props) => {
  const { restaurants, setRestaurants } = useContext(RestaurantsContext);

  useEffect(() => { 
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get("/");
        setRestaurants(response.data.data.restaurants);
        console.log(restaurants)
     } catch (err) {
       console.log(err)
     }
    }

    fetchData();
  }, [])

  return (
    <div className="list-group">
      <table className="table table-hover table-dark">
        <thead>
          <tr className="bg-primary">
            <th scope="col">Restaurant</th>
            <th scope="col">Location</th>
            <th scope="col">Price Range</th>
            <th scope="col">Ratings</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>mcdonalds</td>
            <td>new york</td>
            <td>$$</td>
            <td>rating</td>
            <td><button className="btn btn-warning">Update</button></td>
            <td><button className="btn btn-danger">Delete</button></td>
          </tr>

          <tr>
            <td>mcdonalds</td>
            <td>new york</td>
            <td>$$</td>
            <td>rating</td>
            <td><button className="btn btn-warning">Update</button></td>
            <td><button className="btn btn-danger">Delete</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default RestaurantList
