import React from 'react';

export default function Timer(){
    const [counter, setCounter] = React.useState(60);

    function resetCounter(){
        document.location.reload(); 
        }
    React.useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
      }, [counter]);
      return (
        <div className="App">
          <div>Countdown: {counter}</div>
          
    <div className="">
      <button className="btn btn-warning" onClick={resetCounter}>Start</button>
      </div>
        </div>
      );
    }