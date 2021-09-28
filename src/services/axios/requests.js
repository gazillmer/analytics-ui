import { APIRequest } from "./axios";

export class Requests {
    async getModalData() {
        const response = await APIRequest.get('flights/info');
        console.log(response)
        return response.data;
    }

    async getGraphDataInfo(filters) {

        let endpoint = '';

        switch (filters.chartType) {
            case 'line':
                endpoint = 'line';
                break;

            case 'bar':
                endpoint = 'bar';
                break;

            case 'heatmap':
                endpoint = 'heatmap';
                break;

            default:
                endpoint = 'line';
        }

        const response = await APIRequest.post(`flights/${endpoint}`, filters);

        if (endpoint === 'heatmap') {
            return {
                name: filters?.title || 'Untitled Chart',
                categories: response.data.output.indexes,
                series: response.data.output.values,
                type: filters?.chartType
            }
        } else {
            return {
                name: filters?.title || 'Untitled Chart',
                series: response.data.output.values,
                type: filters?.chartType
            };
        }

    }
}