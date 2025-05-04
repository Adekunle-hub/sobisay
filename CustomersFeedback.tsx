type CustomerDetails = {
  name:string,
  post:string,
  organizationImage:string
}

type Feedback = {
  id:number
  feedback:string,
  customer:CustomerDetails

}

 const customersFeedback :Feedback[] = [
{
  id:1,
  feedback:"I liked the advertisement video you made for us. The performance was EXCELLENT! I give it a 10/10! And yes, I look forward to working with you again!",
  customer:{
    name:"Mutiullah Abolarin",
    post: "HEAD OF STAFF AL-WADUUD INSTITUTE",
    organizationImage: "/hamburger.png"
  }

},
{
  id:2,
  feedback:"I liked the advertisement video you made for us. The performance was EXCELLENT! I give it an 8/10! And yes, I would love to work with you again!",
  customer:{
    name:"Huzzein Faruk",
    post: "CEO DEEN REMINDER CHANNEL",
    organizationImage: "/hamburger.png"
  }

},
{
  id:3,
  feedback:"As much as I do not look forward to working with you again, I really liked the advertisement video you made for us. The performance was VERY GOOD! I give it a 7/10!",
  customer:{
    name:"Samuel Omoniyi",
    post: "CO-FOUNDER JUBILINGO AGRO",
    organizationImage: "/hamburger.png"
  }

},
{
  id:4,
  feedback:"The performance of the advertisement video you made for me was SUPERB! I liked it. I give it a 10/10! And yes, I would love to work with you again",
  customer:{
    name:"Muhammad Imran",
    post: "AFFILIATE MARKETER ",
    organizationImage: "/hamburger.png"
  }

},
{
  id:5,
  feedback:"I really like your work. I was considering asking you to create another video for my 'datacheapest.com' service, similar to the one you did before. I want to see how you incorporate the API information into this one. You're probably the busiest person I know. But to be honest, your work is excellent. It’s perfect, and I’m still using the ones you made for me.",
  customer:{
    name:"Bala Jibril",
    post: "CEO E3 DATA NATION",
    organizationImage: "/hamburger.png"
  }

}
]

export default customersFeedback