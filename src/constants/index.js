import button from "../assets/images/button.jpeg"
import oyster from "../assets/images/oyster.jpg"
import shiitake from "../assets/images/shiitake.webp"
import maitake from "../assets/images/maitake.webp"
import lions_mane from "../assets/images/lions.jpg"
import james from "../assets/images/james.jpeg"
import vince from "../assets/images/vince.jpeg"

export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Mushrooms', href: '#mushrooms'},
  {name: 'IoT&ML', href: '#iot-ml'},
  {name: 'Contact Us', href: '#contact'}
]

export const IoT_ML = [
  {name: 'IoT', description: 'Internet of Things (IoT) is a system of interrelated computing devices, mechanical and digital machines provided with unique identifiers and the ability to transfer data over a network without requiring human-to-human or human-to-computer interaction.', image: 'https://www.iotforall.com/wp-content/uploads/2019/07/iot-1.jpg'},
  {name: 'Machine Learning', description: 'Machine learning is an application of artificial intelligence (AI) that provides systems the ability to automatically learn and improve from experience without being explicitly programmed. Machine learning focuses on the development of computer programs that can access data and use it to learn for themselves.', image: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/machine-learning-tutorial.jpg'},
]


export const ContactDetails = [
  {name: 'Dr. Lawrence Nderu ', linkedin: 'https://www.linkedin.com/in/dr-lawrence-nderu/', profilePic: 'https://jhubafrica.com/assets/lawrence-nderu-Nf3GqEoC.png', role: 'Chairman'},

  {name: 'James Njenga', linkedin: 'https://www.linkedin.com/in/james-mbugua-22850423a/', profilePic: james, role: 'Software Engineer'},
  
  {name: 'Allan Vincent', linkedin: 'https://www.linkedin.com/in/allan-vincent-951596245/', role: 'Software Engineer', profilePic: vince},
]


export const MushroomTypes = [
  {
    id: 1,
    name: "Button Mushroom",
    image: button,
    description: "Button mushrooms are the most common type of mushroom grown in Kenya. They are also known as Agaricus bisporus. They are white and have a mild taste.",
    temperature: "15-20°C",
    humidity: "80-90%",
    pricePerKg: "600 Ksh"
  },
  {
    id: 2,
    name: "Oyster Mushroom",
    image: oyster,
    description: "Oyster mushrooms are a type of edible mushroom. They have a mild taste and are popular in many cuisines. They are also known as Pleurotus ostreatus.",
    temperature: "20-25°C",
    humidity: "80-90%",
    pricePerKg: "400 Ksh"
  },
  {
    id: 3,
    name: "Shiitake Mushroom",
    image: shiitake,
    description: "Shiitake mushrooms are a type of edible mushroom. They have a meaty texture and a rich, earthy flavor. They are also known as Lentinula edodes.",
    temperature: "15-25°C",
    humidity: "80-90%",
    pricePerKg: "1000 Ksh"
  },
  {
    id: 4,
    name: "Maitake Mushroom",
    image: maitake,
    description: "Maitake mushrooms are a type of edible mushroom. They have a rich, earthy flavor and a meaty texture. They are also known as Grifola frondosa.",
    temperature: "15-25°C",
    humidity: "80-90%",
    pricePerKg: "1200 Ksh"
  },
  {
    id: 5,
    name: "Lion's Mane Mushroom",
    image: lions_mane,
    description: "Lion's mane mushrooms are a type of edible mushroom. They have a seafood-like flavor and a stringy texture. They are also known as Hericium erinaceus.",
    temperature: "15-25°C",
    humidity: "80-90%",
    pricePerKg: "1400 Ksh"
  },
]

    