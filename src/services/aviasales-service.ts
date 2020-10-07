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

    getTickets() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.dummyData);
            }, 2000);
        });
    }
}
