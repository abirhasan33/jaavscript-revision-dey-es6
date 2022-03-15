const dreamGirl = [
    {
      dream1: {
        name: "bbu",
        height: "5.4",
        family: [{ father: "rock", mother: "shila", sister: "chinki" }],
        age: undefined,
        contactInfo: [
          {
            facebook: {
              link: "https://www.facebook.com/",
              followers: "12545",
              status: "single",
              friendsList: [
                { name: "rofik" },
                { name: "jobbar" },
                { name: "salam" },
                { name: "borkot" },
                undefined,
              ],
            },
          },
          { instagram: "https://www.instagram.com/" },
          { twitter: "https://twitter.com/" },
          { github: "https://github.com/" },
          { phone: ["01254823212", "02152457"] },
        ],
      },
    },
  ];

//   console.log(dreamGirl[0].dream1.contactInfo[0].facebook.friendsList);
  const fiends = dreamGirl[0].dream1.contactInfo[0].facebook.friendsList;
//   for(frend of fiends){
//       frend = frend.name
//       console.log(frend)
//   }

// const friends = ["hero", "broo", "china", "angel"];

// for(const element of friends){
//     console.log(element);
// }
  

// const friendsList = 
//     { name: "rofik", name2: "jobbar", name3: "salam",name4: "borkot"  };
//     console.log(friendsList["name2"])

// for(const property in friendsList){
//     // console.log(property)
//     // console.log(friendsList)
//     console.log(`${property} : ${friendsList[property]}`);
// }



const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const temp = [];
// const sum = (num) =>{
//     return num * num;
// }
// for(const element of numbers){
//     const square = sum(element);
//     temp.push(square)
// }
// console.log(temp);


// const result = numbers.map((num) => num * num);
// console.log(result);




// const products = [
//     { id: 1, name: "apple", price: 500, color: "golden" },
//     { id: 2, name: "xiaomi", price: 124, color: "black" },
//     { id: 3, name: "samsung", price: 200, color: "black" },
//     { id: 4, name: "samsung2", price: 200, color: "black" },
//     { id: 5, name: "lenovo", price: 300, color: "pink" },
//     { id: 6, name: "xiaomi", price: 100, color: "pink" },
//     { id: 7, name: "lenovo", price: 300, color: "pink" },
//   ];

//   const result = products.map((index, pd) => {
//       console.log(index);
//       console.log(pd);
//   })



//   const result = products.filter((pd) => pd.id != 1);
//   console.log(result);

// products.forEach(product => console.log(product.name));

//   const result = products.find((pd) => pd.color== 'black');
//   console.log(result);

// fetch("https://fakestoreapi.com/products")
// .then(res => console.log(res.json()))

// .then(data => console.log(data));

// data();

const number = false;
2





// const data = () => {
//   fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
//     .then((response) => response.json())
//     .then((data) => {
//       another(data.drinks);
//     });
// };
// data();

// const another = (data) => {
//   console.log(data);
// };
// function quickCheck(arr, elem) {
//     return arr.indexOf(elem) != -1;
//   }
//   console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));


