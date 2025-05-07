type Web = {
  id:number
  image:string,
  arrow:string,
  name:string,
  about:string
}

type VideoCreation ={
  id:number,
  video:string,
  channelName:string,
  about:string
}


export const webDevelopment: Web[] = [
  {
    id:1,
  image:"/image1.png",
  arrow:"/arrow-up.png",
  name:"Product Designer Portfolio",
  about:"Our team developed a product designer's portfolio, where our key responsibilities were to convert the provided Figma designs into a pixel-perfect webpage. We also integrated animations to improve user interaction, ensured SEO and general web optimization, and maintained clean and maintainable code"
},
{
  id:2,
  image:"/image2.png",
  arrow:"/arrow-up.png",
  name:"VendaGrow",
  about:"is a platform that links skilled students across universities and colleges, creating a space for collaboration and relationship building. It aspires to foster a dynamic community of ambitious individuals from diverse backgrounds, encouraging mutual support and learning through connections."
},
{
  id:3,
  image:"/jundy.jpg",
  arrow:"/arrow-up.png",
  name:"Jundy Services",
  about:"JundyServices is a platform that provides dynamic and comprehensive solutions that simplify and enhance international endeavors. Through strategic partnerships and innovative services, we aim to be a trusted facilitator, connecting our clients to global opportunities and enabling them to flourish in their pursuits."
}
]

export const videoCreatives: VideoCreation[] = [
  {
  id:1,
  video:"/mujeeb.jpg",
  channelName: "E3 data nation",
  about:" Check out our advertisement video for a telecommunication website: 'E3 data nation.' The video explains in detail, 'under 60 seconds,' all you need to know about the website. Simple, short, and sweet! It's a must watch! "
},
{
  id:1,
  video:"/mujeeb.jpg",
  channelName: "The Furqa’n Channel",
  about:" Only with the use of amazing sound effects, background sound (nasheed), and popping animations, we were able to create a video just perfect to advertise an Islamic WhatsApp channel: 'Al-Furqān Channel' All information is packed under a 35-second video!"
},
{
  id:1,
  video:"/mujeeb.jpg",
  channelName: "Bexempify",
  about:" Check out our advertisement video for a telecommunication website: 'Bexempify.' The video explains in detail, 'under 50 seconds,' all you need to know about the website. Simple, short, and sweet! It's a must watch! "
},
{
  id:1,
  video:"/mujeeb.jpg",
  channelName: "Al Waduud",
  about:" Check out our advertisement video for a telecommunication website: 'Bexempify.'' The video explains in detail, 'under 50 seconds,' all you need to know about the website. Simple, short, and sweet! It's a must watch! "
},
{
  id:1,
  video:"/mujeeb.jpg",
  channelName: "IBM PLUMBING MART",
  about:" Check out our advertisement video for a telecommunication website: 'Bexempify.' The video explains in detail, 'under 50 seconds,' all you need to know about the website. Simple, short, and sweet! It's a must watch! "
}
]

