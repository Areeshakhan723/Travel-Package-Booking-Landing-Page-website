import {
  Hero,
  Cards,
  Subscribe,
  DestImg,
  Destinations,
} from "@/app/sections";

const page = () => {
  return (
    <>
      <section><Hero /></section>
      <section className="bg-[#87CEEB]"><Cards/></section>
      <section className="bg-[#87CEEB]"><DestImg/></section>
      <section><Destinations /></section>
      <section><Subscribe /></section>
    </>
  )
}

export default page;