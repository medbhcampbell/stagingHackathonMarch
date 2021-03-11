import React from 'react';

export default function Timer(props:any){
    const [counter, setCounter] = React.useState(props.myTime);

    function resetCounter(){
        
        document.location.reload(); 
        }
    React.useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);

        if(counter === 0) {
          props.endTimer(true);
        }

      }, [counter]);
      return (
        <div className="App">
          <div>Countdown: {counter}</div>

    {/* <div className="">
      <button className="btn btn-warning" onClick={resetCounter}>Start</button>
      </div> */}
        </div>
      );
    }