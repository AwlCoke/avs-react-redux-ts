export default class AviasalesService {
    dummyData = [
        {
            price: 13000,
            carrier: 'Carrier 1',
            segments: [
                {
                    origin: 'City 1',
                    destination: 'City 2',
                    date: new Date().toString(),
                    stops: ['City 3', 'City 4'],
                    duration: 600,
                },
                {
                    origin: 'City 1',
                    destination: 'City 2',
                    date: new Date().toString(),
                    stops: ['City 3', 'City 4', 'City 5'],
                    duration: 800,
                },
            ],
        },
        {
            price: 14000,
            carrier: 'Carrier 2',
            segments: [
                {
                    origin: 'City 1',
                    destination: 'City 2',
                    date: new Date().toString(),
                    stops: ['City 3'],
                    duration: 600,
                },
                {
                    origin: 'City 1',
                    destination: 'City 2',
                    date: new Date().toString(),
                    stops: [],
                    duration: 800,
                },
            ],
        },
    ];

    searchID = '4p0b2';

    getTickets() {
        const URL = `https://front-test.beta.aviasales.ru/tickets?searchId=${this.searchID}`;
        return fetch(URL)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error('Something went wrong');
            })
            .then((data) => data)
            .catch(() => Promise.reject());
    }

    getDummyData() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.dummyData);
            }, 2000);
        });
    }
}
