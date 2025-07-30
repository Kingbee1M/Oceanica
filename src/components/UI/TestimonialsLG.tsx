const testimoni = [
  {
    image: "/images/sara.svg",
    name: "Clara Walker",
    description:
      "This trip was exactly what I needed to unwind. The views were stunning, the service was exceptional, and I came home feeling completely refreshed. I’m already planning my next getaway with them!",
  },
  {
    image: "/images/couple.svg",
    name: "Benjamin & Melissa",
    description:
      "Our honeymoon was absolutely magical. From the moment we arrived, everything was perfectly taken care of. We made unforgettable memories, and the sunsets were breathtaking!",
  },
  {
    image: "/images/family.svg",
    name: "The Sellers Family",
    description:
      "Traveling with kids can be stressful, but this experience was smooth and joyful from start to finish. The activities were fun for all ages, and the staff made us feel like family.",
  },
];

export default function TestimonialsLG() {
     return (
        <div className=" flex-col justify-center items-center py-10 hidden lg:flex gap-15">
            <h1 className="text-white text-4xl font-extralight">Our Testimonials</h1>
            <div className="w-full flex flex-row justify-center items-start gap-7">
                 {testimoni.map((choice, idx) => (
                    <div key={idx} className="w-1/4 h-[500px] xl:h-[500px] flex flex-col items-center gap-5 p-5 text-white bg-white/5 backdrop-blur-md border border-white/20 shadow-lg">
                        <img src={choice.image} alt={choice.name} className="w-full h-[178px]" />
                        <p className="w-full xl:w-full text-[17px] text-center">{choice.description}</p>
                        <p className="w-full text-[16px] text-center">{choice.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}