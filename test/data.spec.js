import { showImage, showName} from '../src/data.js';

const dataTest = {
  info: { count: 'informacion'},
  results:[
    {name: 'Rick',
    image: 'imageRick'
  },{
    name: 'Morty',
    image: 'imageMorty'
  },{
    name: 'Summer',
    image: 'imageSummer'
  }]
  };

  
describe('showImage', () => {
  it('is a function', () => {
    expect(typeof showImage).toBe('function');
  });

  it('returns `showImage`', () => {
    expect(showImage(dataTest)).toEqual(["imageRick", "imageMorty", "imageSummer"]);
    });
  })

describe('showName', () => {
  it('is a function', () => {
    expect(typeof showName).toBe('function');
  });

  it('returns `showName`', () => {
    expect(showName(dataTest)).toEqual(["Rick", "Morty", "Summer"]);
  });
})

