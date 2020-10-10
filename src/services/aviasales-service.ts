export default class AviasalesService {
    getNewSearchId = async () => {
        try {
            let res = await fetch('https://front-test.beta.aviasales.ru/search');
            if (!res.ok) {
                throw new Error('Could not fetch new search id');
            }
            res = await res.json();
            return res;
        } catch (error) {
            throw new Error(error.message);
        }
    };

    getTickets = async (searchId: string) => {
        const URL = `https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`;
        return fetch(URL)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error('Something went wrong');
            })
            .then((data) => data)
            .catch(() => Promise.reject());
    };
}
