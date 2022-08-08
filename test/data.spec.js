import { showData, showOrder, filterHuman, filterAlien, showRandom} from '../src/data.js';

const dataTest = {
  info: { count: 'informacion'},
  results:[
    {name: 'Rick Sánchez',
    image: 'images/1.jpeg',
    species: 'Human',
    gender: 'Male',
    status: 'Alive'
  },{
    name: 'Abadango Cluster Princess',
    image: 'images/6.jpeg', 
    species: 'Alien',
    gender: 'Female',
    status: 'Alive'
}, {
    name: 'Zarbadar Gloonch',
    image: 'images/386.jpeg', 
    species: 'Alien',
    gender: 'Female',
    status: 'Dead'
}]
  };

  const dataResults = [ 
       { 
      name: 'Rick Sánchez',
      image: 'images/1.jpeg',
      species: 'Human',
      gender: 'Male',
      status: 'Alive'
    },
    {
      name: 'Abadango Cluster Princess',
      image: 'images/6.jpeg', 
      species: 'Alien',
      gender: 'Female',
      status: 'Alive'
  }, 
   {
      name: 'Zarbadar Gloonch',
      image: 'images/386.jpeg', 
      species: 'Alien',
      gender: 'Female',
      status: 'Dead'
  }
];

  
describe('showData', () => {
  it('is a function', () => {
    expect(typeof showData).toBe('function');
  });

  it('returns `showData`', () => {
  expect(showData(dataTest)).toEqual(dataTest.results);
    });
  })

  const dataOrder = [
       {
        name: 'Abadango Cluster Princess',
        image: 'images/6.jpeg', 
        species: 'Alien',
        gender: 'Female',
        status: 'Alive'
      }, 
      {name: 'Rick Sánchez',
      image: 'images/1.jpeg',
      species: 'Human',
      gender: 'Male',
      status: 'Alive'
    }, {
      name: 'Zarbadar Gloonch',
      image: 'images/386.jpeg', 
      species: 'Alien',
      gender: 'Female',
      status: 'Dead'
  }
];

    describe('showOrder', () => {
      it('is a function', () => {
        expect(typeof showOrder).toBe('function');
      });
    
      it('returns `showOrder`', () => {
      expect(showOrder(dataResults)).toEqual(dataOrder);
        });
      })
    

      const dataHuman = [
       {name: 'Rick Sánchez',
       image: 'images/1.jpeg',
       species: 'Human',
       gender: 'Male',
       status: 'Alive'
     }
 ];

 describe('filterHuman', () => {
  it('is a function', () => {
    expect(typeof filterHuman).toBe('function');
  });

  it('returns `filterHuman`', () => {
  expect(filterHuman(dataResults)).toEqual(dataHuman);
    });
  })


  const dataAliens = [
    {
     name: 'Abadango Cluster Princess',
     image: 'images/6.jpeg', 
     species: 'Alien',
     gender: 'Female',
     status: 'Alive'
   }, {
   name: 'Zarbadar Gloonch',
   image: 'images/386.jpeg', 
   species: 'Alien',
   gender: 'Female',
   status: 'Dead'
}
];


describe('filterAlien', () => {
  it('is a function', () => {
    expect(typeof filterAlien).toBe('function');
  });

  it('returns `filterAlien`', () => {
  expect(filterAlien(dataResults)).toEqual(dataAliens);
    });
  })

let dataRandom = 
{
  male: 1, 
  female: 2,
  genderUndefined: 0,
  alive: 2,
  dead: 1, 
  statusUndefined: 0
}

describe('showRandom', () => {
  it('is a function', () => {
    expect(typeof showRandom).toBe('function');
  });

  it('returns `showRandom`', () => {
  expect(showRandom(dataResults)).toEqual(dataRandom);
    });
  })


