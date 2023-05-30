import { FaStar } from "react-icons/fa";
import './MainCard.css'

const Products=(props)=>{
    let rating = props.rating > 5 ? 5 : props.rating;

    return (
        <div className="productList">
            <div key={props.id} className="productCard">
                <img
                    src={props.image}
                    alt="product-img"
                    className="productImage"
                ></img>
                <div className="productCard__content">
                    <h3 className="productName">{props.name}</h3>
                    <h3 className="paraname">{props.paraname}</h3>
                    <div className="displayStack__2">
                        <div className="productRating">
                            {[...Array(5)].map((star, index) => (
                                <FaStar
                                    className={
                                        index < rating ? "filled" : "hollow"
                                    }
                                    id={index + 1}
                                    key={index}
                                />
                            ))}
                            <div className="numOfRatings">
                                {props.numOfRatings}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Products