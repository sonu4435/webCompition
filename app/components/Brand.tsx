import React from 'react'

const Brand = () => {
    const partnerships = [
        {
            src: "/logoBrand/_logo-oppo.svg",
            alt: "Oppo",
            text:
                "Designing mobile concepts for a popular brand in electronic products."
        },
        {
            src: "/logoBrand/_logo-udemy.svg",
            alt: "Udemy",
            text:
                "Reimagining the video player for courses and overall viewer experience."
        },
        {
            src: "/logoBrand/_logo-jbl.svg",
            alt: "JBL",
            text:
                "Developing a full-stack application as part of the hi-end audio brand's marketing campaign."
        },
        {
            src: "/logoBrand/_logo-creativemarket.svg",
            alt: "CreativeMarket",
            text:
                "Online marketplace that provides a platform for creators to buy and sell design assets."
        },
        {
            src: "/logoBrand/_logo-seneca.svg",
            alt: "Seneca",
            text: "Designing a powerful educational platform for effective learning."
        },
        {
            src: "/logoBrand/_logo-auth0.svg",
            alt: "Auth0",
            text: "Using our expertise to boost Auth0 processes."
        },
        {
            src: "/logoBrand/_logo-corel.svg",
            alt: "Corel",
            text: "Showcasing a future vision for WinZip family products."
        }
    ];
    return (
        <>
            <section className="PartnershipPage bg-black h-screen w-screen flex items-center justify-center">
                <div className="InnerSafeArea h-[90%] w-[90%] grid grid-cols-4 md:grid-cols-4 sm:grid-cols-2 grid-rows-2 relative">
                    {/* Vertical lines */}
                    <div className="h-full w-[1px] absolute left-1/4 md:left-1/4 sm:left-1/2 bg-white/30" />
                    <div className="h-full w-[1px] absolute left-1/4 md:left-1/2 sm:left-1/2 bg-white/30" />
                    <div className="h-full w-[1px] absolute left-3/4 hidden md:block bg-white/30" />

                    {/* Horizontal line */}
                    <div className="h-[1px] w-full absolute top-1/2 bg-white/30" />

                    {partnerships.map((item, index) =>
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center text-white"
                        >
                            <div className="group relative flex flex-col items-center cursor-pointer">
                                <img
                                    src={item.src}
                                    alt={item.alt}
                                    className="h-16 transition-transform duration-300 group-hover:translate-y-[-20px]"
                                />
                                <p className="absolute w-72 px-5 text-center mt-16 font-SuisseBold opacity-0 transition-opacity duration-300 group-hover:opacity-50">
                                    {item.text}
                                </p>
                            </div>
                        </div>
                    )}
                    <div className="flex flex-col items-center justify-center text-white">
                        <div className="group relative flex flex-col items-center cursor-pointer">
                            <div className="h-28 w-28 overflow-hidden rounded-full transition-transform duration-300 translate-y-[-20px]">
                                <video
                                    src="/logoBrand/Home-Page-Earth.mp4"
                                    autoPlay
                                    loop
                                    muted
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <p className="absolute w-72 text-center mt-28 font-SuisseBold transition-opacity duration-300 opacity-50 group-hover:opacity-50">
                                350+ clients worldwide
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Brand