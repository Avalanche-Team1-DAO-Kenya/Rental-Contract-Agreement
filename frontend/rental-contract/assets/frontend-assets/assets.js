//Source

import house1 from'./houses/house1.jpg';
import house2 from'./houses/house2.jpg';
import house3 from'./houses/house3.jpg';
import house4 from'./houses/house4.jpg';
import house5 from'./houses/house5.jpg';
import house6 from'./houses/house6.jpg';
import logo from '../frontend-assets/houses/logo.png';
import dropdown_icon from '../frontend-assets/houses/dropdown_icon.svg';


// Export all variables
export const assets =  {
  house1,
  house2,
  house3,
  house4,
  house5,
  house6,
  logo,
  dropdown_icon
};

export const apartments = [
    {
        _id: '1',
        name:"Apartment 1",
        image: house1,
        price: 1200,
        location: "New York",
        rating: 4.5,
        numReviews: 10,
        description: "This is a beautiful apartment in New York",
        category: "Apartment"
    },
    {
        _id: '2',
        name:"Apartment 2",
        image: house2,
        price: 1500,
        location: "Los Angeles",
        rating: 4.7,
        numReviews: 8,
        description: "This is a luxurious apartment in Los Angeles",
        category: "Apartment"
    },
    {
        _id: '3',
        name:"Apartment 3",
        image: house3,
        price: 1000,
        location: "Chicago",
        rating: 4.3,
        numReviews: 12,
        description: "This is a cozy apartment in Chicago",
        category: "Apartment"
    },
    {
        _id: '4',
        name:"Apartment 4",
        image: house4,
        price: 1300,
        location: "Houston",
        rating: 4.6,
        numReviews: 9,
        description: "This is a modern apartment in Houston",
        category: "Apartment"
    },
    {
        _id: '5',
        name:"Apartment 5",
        image: house5,
        price: 1100,
        location: "Phoenix",
        rating: 4.4,
        numReviews: 11,
        description: "This is a spacious apartment in Phoenix",
        category: "Apartment"
    },
    {
        _id: '6',
        name:"Apartment 6",
        image: house6,
        price: 1400,
        location: "Philadelphia",
        rating: 4.5,
        numReviews: 10,
        description: "This is a beautiful apartment in Philadelphia",
        category: "Apartment"
    }
];

