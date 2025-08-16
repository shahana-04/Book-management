import { useState } from 'react';

function Course(props) {
  const [purchased, setPurchased] = useState(false);

  function BuyCourse(discount) {
    console.log(props.name, "purchased", discount, "% discount");
    setPurchased(true);
    console.log("Purchased state:", purchased); // Note: might still show old value
  }
 

  return (
    <div className="card">
      <img src={props.img} alt={props.name} />
      <h2>{props.name}</h2>
      <p>{props.sana}</p>
      <p>{props.rating}⭐</p>
      
      <button onClick={() => BuyCourse(20)}>Buy Now</button>
      <button onClick={() => props.delete(props.name)}>Delete</button>

      <p>{purchased ? "Already purchased" : "Get it now!"}</p>
    </div>
  );
}

export default Course;
