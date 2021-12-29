const mydata = [
  {
    id: 1,
    name: "Chappati",
    price: 200,
    image: "https://static.toiimg.com/thumb/59787396.cms?width=1200&height=900",
    catagory: "Breakfast",
    desc: "  loream ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim",
  },
  {
    id: 2,
    name: "Paneer",
    price: 300,
    image:
      "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    catagory: "Breakfast",
    desc: "  loream ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim",
  },
  {
    id: 3,
    name: "Pizza",
    price: 400,
    image:
      "https://image.shutterstock.com/image-photo/mouth-watering-delicious-cheese-pizza-260nw-1637074219.jpg",
    catagory: "Dinner",
    desc: "  loream ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim",
  },
  {
    id: 4,
    name: "Burger",
    price: 500,
    image:
      "https://media.istockphoto.com/photos/delicious-homemade-hamburger-and-french-fries-picture-id1254672762?b=1&k=20&m=1254672762&s=170667a&w=0&h=nKrG40G2jj9O8wzJ8wDD2zmUKNp00mcdVWK_f_zixug=",
    catagory: "Dinner",
    desc: "  loream ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim",
  },
  {
    id: 5,
    name: "Pasta",
    price: 600,
    image:
      "https://media.istockphoto.com/photos/pasta-spaghetti-with-tomato-sauce-in-black-bowl-on-grey-stone-top-picture-id1174657282?k=20&m=1174657282&s=612x612&w=0&h=O1RpO5XyQD1O6VMzey_16UdCSV3w5OYkjPS59qGZgKM=",
    catagory: "Lunch",
    desc: "  loream ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim",
  },
  {
    id: 6,
    name: "Pizza",
    price: 400,
    image:
      "https://image.shutterstock.com/image-photo/mouth-watering-delicious-cheese-pizza-260nw-1637074219.jpg",
    catagory: "Dinner",
    desc: "  loream ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim",
  },
  {
    id: 7,
    name: "Burger",
    price: 500,
    image:
      "https://media.istockphoto.com/photos/delicious-homemade-hamburger-and-french-fries-picture-id1254672762?b=1&k=20&m=1254672762&s=170667a&w=0&h=nKrG40G2jj9O8wzJ8wDD2zmUKNp00mcdVWK_f_zixug=",
    caragory: "Dinner",
    desc: "  loream ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim",
  },
  {
    id: 8,
    name: "Pasta",
    price: 600,
    image:
      "https://media.istockphoto.com/photos/pasta-spaghetti-with-tomato-sauce-in-black-bowl-on-grey-stone-top-picture-id1174657282?k=20&m=1174657282&s=612x612&w=0&h=O1RpO5XyQD1O6VMzey_16UdCSV3w5OYkjPS59qGZgKM=",
    catagory: "Lunch",
    desc: "  loream ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim",
  },
  {
    id: 9,
    name: "Pizza",
    price: 400,
    image:
      "https://image.shutterstock.com/image-photo/mouth-watering-delicious-cheese-pizza-260nw-1637074219.jpg",
    catagory: "Dinner",
    desc: "  loream ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim",
  },
  {
    id: 10,
    name: "Lassi",
    price: 80,
    image:
      "https://www.spicypunch.com/wp-content/uploads/2019/06/lassi-recipe.jpg",
    catagory: "Breakfast",
    desc: "  loream ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim",
  },
  {
    id: 11,
    name: "Pizza",
    price: 400,
    image:
      "https://image.shutterstock.com/image-photo/mouth-watering-delicious-cheese-pizza-260nw-1637074219.jpg",
    catagory: "Dinner",
    desc: "  loream ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim",
  },
  ,
  {
    id: 12,
    name: "Paneer",
    price: 300,
    image:
      "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    catagory: "Breakfast",
    desc: "  loream ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim",
  },
  {
    id: 13,
    name: "Pizza",
    price: 400,
    image:
      "https://image.shutterstock.com/image-photo/mouth-watering-delicious-cheese-pizza-260nw-1637074219.jpg",
    catagory: "Dinner",
    desc: "  loream ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim",
  },
  {
    id: 14,
    name: "Burger",
    price: 500,
    image:
      "https://media.istockphoto.com/photos/delicious-homemade-hamburger-and-french-fries-picture-id1254672762?b=1&k=20&m=1254672762&s=170667a&w=0&h=nKrG40G2jj9O8wzJ8wDD2zmUKNp00mcdVWK_f_zixug=",
    catagory: "Dinner",
    desc: "  loream ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim",
  },
  {
    id: 15,
    name: "Pasta",
    price: 600,
    image:
      "https://media.istockphoto.com/photos/pasta-spaghetti-with-tomato-sauce-in-black-bowl-on-grey-stone-top-picture-id1174657282?k=20&m=1174657282&s=612x612&w=0&h=O1RpO5XyQD1O6VMzey_16UdCSV3w5OYkjPS59qGZgKM=",
    catagory: "Lunch",
    desc: "  loream ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim",
  },
  {
    id: 16,
    name: "Pizza",
    price: 400,
    image:
      "https://image.shutterstock.com/image-photo/mouth-watering-delicious-cheese-pizza-260nw-1637074219.jpg",
    catagory: "Dinner",
    desc: "  loream ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim",
  },
  {
    id: 17,
    name: "Burger",
    price: 500,
    image:
      "https://media.istockphoto.com/photos/delicious-homemade-hamburger-and-french-fries-picture-id1254672762?b=1&k=20&m=1254672762&s=170667a&w=0&h=nKrG40G2jj9O8wzJ8wDD2zmUKNp00mcdVWK_f_zixug=",
    caragory: "Dinner",
    desc: "  loream ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim",
  },
  {
    id: 18,
    name: "Pasta",
    price: 600,
    image:
      "https://media.istockphoto.com/photos/pasta-spaghetti-with-tomato-sauce-in-black-bowl-on-grey-stone-top-picture-id1174657282?k=20&m=1174657282&s=612x612&w=0&h=O1RpO5XyQD1O6VMzey_16UdCSV3w5OYkjPS59qGZgKM=",
    catagory: "Lunch",
    desc: "  loream ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim",
  },
  {
    id: 19,
    name: "Pizza",
    price: 400,
    image:
      "https://image.shutterstock.com/image-photo/mouth-watering-delicious-cheese-pizza-260nw-1637074219.jpg",
    catagory: "Dinner",
    desc: "  loream ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim",
  },
  {
    id: 20,
    name: "Lassi",
    price: 80,
    image:
      "https://www.spicypunch.com/wp-content/uploads/2019/06/lassi-recipe.jpg",
    catagory: "Breakfast",
    desc: "  loream ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim",
  },
  {
    id: 21,
    name: "Pizza",
    price: 400,
    image:
      "https://image.shutterstock.com/image-photo/mouth-watering-delicious-cheese-pizza-260nw-1637074219.jpg",
    catagory: "Dinner",
    desc: "  loream ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim",
  },
];

export default mydata;
