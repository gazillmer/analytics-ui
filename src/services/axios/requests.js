import { APIRequest } from "./axios";

export class Requests {
    async getModalData() {
        try {
            const response = await APIRequest.get('flights/info');
            return response.data;
        } catch {
            alert('Error while fetching indexes from API.')
        }
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
                indexes: response.data.output.indexes,
                values: response.data.output.values,
                type: filters?.chartType
            }
        } else {
            return {
                name: filters?.title || 'Untitled Chart',
                yaxis: filters?.index,
                values: response.data.output.values,
                indexes: response.data.output.indexes,
                type: filters?.chartType
            };
        }

    }
}