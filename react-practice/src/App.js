import React, { useState, useEffect } from "react";
import DisplyData from "./Employee";
import "tachyons";
function App() {
  //products array
  const pdts = [
    { name: "Photoshop", price: "$90.99" },
    { name: "Illustrator", price: "$60.99" },
    { name: "PDF Reader", price: "$6.99" },
    { name: "Photoshop", price: "$90.99" },
    { name: "Illustrator", price: "$60.99" },
    { name: "PDF Reader", price: "$6.99" },
    { name: "Photoshop", price: "$90.99" },
    { name: "Illustrator", price: "$60.99" },
    { name: "PDF Reader", price: "$6.99" },
    { name: "Photoshop", price: "$90.99" },
    { name: "Illustrator", price: "$60.99" },
  ];
  return (
    <header className="App-header">
      {DisplyData()}
      <Counter></Counter>
      <Users></Users>
      <div className="flex flex-wrap items-center self-center justify-center">
        {pdts.map((data, i) => {
          return (
            <Product
              name={pdts[i].name}
              price={pdts[i].price}
              key={i.toString()}
            ></Product>
          );
        })}
      </div>
    </header>
  );
}

function Product(props) {
  const { name, price } = props;
  return (
    <div className="ba b--gray br4 bg-light-gray pa5 tc mw6 ma3 grow">
      <h2>{name}</h2>
      <h1>{price}</h1>
      <button className="grow br4">Buy Now</button>
    </div>
  );
}

function Counter() {
  const [count, setCount] = React.useState(10000);
  const handleIncrease = () => setCount(count + 1);
  // const handleDecrease = () => alert("Decrease clicked");
  return (
    <div>
      <h1>count: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button
        onMouseMoveCapture={() => {
          if (count !== 0) {
            setCount(count - 1);
          }
        }}
      >
        Decrease
      </button>
    </div>
  );
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <>
      <h3 className="tc">Dynamic Users: {users.length}</h3>
      <div className="flex flex-wrap items-center self-center justify-center">
        {users.map((record, i) => {
          return (
            <div>
              <h3 className="tc">Users {i + 1}</h3>
              <ul>
                <li>name: {record.name}</li>
                <li>Username: {record.username}</li>
                <li>Email: {record.email}</li>
                <li>Phone: {record.phone}</li>
                <li>Website: {record.website}</li>
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
