import { APIRequest } from "./axios";

export class Requests {
    async getModalData() {
        const response = await APIRequest.get('flights/info');
        console.log(response)
        return response.data;
    }

    async getGraphDataInfo(filters) {
        /*return {
            name: filters?.title || 'Gráfico',
            series: [100, 120, 80, 20, 100, 200],
            categories: ['01-2010','02-2010','03-2010','07-2010','08-2010','06-2010'],
            type: filters?.chartType
        };*/
        const response = await APIRequest.get('flights/line');
        console.log(response)

        return {
            name: filters?.title || 'Gráfico',
            series: [10, 30, 70, 50, 30, 10],
            categories: ['01-2010', '02-2010', '03-2010', '07-2010', '08-2010', '06-2010'],
            type: filters?.chartType
        };
    }

}