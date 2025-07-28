const services = [
    {
        name: "Saltwater Fishing",
        description: "Love fishing? With some of the best spots available year-round, from coastline to the deep sea, you won’t be short for choice."
    },
    {
        name: "Marine Snorkelling",
        description: "Go deep sea diving in some of the most pristine waters on the planet, from Costa Rica and the Canary Islands to Hawaii and Thailand."
    },
    {
        name: "All-Day Parasailing",
        description: "Glide through the wide open, fresh air overlooking gorgeous open bodies of ocean water to sun-swept vistas and woodland hills."
    },
]

export default function Discover () {
    return (
        <div className="bg-[url('/images/Frame-5.jpg')] bg-cover bg-center w-full h-auto text-white flex flex-col justify-center items-center gap-15 py-7 lg:flex-row lg:items-start lg:gap-0 lg:px-10 lg:pt-10">
            
            {/* first content */}
            <div className="w-4/5 flex flex-col justify-center items-center gap-4 text-center lg:w-full lg:items-start lg:gap-10">
            <h1 className="w-full text-[30px] font-extrabold lg:text-[55px] lg:text-left lg:w-1/2">Discover the Water</h1>
            <p className="w-4/5 text-[19px] break-words lg:w-1/2 lg:text-[24px] text-left">From pristine waters to majestic forests...we have it all</p>
            <p className="text-[var(--gray-1)] lg:text-[25px]">Start Your Journey Today</p>                
            </div>
            
            {/* looped component */}
            <div className="w-full backdrop-blur-md flex justify-center items-center py-6 lg:w-1/2">
                <div className="w-4/5 flex flex-col justify-center items-center gap-10 lg:w-full lg:px-10">
                {services.map((service, idx) => (
                    <div key={idx} className="flex flex-col justify-center items-center gap-2 w-full">
                        <h2 className="w-1/2 text-[17px] text-center lg:w-full lg:text-left lg:text-[32px]">{service.name}</h2>
                        <p className="w-full text-[16px] text-center lg:w-full lg:text-left lg:text-[18px]">{service.description}</p>
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}