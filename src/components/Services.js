import React from 'react'
import { IoIosBuild, IoIosCar } from 'react-icons/io';
import {FaOilCan} from 'react-icons/fa';
import Title from '../components/Title';
export default function Services() {

    const services = [
        {
            icon: <IoIosCar />,
            title: "Popravka vozila",
            desc:"Vrsimo popravku svih tipova vozila"
        },
        {
            icon: <IoIosBuild />,
            title: "Rezervni delovi",
            desc:"U ponudi sirok asortiman rezervnih delova"
        },
        {
            icon: <FaOilCan />,
            title: "Servisiranje vozila",
            desc:"Veliki servis, mali servis kao i zamena delova"
        }
    ]

    return (
        <section className="services">
            <Title title="Nase usluge"/>
            <div className="services-center">
            {services.map((item, index) => {
                return <article key={index} className="service">
                    <span>{item.icon}</span>
                    <h1>{item.title}</h1>
                    <div></div>
                    <p>{item.desc}</p>
                </article>
            })}
            </div>
        </section>
    )
}
