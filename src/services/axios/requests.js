import { APIRequest } from "./axios";

export class Requests {

    async getModalData(source) {
        try {
            const response = await APIRequest.get(`${source}/info`);
            return response.data;
        } catch {
            alert('Error while fetching indexes from API.')
        }
    }

    async getGraphDataInfo(filters) {

        let source = filters.source;
        let endpoint = '';

        switch (filters.chartType) {
            case 'line':
                endpoint = 'line';
                break;

            case 'bar':
                endpoint = 'bar';
                break;

            default:
                endpoint = 'line';
        }

        const response = await APIRequest.post(`${source}/${endpoint}`, filters);

        return {
            name: filters?.title || 'Untitled Chart',
            yaxis: filters?.index,
            values: response.data.output.values,
            indexes: response.data.output.indexes,
            type: filters?.chartType,
            filters: filters
        }
    }
    
    async downloadChartData(filters) {
        const response = await APIRequest.post(`twitter/download`, filters)
        return response.data
    }

}