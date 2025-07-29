const choices = [
  {
    image: "/images/palmtree.svg",
    name: "Punta Monita",
    description: "Discover a tranquil paradise with golden sands, swaying palms, and crystal-clear waters. Perfect for relaxation and coastal adventure.",
    price: "from $399 pp",
  },
  {
    image: "/images/island-breeze.jpg",
    name: "Island Breeze",
    description: "Feel the warm breeze on your skin as you explore vibrant island life, exotic cuisine, and breathtaking ocean views.",
    price: "from $499 pp",
  },
  {
    image: "/images/Ocean-whisper.jpg",
    name: "Ocean Whisper",
    description: "Immerse yourself in a serene escape where the sound of the sea guides you through hidden coves and unforgettable sunsets.",
    price: "from $599 pp",
  },
];

export default function ChoicesLg () {
    return (
        <div className=" flex-col justify-center items-center py-10 hidden lg:flex">
            <div className="w-full flex flex-row justify-center items-start gap-7">
                 {choices.map((choice, idx) => (
                    <div key={idx} className="w-1/4 h-[450px] xl:h-[500px] flex flex-col items-center gap-5 p-5 text-white bg-white/5 backdrop-blur-md border border-white/20 shadow-lg">
                        <img src={choice.image} alt={choice.name} className="w-full h-[178px]" />
                        <h3 className="w-full text-[30px] text-left">{choice.name}</h3>
                        <p className="w-full xl:w-full text-[17px] text-left">{choice.description}</p>
                        <p className="w-full text-[16px] text-left">{choice.price}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}