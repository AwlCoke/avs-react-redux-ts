export default class AviasalesService {
    getNewSearchId = () => {
        const URL = 'https://front-test.beta.aviasales.ru/search';
        return fetch(URL)
            .then((response) => {
                if (!response.ok) return undefined;
                else return response.json();
            })
            .then((json) => {
                return json.searchId;
            })
            .catch((error) => {
                throw new Error(`Could not get new search id. ${error}`);
            });
    };

    getTickets = (searchId: string) => {
        const URL = `https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`;
        return fetch(URL)
            .then((res) => {
                return res.json();
            })
            .then((data) => data)
            .catch(() => Promise.reject());
    };
}
