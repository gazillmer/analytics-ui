import {remoteRequest} from "./axios";


export class Requests {
    async getModalData(){
        const response = await remoteRequest.get('flights/info');
        console.log(response)
        return response.data;
    }

    async getGraphDataInfo(filters){
        return {
            name: filters?.title || 'Gráfico',
            series: [100, 120, 80, 20, 100, 200],
            categories: ['01-2010','02-2010','03-2010','07-2010','08-2010','06-2010'],
            type: filters?.chartType
        };
    }

}