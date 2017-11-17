import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Mr. Nice', power: 'To be nice', gender: 'male'},
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto', power: 'Bombz' },
      { id: 14, name: 'Celeritas', power: 'Fast' },
      { id: 15, name: 'Magneta', gender: 'female' },
      { id: 16, name: 'RubberMan', power: 'Rub' },
      { id: 17, name: 'Dynama', gender: 'female' },
      { id: 18, name: 'Dr IQ', power: 'Smart', gender: 'male' },
      { id: 19, name: 'Magma', power: 'HOT' },
      { id: 20, name: 'Tornado', gender: 'male'}
    ];
    return {heroes};
  }
}
