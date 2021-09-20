import './flights.css'
import LineChart from '../charts/LineChart';
import ChartEditor from '../charts/ChartEditor';
import Loader from '../others/Loader';

function Flights() {
    return(
        <div className="flights-container">
            <LineChart />
            <LineChart />
            <LineChart />
            <Loader />
            <ChartEditor />
        </div>
    )
}

export default Flights
/*
<div className='flights-grid'>
            <ButtonAdd onClick={handleShow}/>
            {show ? <ChartEditor /> : null}
        </div>
*/