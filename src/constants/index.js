import button from "../assets/images/button.jpeg"
import oyster from "../assets/images/oyster.jpg"
import shiitake from "../assets/images/shiitake.webp"
import maitake from "../assets/images/maitake.webp"
import lions_mane from "../assets/images/lions.jpg"
import james from "../assets/images/james.jpeg"
import vince from "../assets/images/vince.jpeg"
import ron from "../assets/images/ron.jpeg"
import iot from "../assets/images/iot_2.jpeg"
import ml from "../assets/images/monitoring.jpeg"



export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Mushrooms', href: '#mushrooms'},
  {name: 'IoT&ML', href: '#iot-ml'},
  {name: 'Contact Us', href: '#contact'}
]

// Import images if needed
// import iot from 'path/to/iotImage.jpg';
// import ml from 'path/to/mlImage.jpg';

export const IoT_MlInfo = [
  {
    name: 'IoT (Internet of Things)',
    description: 'Internet of Things (IoT) is a system of interrelated computing devices, mechanical and digital machines provided with unique identifiers and the ability to transfer data over a network without requiring human-to-human or human-to-computer interaction.',
    image: iot, 
    subArray: [
      {
        title: 'Sensor Networks',
        details: 'Sensors are placed throughout the mushroom farm to collect real-time data on critical factors like temperature, humidity, CO2 levels, and substrate moisture.'
      },
      {
        title: 'Data Transmission',
        details: 'These sensors are connected to a central hub or cloud platform that transmits the collected data wirelessly.'
      },
      {
        title: 'Remote Monitoring',
        details: 'Farmers can access this data remotely using smartphones, tablets, or computers. This allows them to monitor the farm\'s conditions from anywhere with an internet connection.'
      },
      {
        title: 'Automation',
        details: 'IoT systems can be programmed to trigger automated actions based on sensor data. For example, if humidity levels drop below the ideal range, the system can automatically activate misters to increase humidity.'
      }
    ]
  },
  {
    name: 'Machine Learning',
    description: 'Machine learning is an application of artificial intelligence (AI) that provides systems the ability to automatically learn and improve from experience without being explicitly programmed. Machine learning focuses on the development of computer programs that can access data and use it to learn for themselves.',
    image: ml,
    subArray: [
      {
        title: 'Data Analysis',
        details: 'ML algorithms analyze the vast amount of data collected by the IoT sensors. Over time, the system learns to identify patterns and trends.'
      },
      {
        title: 'Predictive Maintenance',
        details: 'ML can predict potential problems like disease outbreaks or changes in mushroom growth based on historical data and current sensor readings. This allows farmers to take preventive measures and avoid crop losses.'
      },
      {
        title: 'Optimized Growing Conditions',
        details: 'By analyzing past successful crops, ML models can help determine the optimal growing conditions for specific mushroom varieties. This can involve fine-tuning temperature, humidity, and CO2 levels for maximum yield and quality.'
      },
      {
        title: 'Mushroom Classification (Prototype Stage)',
        details: 'In some research projects, ML algorithms are being explored to classify mushrooms based on images. This could potentially help identify and separate edible from toxic mushrooms, although this is still under development.'
      }
    ]
  }
];



export const ContactDetails = [
  {name: 'Dr. Lawrence Nderu ', linkedin: 'https://www.linkedin.com/in/dr-lawrence-nderu/', profilePic: 'https://jhubafrica.com/assets/lawrence-nderu-Nf3GqEoC.png', role: 'Chairman'},

  {name: 'James Njenga', linkedin: 'https://www.linkedin.com/in/james-mbugua-22850423a/', profilePic: james, role: 'Software Engineer'},
  
  {name: 'Allan Vincent', linkedin: 'https://www.linkedin.com/in/allan-vincent-951596245/', role: 'Software Engineer', profilePic: vince},

  {name: 'Ron Timothy Ndwiga', linkedin: 'https://www.linkedin.com/in/ron-gitonga/', role: 'Software Engineer', profilePic: ron},
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

    