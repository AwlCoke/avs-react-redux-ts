export default class AviasalesService {
    apiBase = 'https://front-test.beta.aviasales.ru';
    apiBase_jm = 'https://aviasales-test-api.java-mentor.com';
    searchURI = '/search';
    ticketsURI = '/tickets?searchId=';

    getResourse = async (uri: string, key = 'av') => {
        let newApiBase;
        if (key === 'av') {
            newApiBase = this.apiBase;
        }
        if (key === 'jm') {
            newApiBase = this.apiBase_jm;
        }
        const response = await fetch(`${newApiBase}${uri}`);
        if (!response.ok) {
            throw new Error();
        }
        return response.json();
    };

    getNewSearchId = async () => {
        const response = await this.getResourse(this.searchURI);
        return response.searchId;
    };

    getTickets = async (searchId: string) => {
        const response = await this.getResourse(`${this.ticketsURI}${searchId}`);
        return response;
    };
}
