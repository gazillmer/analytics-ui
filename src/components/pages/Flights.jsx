import './flights.css'
import LineChart from '../charts/LineChart';
import ButtonAdd from '../others/ButtonAdd';
import AddChart from '../others/AddChart';
import ChartEditor from '../charts/ChartEditor';

function Flights() {
    return (
        <div className="flights-container">
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