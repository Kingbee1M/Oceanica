import { FaXTwitter, FaFacebookF, FaInstagram, FaYoutube, FaPinterest   } from "react-icons/fa6";

const footers = [
    {
        title: "About & Support",
        contents: ["Home", "Tours", "Pricing", "Contact & Support", "FAQs"]
    },

    {
        title: "Pakages & Deals",
        contents: ["Travel Blog", "Subscription", "Popular Destinations", "Last Minute Pakages", "Site Map"]
    },

    {
        title: "Legal Practices",
        contents: ["Terms & Conditions", "Privacy Statement", "Cookie Policy", "Disclaimer", "Payment Options"]
    },
]

export default function Footer () {
    const signIn = () => {
        console.log("Sign In")
    }
    return (
        <div className="w-9/10 h-auto flex flex-col justify-center items-center text-white gap-7 py-10">

        {/* first section */}
            <div className="flex flex-row justify-center items-end gap-3">
                <img src="/images/logo.svg" alt="Logo" />
                <p className="font-extrabold flex items-end text-[20px] text-[var(--grayish-white)]">Oceanica</p>
            </div>

        {/* second section */}
        <div className="w-4/5 flex flex-col justify-center items-center gap-3 lg:flex-row lg:items-start">
            <div className="flex flex-col justify-center items-center lg:items-start">
                <p>1 Marina</p>
                <p>CeanVille</p>
                <p>Victoria Island</p>
                <p>Lagos</p>
                <p>xxxx-xxxx</p>
            </div>

            <div className="w-full flex flex-row justify-evenly items-start gap-5 text-[12px]">
                {footers.map((footer, index) => (
                    <div key={(index)} className="w-full flex flex-col justify-center items-center gap-3">
                        <h2 className="w-full font-semibold text-center text-[12px]">{footer.title}</h2>
                        <div key={(index)} className="flex flex-col justify-start items-center gap-2 border-t-2 pt-3 border-t-white">
                            {footer.contents.map ((content, index) => (
                                <p className="w-full">{content}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

        </div>

        {/* third section */}
            <div className="w-full flex flex-col justify-evenly items-center gap-5 lg:w-2/5">
                <label htmlFor="sign" className="text-center text-[12px]">Sign Up to receive 10% off your first package deal*</label>
                <div className="w-4/5 flex flex-row justify-evenly items-end gap-4">
                    <input id="sign" type="text" placeholder="Email Address" className="w-4/5 pb-2 px-5 border-b-2 border-b-white focus:outline-none focus:ring-0" />
                    <div onClick={signIn} className="w-auto bg-black text-white p-1 border-2 border-white text-center text-sm lg:p-2">Submit</div>
                </div>
                <div className="w-4/5 flex flex-row justify-center items-center gap-2">
                    <input type="checkbox" id="check" className="w-4 h-4 accent-blue-500" />
                    <label htmlFor="check" className="cursor-pointer">GDPRs STATEMENT</label>
                </div>
                <p className="w-9/10 text-center text-[12px]">*Offer valid for a certain period and only on particular packages. T&Cs apply.</p>
            </div>

                    {/* fourth section */}
            <div className="w-2/3 flex flex-row justify-evenly items-center text-2xl lg:w-1/3">
                <FaXTwitter />
                <FaFacebookF />
                <FaInstagram />
                <FaYoutube />
                <FaPinterest />
            </div>
        </div>
    )
}