console.log("hello");

//array
let bucket_list = ["go to california","meet harry styles","be a kardashian",999];
console.log(bucket_list);
console.log(bucket_list.length);
console.log(bucket_list[1]);

//FOR LOOP
for (let i = 0; i < bucket_list.length ; i++){
    console.log("-" + bucket_list[i]);
}

//NESTED LOOP
let movie_list1 = [
  "1movie",
  "2movie",
  "3movie",
];

let movie_list2 = [
  "12movie",
  "23movie",
  "2movie",
  "8movie",
  "3movie"
];

for (let i =0; i<movie_list1.length; i++) {
  for (let j=0; j<movie_list2.length; j++) {
    if (movie_list1[i]==movie_list2[j]) {
        console.log(movie_list1[i]);
    }

  }
};

//ITERATOR
movie_list1.forEach(movie => console.log(">>"+ movie));
let new_movie_list = movie_list2.filter(movie => movie.slice(0,1)=="2");
console.log(new_movie_list);
