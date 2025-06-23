const mongoose = require('mongoose');
const Product = require('../models/Product');

mongoose.connect("mongodb://127.0.0.1:27017/vegetableMart",{
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then((res)=>{
    console.log("Connection Successful to DB!");
  }).catch((err)=>{
    console.log(err);
  });


const sampleProducts = [
  { name: 'Tomatoes', price: 30, unit: 'kg', imageUrl: 'https://th.bing.com/th/id/OIP.m_OJ_EQSA_fGvMBXlFNj5AHaEo?rs=1&pid=ImgDetMain', category: 'vegetable' },
  { name: 'Potatoes', price: 25, unit: 'kg', imageUrl: 'https://cdn.pixabay.com/photo/2022/08/08/13/48/potato-7372777_1280.jpg', category: 'vegetable' },
  { name: 'Onions', price: 30, unit: 'kg', imageUrl: 'https://static.vecteezy.com/system/resources/previews/000/808/141/large_2x/big-red-onions-background-photo.jpg', category: 'vegetable' },
  { name: 'Cabbage', price :50, unit: 'kg', imageUrl: 'https://thumbs.dreamstime.com/z/background-fresh-cabbages-29864455.jpg', category: 'vegetable' },
  { name: 'Broccoli', price: 60, unit: 'kg', imageUrl: 'https://th.bing.com/th/id/OIP.Iwpd-0C3ziKGXuYSTMATxgHaE6?r=0&rs=1&pid=ImgDetMain', category: 'vegetable' },
  { name: 'Lady Finger', price: 70, unit: 'kg', imageUrl: 'https://th.bing.com/th/id/R.154fe436b5688a29f82820107fa723b1?rik=wJOSxtr6N0GoZg&riu=http%3a%2f%2ftips.pk%2fwp-content%2fuploads%2f2015%2f12%2flady-fingers.jpg&ehk=ozFWm79zAZTYEYxdbp0TLRVYsnYNqKZKuzbEdT18Whs%3d&risl=&pid=ImgRaw&r=0', category: 'vegetable' },
  { name: 'Lemon', price: 2.5, unit: 'piece', imageUrl: 'https://th.bing.com/th/id/OIP.6F6odB5OqzV5kN6U3iLkZgHaFj?r=0&rs=1&pid=ImgDetMain', category: 'vegetable' },
  { name: 'Drumstick', price: 50, unit: 'kg', imageUrl: 'https://static.toiimg.com/photo/msid-73701317/73701317.cms', category: 'vegetable' },
  { name: 'Brinjal', price: 60, unit: 'kg', imageUrl: 'https://c8.alamy.com/comp/D6DB76/eggplant-brinjal-vegetable-closeup-background-D6DB76.jpg', category: 'vegetable' },
  { name: 'Sponge Gourd', price: 40, unit: 'kg', imageUrl: 'https://th.bing.com/th/id/OIP.lUnpi85fJTO2loE5TdYZPgHaHa?r=0&rs=1&pid=ImgDetMain', category: 'vegetable' },
  { name: 'Pumpkin', price: 30, unit: 'kg', imageUrl: 'https://thumbs.dreamstime.com/z/green-pumpkins-27269618.jpg', category: 'vegetable' },
  { name: 'Coriander', price: 30, unit: 'kg', imageUrl: 'https://th.bing.com/th/id/OIP.GlXiYHm_kKyXP-_PcrFNfwHaFj?r=0&rs=1&pid=ImgDetMain', category: 'vegetable' },
  { name: 'Cauli-Flower', price: 30, unit: 'kg', imageUrl: 'https://th.bing.com/th/id/OIP.GlXiYHm_kKyXP-_PcrFNfwHaFj?r=0&rs=1&pid=ImgDetMain', category: 'vegetable' },
  { name: 'Milk', price: 50, unit: 'litre', imageUrl: 'https://th.bing.com/th/id/OIP.-8ahfZo8yC4wI5TIeIazCwHaFH?rs=1&pid=ImgDetMain', category: 'dairy' },
  { name: 'Paneer', price: 50, unit: 'litre', imageUrl: 'https://myfoodstory.com/wp-content/uploads/2016/10/How-to-make-Paneer-3.jpg', category: 'dairy' },
  { name: 'Butter', price: 90, unit: '100g', imageUrl: 'https://th.bing.com/th/id/OIP.jc66Vb4LQphnQNFXbwdnugHaE7?r=0&rs=1&pid=ImgDetMain', category: 'dairy' },
  { name: 'Cheese', price: 50, unit: '250g', imageUrl: 'https://thumbs.dreamstime.com/b/cheese-cubes-isolated-white-background-top-view-58946227.jpg', category: 'dairy' },
  { name: 'Curd', price: 30, unit: '500g', imageUrl: 'https://th.bing.com/th/id/OIP.v2LxSxMLU8CJYrmvdg0NWgHaGc?r=0&rs=1&pid=ImgDetMain', category: 'dairy' },
];

const initDB = async () => {
    await Product.deleteMany({});
    await Product.insertMany(sampleProducts);
    console.log("data was initailized");
};

initDB();