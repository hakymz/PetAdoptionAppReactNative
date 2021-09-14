const pets = [
  {
    pet: 'cats',
    pets: [
      {
        id: '1',
        name: 'Lily',
        image: require('../assets/cat1.png'),
        type: 'Chausie',
        age: '5 years old',
      },
      {
        id: '2',
        name: 'Lucy',
        image: require('../assets/cat2.png'),
        type: 'Bobtail',
        age: '2 years old',
      },
      {
        id: '3',
        name: 'Nala',
        image: require('../assets/cat3.png'),
        type: 'Ragamuffin',
        age: '2 years old',
      },
    ],
  },
  {
    pet: 'dogs',
    pets: [
      {
        id: '1',
        name: 'Bally',
        image: require('../assets/dog1.png'),
        type: 'German Shepherd',
        age: '2 years old',
      },
      {
        id: '2',
        name: 'Max',
        image: require('../assets/dog2.png'),
        type: 'Foxhound',
        age: '2 years old',
      },
    ],
  },
  {
    pet: 'birds',
    pets: [
      {
        id: '1',
        name: 'Coco',
        image: require('../assets/bird1.png'),
        type: 'Parrot',
        age: '2 years old',
      },
      {
        id: '2',
        name: 'Alfie',
        image: require('../assets/bird2.png'),
        type: 'Parrot',
        age: '4 years old',
      },
    ],
  },
  {
    pet: 'bunnies',
    pets: [
      {
        id: '1',
        name: 'Boots',
        image: require('../assets/bunny1.png'),
        type: 'Angora',
        age: '1 years old',
      },
      {
        id: '2',
        name: 'Pookie',
        image: require('../assets/bunny2.png'),
        type: 'Angora',
        age: '1 years old',
      },
    ],
  },
];

export default pets;
