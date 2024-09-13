import './App.css';

function App() {
  // Function to change the background color
  function changeColor(color) {
    document.body.style.backgroundColor = color;
  }

  return (
    <>
      <div className="bottom-div">
        <button className="red" onClick={() => changeColor('red')}>Red</button>
        <button className="green" onClick={() => changeColor('green')}>Green</button>
        <button className="blue" onClick={() => changeColor('blue')}>Blue</button>
        <button className="olive" onClick={() => changeColor('olive')}>Olive</button>
        <button className="gray" onClick={() => changeColor('gray')}>Gray</button>
        <button className="yellow" onClick={() => changeColor('yellow')}>Yellow</button>
        <button className="pink" onClick={() => changeColor('pink')}>Pink</button>
        <button className="purple" onClick={() => changeColor('purple')}>Purple</button>
        <button className="lavender" onClick={() => changeColor('lavender')}>Lavender</button>
        <button className="white" onClick={() => changeColor('white')}>White</button>
        <button className="black" onClick={() => changeColor('black')}>Black</button>
      </div>
    </>
  );





   
}

export default App;
