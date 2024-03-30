import './App.css';
// import heroImage from "../src/assets/images/hero_image.jpg"
import MushroomSlider from './components/MushroomSlider';
import { MushroomTypes } from './constants';

function App() {
  return (
    <div className="w-full mx-11 App min-h-[100vh] mt-10 overflow-x-hidden">
      <h1 className='block text-3xl font-semibold sm:text-title-xxl '>SMART MUSHROOM FARMING</h1>

      {/** Mushroom farming in kenya details */}
      <div className="w-full flex gap-5 mt-12">
        
        <div className="w-1/2 text-wrap flex  justify-center px-10 ">
        <p>
          Mushroom farming in Kenya is apparently one of the most profitable agribusiness ventures. The demand for mushrooms in Kenya is growing at a fast pace due to the health benefits that come with its consumption. The Kenyan market has a shortage of mushrooms due to the high demand as compared to the supply.
          <br/> <br/>
          
          A survey by the National Farmer Information Service (NAFIS) indicates   Kenya produces 500 tonnes while the demand is 1200 tonnes 

        </p>
        
        </div>

        {/** Mushroom farming in kenya image */}
        <div className="w-2/3 flex items-center justify-center">
         <div className="w-1/2 h-96  pic rounded-lg border-2 border-black " >
            {/* <img src={heroImage} alt="mushroom farming in kenya" className="w-full h-full object-cover" /> */}
          </div>
        </div>
      </div>


      {/** Variety of mushrooms grown in Kenya */}
      <section className='my-16 w-full h-[100vh] '>

        <h2 className='text-xl capitalize'>Variety of Mushrooms Grown In Kenya</h2>

        <MushroomSlider slides={MushroomTypes}/>


      </section>

    </div>
  );
}

export default App;
