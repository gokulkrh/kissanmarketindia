import {React, Component} from "react";
import "./styles/footer.css"

export default class Categories extends Component {
    componentDidMount() {
        this.fetchData();
    }
    
    fetchData = () => {
        fetch("http://localhost:5000/v1/categories") // Replace with your API endpoint
        .then((response) => response.json())
        .then((data) => {
            // Handle the retrieved data here
            console.log(data);
        })
        .catch((error) => {
            // Handle any errors that occur during the request
            console.error("Error:", error);
        });
    };
      
    render() {
        return (
            <div className="categories-carousel">
                
            </div>
        )
    }
}