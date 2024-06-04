import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  //   const x = "jonas";

  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  //const style ={ color: "red", fontSize: "48px", textTransform: "uppercase" }
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>fast react piza company</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numpizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our menu</h2>

      {numpizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>

          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu please come back later</p>
      )}

      {/* <Pizza
        name="pizza spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoname="pizzas/spinaci.jpg"
        price={10}
      />

      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mozarella, mushrooms, and onion"
        photoname="pizzas/funghi.jpg"
        price={12}
      /> */}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  console.log(pizzaObj);

  //if (pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <div className="pizza">
        <img src={pizzaObj.photoName} alt={pizzaObj.name} />
        <div>
          <h2>{pizzaObj.name}</h2>
          <p>{pizzaObj.ingredients}</p>

          <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
        </div>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openhour = 1;
  const closehour = 22;
  const isopen = hour >= openhour && hour <= closehour;
  console.log(isopen);
  //   if (hour >= openhour && hour <= closehour) alert("We're currently open");
  //   else alert("sorry we're closed");

  return (
    <footer className="footer">
      {isopen ? (
        <Order closehour={closehour} openhour={openhour} />
      ) : (
        <p>
          We're happy to welcome you between {openhour}:00 and {closehour}:00{" "}
        </p>
      )}
    </footer>
  );

  //return React.createElement('footer',null,"we're currently open")
}

function Order({ closehour, openhour }) {
  return (
    <div className="order">
      <p>
        We're open from {openhour}:00 to {closehour}:00. Come visit us or order
        online
      </p>

      <button className="btn">Order</button>
    </div>
  );
}

//react v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//react before 18
//React.render(<App/>,document.getElementById("root"))
