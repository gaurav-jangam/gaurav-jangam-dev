import portfolio from "../../assets/portfolio.png"
import food from "../../assets/seafoodstore.png"
import insta from "../../assets/insta.png"
import amazon from "../../assets/amazon.png"
import whatsapp from "../../assets/whatsapp.png"

const TestimonialApi = [
  {
    id: 1,
    image: ('%s', portfolio),
    name: "PERSONAL PORTFOLIO",
    subString: "Live Preview",
    link: "/",
    click: "Click Here",
    name2: "PORTFOLIO BUILD WITH REACTJS",
    date: "September 2022",
    desc: "Hello everyone so this is my personal portfolio, which shows some basic information about my self.",
  },
  {
    id: 2,
    image: ('%s', food),
    name: "SEA FOOD STORE",
    subString: "Live Preview",
    link: "https://onlineseafoodstore.netlify.app/",
    click: "Click Here",
    name2: "SEA FOOD STORE BUILD WITH REACTJS",
    date: "May 2020",
    desc: "Online Seafood Store is a web app which is servers the sea food as it name says, in 1st tab it will show you products available as well as out of stock after that middle section is to show subtotal and if this section you can remove some product if you want to and the last section shows the final bill.",
  },
  {
    id: 3,
    image: ('%s', insta),
    name: "INSTAGRAM CLONE WITH REACT",
    subString: "Live Preview",
    link: "https://instagram-clone-react-c73e1.web.app/",
    click: "Click Here",
    name2: "INSTAGRAM CLONE BUILD WITH REACTJS",
    date: "July 2020",
    desc: "Instagram clone is same as instagram, user can an post image with caption, also can insert, update, delete, edit, remove post and other users can see the post live as well as comment and all user can see that, but if you want to comment or post then you need to login or need to create a new account I have made this Instagram Clone by watching online tutorials.",
  },
  {
    id: 4,
    image: ('%s', amazon),
    name: "AMAZON CLONE WITH REACT",
    subString: "Live Preview",
    link: "https://amazon-clone-gaurav.netlify.app/",
    click: "Click Here",
    name2: "INSTAGRAM CLONE BUILD WITH REACTJS",
    date: "September 2020",
    desc: "Amazon clone works similar to Amazon just the product showing on the screen are not dynamically loaded , So I have created another one web app like amazon with all the functionalities user can add, remove, edit products apart from this thier is checkout page, shipping page, order page and user transation history page.",
  },
  {
    id: 5,
    image: ('%s', whatsapp),
    name: "WHATSAPP CLONE WITH REACT",
    subString: "Live Preview",
    link: "https://whats-app-a1160.firebaseapp.com/",
    click: "Click Here",
    name2: "WHATSAPP CLONE BUILD WITH REACTJS",
    date: "May 2020",
    desc: "Whats App clone is same as WhatsApp,User have to create group after creating a group you can chat in the group, User need to setup profile manually from code otherwise it will show random image, user can see the if other users have been seen the message then we can see the tick color will change to blue In this project I have use google login.",
  },
]

export default TestimonialApi
