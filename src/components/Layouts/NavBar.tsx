import { useState } from "react"

export default function NavBar () {
    const [toggleMenu, setToggleMenu] = useState(false)
    const changeState = () => {
        setToggleMenu(!toggleMenu)
    }

    return (
        <div className="w-full bg-black flex flex-col justify-start items-start gap-8 text-white py-4 px-3 ">
        {/* outer visible div */}
        <div className="w-full flex flex-row justify-between items-center text-white">
                {/* mobile navigation */}

                <div className="w-auto flex flex-row justify-between items-end text-white gap-2">
                        <img src="/images/logo.svg" alt="Logo" />
                        <p className="font-extrabold flex items-end text-[20px] text-[var(--grayish-white)]">Oceanica</p>
                </div>

                {/* middle menu */}
                <div className="hidden md:inline lg:inline text-white">
                    <p className="md:inline lg:hidden">Menu</p>
                    <ul className="w-auto hidden md:hidden lg:flex lg:flex-row lg:justify-center items-end gap-4">
                        <li>Home</li>
                        <li>Tours</li>
                        <li>Contact</li>
                    </ul>                
                </div>

                {/* last menu */}
                <p className="hidden md:hidden lg:flex text-[var(--monoBlue)]">
                    Start a journey
                </p>

                <img src="/images/menu.svg" alt="Logo" onClick={changeState} className="md:inline lg:hidden"/>
        </div>
        {/* end of outter vissible div */}

        {/* invissible div */}

            <ul className={`w-auto ${toggleMenu ? `flex` : `hidden` } flex-col justify-center items-start gap-6`}>
                <li>Home</li>
                <li>Tours</li>
                <li>Contact</li>
            </ul>  

        </div>
    )
}