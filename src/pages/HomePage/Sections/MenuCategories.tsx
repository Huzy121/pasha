interface Dish {
  id: string;
  name: string;
  price: number;
  description: string;
}

let idCounter = 0;
const generateId = (): string => `dish-${idCounter++}`;

const indianCrisps: Dish[] = [
  { id: generateId(), name: 'Masala Papadoms', price: 0.90, description: '' },
  { id: generateId(), name: 'Plain Papadoms', price: 0.90, description: '' },
];

const starters: Dish[] = [
  { id: generateId(), name: 'Onion Bhaji 4 Pieces', price: 4.50, description: 'Barbecued cooked on flaming charcoal in the tandoori, brought specially from India. Served with salad & mint sauce.' },
  { id: generateId(), name: 'Pakora', price: 5.00, description: 'Barbecued cooked on flaming charcoal in the tandoori, brought specially from India. Served with salad & mint sauce.' },
  { id: generateId(), name: 'Prawn Cocktail', price: 5.00, description: 'Barbecued cooked on flaming charcoal in the tandoori, brought specially from India. Served with salad & mint sauce.' },
  { id: generateId(), name: 'Prawn Puri', price: 5.50, description: 'Barbecued cooked on flaming charcoal in the tandoori, brought specially from India. Served with salad & mint sauce.' },
  { id: generateId(), name: 'King Prawn Puri', price: 6.50, description: 'Barbecued cooked on flaming charcoal in the tandoori, brought specially from India. Served with salad & mint sauce.' },
  { id: generateId(), name: 'King Prawn Butterfly', price: 6.50, description: 'Barbecued cooked on flaming charcoal in the tandoori, brought specially from India. Served with salad & mint sauce.' },
  { id: generateId(), name: 'Tandoori King Prawn', price: 6.50, description: 'Barbecued cooked on flaming charcoal in the tandoori, brought specially from India. Served with salad & mint sauce.' },
  { id: generateId(), name: 'Sheek Kebab', price: 5.00, description: 'Barbecued cooked on flaming charcoal in the tandoori, brought specially from India. Served with salad & mint sauce.' },
  { id: generateId(), name: 'Shami Kebab', price: 5.00, description: 'Barbecued cooked on flaming charcoal in the tandoori, brought specially from India. Served with salad & mint sauce.' },
  { id: generateId(), name: 'Reshmi Kebab', price: 5.00, description: 'Barbecued cooked on flaming charcoal in the tandoori, brought specially from India. Served with salad & mint sauce.' },
  { id: generateId(), name: 'Tandoori Chicken 1/4', price: 5.00, description: 'Barbecued cooked on flaming charcoal in the tandoori, brought specially from India. Served with salad & mint sauce.' },
  { id: generateId(), name: 'Chicken Tikka', price: 5.00, description: 'Barbecued cooked on flaming charcoal in the tandoori, brought specially from India. Served with salad & mint sauce.' },
  { id: generateId(), name: 'Lamb Tikka', price: 6.00, description: 'Barbecued cooked on flaming charcoal in the tandoori, brought specially from India. Served with salad & mint sauce.' },
  { id: generateId(), name: 'Chicken Nuggets 5 Pieces', price: 5.00, description: 'Barbecued cooked on flaming charcoal in the tandoori, brought specially from India. Served with salad & mint sauce.' },
  { id: generateId(), name: 'Tandoori Wings 5 Pieces', price: 6.00, description: 'Barbecued cooked on flaming charcoal in the tandoori, brought specially from India. Served with salad & mint sauce.' },
  { id: generateId(), name: 'Kebab Cocktail', price: 6.00, description: 'Chicken tikka, lamb tikka & sheek kebab topped with cream. Barbecued cooked on flaming charcoal in the tandoori. Served with salad & mint sauce.' },
  { id: generateId(), name: 'Samosa 3 Pieces', price: 5.00, description: 'Barbecued cooked on flaming charcoal in the tandoori. Meat or vegetable option. Served with salad & mint sauce.' },
  { id: generateId(), name: 'Variety Starter', price: 6.00, description: 'Onion bhaji & samosa veg/meat. Barbecued cooked on flaming charcoal in the tandoori. Served with salad & mint sauce.' },
  { id: generateId(), name: 'Mixed Kebab', price: 6.00, description: 'Chicken tikka, lamb tikka & sheek kebab. Barbecued cooked on flaming charcoal in the tandoori. Served with salad & mint sauce.' },
];

const tandooriDishes: Dish[] = [
  { id: generateId(), name: 'Tandoori Chicken Half', price: 9.00, description: 'All served with salad and sauce.' },
  { id: generateId(), name: 'Tandoori Chicken Full', price: 16.00, description: 'All served with salad and sauce.' },
  { id: generateId(), name: 'Tandoori Chicken Tikka', price: 9.00, description: 'All served with salad and sauce.' },
  { id: generateId(), name: 'Tandoori Wings Main 12 Pieces', price: 10.00, description: 'All served with salad and sauce.' },
  { id: generateId(), name: 'Tandoori Lamb Tikka', price: 11.00, description: 'All served with salad and sauce.' },
  { id: generateId(), name: 'Tandoori King Prawn', price: 12.00, description: 'All served with salad and sauce.' },
  { id: generateId(), name: 'Tandoori Shashlick', price: 13.00, description: 'All served with salad and sauce.' },
];

const tandooriMassalaDishes: Dish[] = [
  { id: generateId(), name: 'Tandoori Chicken Tikka Massala', price: 9.50, description: '' },
  { id: generateId(), name: 'Tandoori Lamb Tikka Massala', price: 12.00, description: '' },
  { id: generateId(), name: 'Tandoori King Prawn Massala', price: 13.00, description: '' },
  { id: generateId(), name: 'Chicken Badam Passanda', price: 10.00, description: '' },
  { id: generateId(), name: 'Lamb Badam Passanda', price: 12.00, description: '' },
];

const donnerKebabBox: Dish[] = [
  { id: generateId(), name: 'Donner Kebab', price: 8.00, description: 'Stir fried with onions on a bed of rice, naan, or chips, topped with salad and your choice of sauce.' },
  { id: generateId(), name: 'Naga Donner Kebab', price: 9.00, description: 'Specially stir fried with onions on a bed of rice, naan, or chips, topped with salad and sauce.' },
  { id: generateId(), name: 'Shatkhora Donner Kebab', price: 9.00, description: 'Stir fried with onions and lime pickle on a bed of rice, naan, or chips, topped with salad and sauce.' },
  { id: generateId(), name: 'Apna Donner Kebab', price: 9.00, description: 'Stir fried with onions, green chillies, and garlic on a bed of rice, naan, or chips, topped with salad and sauce.' },
  { id: generateId(), name: 'Masalla Donner Kebab', price: 9.00, description: 'Stir fried with onions and Masalla Sauce on a bed of rice, naan, or chips, topped with salad and sauce.' },
];

const houseSpecialties: Dish[] = [
  { id: generateId(), name: 'For Two', price: 28.50, description: 'Tandoori chicken, chicken tikka, lamb tikka, sheek kebab, nan & salad, meat prawn or chicken bhuna served with pilau rice, papadoms, chutney & sweets inclusive.' },
  { id: generateId(), name: 'For Four', price: 65.00, description: 'Includes tandoori chicken, chicken tikka, lamb tikka, sheek kebab, meat prawn or chicken bhuna served with pilau rice, nan & salad, papadoms, chutney & sweets.' },
];

const chefsRecommendations: Dish[] = [
  { id: generateId(), name: 'Chicken Saag Palak', price: 9.50, description: 'Chicken cooked with hot spices, funnel, coriander, green chillies & spinach.' },
  { id: generateId(), name: 'Chicken Jaipuri', price: 9.50, description: 'Chicken cooked with hot spices in a thick sauce with green chillies & brinjal coriander seed.' },
  { id: generateId(), name: 'Chicken Jubali', price: 9.50, description: 'Chicken cooked with hot spices, egg, dried red chillies, onion rings & yoghurt.' },
];

const pashaSpecialThalis: Dish[] = [
  { id: generateId(), name: 'Pasha Special Thali', price: 25.00, description: 'King prawn bhuna, meat bhuna, chicken tikka massala, mushroom bhaji, special rice, spicy egg & nan bread.' },
  { id: generateId(), name: 'Non-Vegetable Thali', price: 20.00, description: 'Tandoori chicken, lamb tikka, shami kebab, nan, meat bhuna, served with pilau rice.' },
  { id: generateId(), name: 'Vegetable Thali', price: 20.00, description: 'Veg curry, mushroom bhaji, tarka dall, vegetable nan & bhindi bhaji with pilau rice.' },
];

// ...continue adding generateId() for all your remaining dishes similarly...

const specialSizzlingDishes: Dish[] = [
  { id: generateId(), name: 'Tandoori Chicken Rezela', price: 11.00, description: 'Chicken cooked with fresh herbs and spiced with green chillies.' },
  { id: generateId(), name: 'Tandoori Lamb Rezela', price: 12.00, description: 'Lamb cooked with fresh herbs and spiced with green chillies.' },
  { id: generateId(), name: 'Tandoori Chicken Makhani', price: 10.50, description: 'Shredded boneless tandoori chicken in fresh spices, cream & butter.' },
];

const allTraditionalCurries: Dish[] = [
  { id: generateId(), name: 'Curry', price: 7.50, description: 'Medium' },
  { id: generateId(), name: 'Madras', price: 7.50, description: 'Hot' },
  { id: generateId(), name: 'Vindaloo', price: 7.50, description: 'Very hot' },
  { id: generateId(), name: 'Phall', price: 7.50, description: 'Extremely hot' },
];

const biryaniDishes: Dish[] = [
  { id: generateId(), name: 'Chicken Birany', price: 11.00, description: 'Special mixed rice cooked with chicken in an authentic style, garnished with egg and tomatoes, served with vegetable curry.' },
  { id: generateId(), name: 'Prawn Birany', price: 11.00, description: 'Special mixed rice cooked with prawns, garnished with egg and tomatoes, served with vegetable curry.' },
];

const specialBiryaniDishes: Dish[] = [
  { id: generateId(), name: 'Curry Mahal Special Birany', price: 13.00, description: 'Prepared with rice, meat, chicken, mushrooms & fruits on top of an omelette, served with vegetable curry.' },
  { id: generateId(), name: 'Shahi Birany', price: 13.00, description: 'Prepared with rice, chicken, prawns & mushrooms on top of an omelette, served with vegetable curry.' },
];

const specialBaltis: Dish[] = [
  { id: generateId(), name: 'Chicken Balti', price: 9.00, description: '' },
  { id: generateId(), name: 'Meat Balti', price: 9.00, description: '' },
  { id: generateId(), name: 'Vegetable Balti', price: 9.00, description: '' },
];

const englishDishes: Dish[] = [
  { id: generateId(), name: 'Roast Chicken', price: 10.00, description: 'Including Chips, peas and salad.' },
  { id: generateId(), name: 'Golden Fried Scampi', price: 10.00, description: 'Including Chips, peas and salad.' },
];

const mocktails: Dish[] = [
  { id: generateId(), name: 'Strawberry Mojito', price: 4.75, description: 'Fresh Mint & Lemon topped off by strawberry flavoured Fizz.' },
  { id: generateId(), name: 'Blue Curacao', price: 4.75, description: 'Fresh Mint & Lemon topped off by Blue Curaçao flavoured Fizz.' },
];

const sideDishes: Dish[] = [
  { id: generateId(), name: 'Mushroom Bhaji', price: 4.50, description: 'Fresh vegetables are only used.' },
  { id: generateId(), name: 'Cauliflower Bhaji', price: 4.50, description: 'Fresh vegetables are only used.' },
];

const wraps: Dish[] = [
  { id: generateId(), name: 'Shish Wrap', price: 11.00, description: 'Grilled skewered meats nestled in a soft naan, paired with crisp salad and zesty condiments.' },
  { id: generateId(), name: 'Curry Infusion Wrap', price: 9.50, description: 'Succulent pieces of tender meat or vegetables marinated in traditional Indian spices, enveloped in a soft wrap.' },
];

const pashaOnTheGoBoxes: Dish[] = [
  { id: generateId(), name: 'Grill Box', price: 8.50, description: 'Choice of grill section mixed with onions and peppers on top of any base you would like. Succulent heaven.' },
  { id: generateId(), name: 'Pasha Loaded Chips', price: 11.00, description: 'Crispy chips layered with garlic sauce, cheese, onions, tomatoes, and your choice of keema mix, chicken, or lamb.' },
  { id: generateId(), name: 'Pasha On The Go Box Meals', price: 8.50, description: 'Choose any base, meat, and traditional curry.' },
  { id: generateId(), name: 'Pasha Variety Box To Go Box 1', price: 15.00, description: 'Pizza box filled with naan, chicken tikka, lamb tikka, sheekh kebab, onion bhajis, and masala chips, served with mint sauce salad.' },
  { id: generateId(), name: 'Pasha Variety Box To Go Box 2', price: 15.00, description: 'Pizza box filled with naan, bhuna style curry, onion bhajis, and masala chips, served with mint sauce salad.' },
];

const pizza: Dish[] = [
  { id: generateId(), name: 'Pasha Special Pizza', price: 11.50, description: 'Naan-based pizza topped with special sauce, chicken tikka, red onions, mushrooms, and cheese.' },
  { id: generateId(), name: 'Pasha Cheese Pizza', price: 9.50, description: 'Naan-based pizza topped with special sauce and cheese.' },
  { id: generateId(), name: 'Donner Pizza', price: 12.00, description: 'Naan-based pizza topped with special sauce, Donner strips, red onions, and cheese.' },
];

const sundries: Dish[] = [
  { id: generateId(), name: 'Plain Rice', price: 3.00, description: '' },
  { id: generateId(), name: 'Pilau Rice', price: 4.00, description: '' },
  { id: generateId(), name: 'Chilli Fried Rice', price: 4.50, description: '' },
  { id: generateId(), name: 'Onion Fried Rice', price: 4.50, description: '' },
  { id: generateId(), name: 'Keema Fried Rice', price: 5.00, description: '' },
  { id: generateId(), name: 'Banana Fried Rice', price: 5.00, description: '' },
  { id: generateId(), name: 'Egg Fried Rice', price: 4.50, description: '' },
  { id: generateId(), name: 'Garlic Fried Rice', price: 4.50, description: '' },
  { id: generateId(), name: 'Chips', price: 3.50, description: '' },
  { id: generateId(), name: 'Sweet Chilli Chips', price: 4.50, description: 'Chips smothered in sweet chilli sauce.' },
];

const tandooriAndNaanBreads: Dish[] = [
  { id: generateId(), name: 'Special Naan', price: 4.50, description: 'Chicken, Keema, Meat & Garlic.' },
  { id: generateId(), name: 'Peshwari Naan', price: 4.00, description: '' },
  { id: generateId(), name: 'Garlic Naan', price: 4.00, description: '' },
  { id: generateId(), name: 'Plain Naan', price: 3.30, description: '' },
  { id: generateId(), name: 'Kulcha Naan', price: 4.00, description: 'Onion filling.' },
  { id: generateId(), name: 'Cheese Naan', price: 4.25, description: '' },
  { id: generateId(), name: 'Keema & Garlic Naan', price: 4.50, description: '' },
  { id: generateId(), name: 'Keema & Cheese Naan', price: 4.50, description: '' },
  { id: generateId(), name: 'Family Naan', price: 5.50, description: '' },
];

const extras: Dish[] = [
  { id: generateId(), name: 'Mocktails', price: 4.50, description: 'N/A' },
  { id: generateId(), name: 'Chutney', price: 1.00, description: 'Mango/mint/onion/Pasha special chilli sauce.' },
  { id: generateId(), name: 'Pickle', price: 1.00, description: 'Mango/Chilli/Lime.' },
  { id: generateId(), name: 'Cans', price: 1.50, description: 'Coke, Diet Coke, 7-Up, Dr Pepper, Rio, Tango apple, Tango orange.' },
  { id: generateId(), name: 'Bottle Of Coke', price: 3.00, description: 'Coke / Diet Coke.' }
];
  
export const categories = [
    { id: 'tab0', name: 'Indian Crisps', content: indianCrisps },
    { id: 'tab1', name: 'Starters', content: starters },
    { id: 'tab2', name: 'Tandoori Dishes', content: tandooriDishes },
    { id: 'tab3', name: 'Tandoori Massala Dishes', content: tandooriMassalaDishes },
    { id: 'tab4', name: 'Donner Kebab Box', content: donnerKebabBox },
    { id: 'tab5', name: 'House Specialities', content: houseSpecialties },
    { id: 'tab6', name: 'Chef\'s Recommendations', content: chefsRecommendations },
    { id: 'tab7', name: 'Pasha Special Thalis', content: pashaSpecialThalis },
    { id: 'tab8', name: 'Special Sizzling Dishes', content: specialSizzlingDishes },
    { id: 'tab9', name: 'All Traditional Curries', content: allTraditionalCurries },
    { id: 'tab10', name: 'Birany Dishes', content: biryaniDishes },
    { id: 'tab11', name: 'Special Birany Dishes', content: specialBiryaniDishes },
    { id: 'tab12', name: 'Pashas Balti\'s', content: specialBaltis },
    { id: 'tab13', name: 'English Dishes', content: englishDishes },
    { id: 'tab14', name: 'Mocktails', content: mocktails },
    { id: 'tab15', name: 'Side Dishes', content: sideDishes },
    { id: 'tab16', name: 'Wraps', content: wraps },
    { id: 'tab17', name: 'Pasha On The Go Boxes', content: pashaOnTheGoBoxes },
    { id: 'tab18', name: 'Pizza', content: pizza },
    { id: 'tab19', name: 'Sundries', content: sundries },
    { id: 'tab20', name: 'Tandoori And Naan Breads', content: tandooriAndNaanBreads },
    { id: 'tab21', name: 'Extras', content: extras }
];
