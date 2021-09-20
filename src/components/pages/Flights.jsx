import './flights.css'
import ApiRequest from '../others/ApiRequest';
import LineChart from '../charts/LineChart';
import ChartEditor from '../charts/ChartEditor';

function Flights() {
    return(
        <div className="flights-container">
            <LineChart />
            <LineChart />
            <LineChart />
            <LineChart />
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