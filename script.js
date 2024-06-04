
let author= document.querySelector(".author");
let review= document.querySelector(".content");
let job= document.querySelector(".job");
let img= document.querySelector(".image");
let button = document.querySelector(".btn");
let left= document.querySelector("#icon-left");
let right= document.querySelector("#icon-right");
let surprise= document.querySelector(".btn");
let index= 0 ;

const reviews =[
    {
      picture: "./profile-img/person1.jpg",
      author: "John Doe",
      job: "Software Engineer",
      review: "This product has significantly improved my workflow. It has streamlined many of my daily tasks and saved me a lot of time. Highly recommend!"
    },
    {
      picture: "./profile-img/person2.jpg",
      author: "Jane Smith",
      job: "Project Manager",
      review: "Excellent service and support. The team was very responsive to our needs and went above and beyond to ensure our project was successful."
    },
    {
      picture: "./profile-img/person3.jpg",
      author: "Alice Johnson",
      job: "UI/UX Designer",
      review: "The design is intuitive and user-friendly. It has made my job much easier, allowing me to create better user experiences efficiently."
    },
    {
      picture: "./profile-img/person4.jpg",
      author: "Bob Brown",
      job: "Data Analyst",
      review: "Great tool for data analysis. The features are exactly what I was looking for. It has enhanced my ability to extract valuable insights from data."
    },
    {
      picture: "./profile-img/person5.jpg",
      author: "Emily Davis",
      job: "Marketing Specialist",
      review: "The marketing tools provided by this product are exceptional. They have allowed us to reach a wider audience and track our campaigns effectively."
    },
    {
      picture: "./profile-img/person6.jpg",
      author: "Michael Wilson",
      job: "DevOps Engineer",
      review: "Implementing this product in our CI/CD pipeline was a game-changer. It has automated many of our processes and improved overall efficiency."
    },
    {
      picture: "./profile-img/person7.jpg",
      author: "Olivia Martinez",
      job: "Content Writer",
      review: "The content management features are fantastic. They have made it so easy to organize and publish my work. It has really boosted my productivity."
    },
    {
      picture: "./profile-img/person8.jpg",
      author: "David Anderson",
      job: "Network Administrator",
      review: "Reliable and efficient tool for network management. It has simplified monitoring and maintenance tasks, ensuring our network runs smoothly."
    }
  ]
  
function updateReview(){
    author.innerHTML=  reviews[index].author;
    review.innerHTML= reviews[index].review;
    job.innerHTML= reviews[index].job;
    img.src= reviews[index].picture;
}

left.addEventListener("click", ()=>{
    index=  decreaseIndex();
    updateReview();
})

right.addEventListener("click", ()=>{
    index=  increaseIndex();
    updateReview();
})

surprise.addEventListener("click", ()=>{
    index=  randomIndex();
    updateReview();
})

function increaseIndex(){
    if(index===reviews.length-1){
        index= 0; 
    }
    else
        index++;
    return index;

}
function decreaseIndex(){
    if(index===0){
        index= reviews.length-1; 
    }
    else
        index--;
    return index;
}
function randomIndex(){
    randIndex= Math.floor(Math.random()*(reviews.length-1));
    if(randIndex==index){
        randIndex= (randIndex+1)%(reviews.length-1);
    }
    return randIndex;
}