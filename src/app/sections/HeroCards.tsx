import HeroCards from "../component/HeroCards";
import {cardsdata} from "../constant/index";
const cards = () => {
  return (
    <section className="w-full max-container" >
        <div className="flex flex-wrap justify-center max-w-[1200px] mx-auto">
            {cardsdata.map((data) => (
                <HeroCards key={data.title} {...data}/>
            ))}
        </div>
    </section>
  )
}

export default cards;


