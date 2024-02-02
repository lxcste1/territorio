import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

export default function SectionCard() {

  const services = [
    {
      title: "Uñas",
      imageMobile: `/500x300.svg`,
      imageDesktop: `/290x430.svg`,
      url: "/servicios"
    },
    {
      title: "Pestañas",
      imageMobile: `/500x300.svg`,
      imageDesktop: `/290x430.svg`,
      url: "/servicios"
    },
    {
      title: "Masajes",
      imageMobile: `/500x300.svg`,
      imageDesktop: `/290x430.svg`,
      url: "/servicios"
    },
  ];    

    return (
        <>
            {services.map((item) => (
                <Link 
                key={item.title}
                href={item.url}
                className={`border-2 border-[#C1AC99] my-4`}
                >
                <Image
                    src={item.imageMobile}
                    alt={item.title}
                    width={500}
                    height={300}
                    className={`md:hidden`}
                />
                <Image
                    src={item.imageDesktop}
                    alt={item.title}
                    width={290}
                    height={430}
                    className={`md:block hidden`}
                />
                <div className={`text-center py-2 font-bold`}>
                    <p>
                    {item.title}
                    </p>
                </div>
                </Link>
            ))}            
        </>
    )
}
