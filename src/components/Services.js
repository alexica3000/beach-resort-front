import React, {Component} from 'react';
import Title from './Title';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/all";

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: 'free cocktails',
                info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, voluptatum.'
            },
            {
                icon: <FaHiking />,
                title: 'Endless hiking',
                info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, voluptatum.'
            },
            {
                icon: <FaShuttleVan />,
                title: 'free shuttle',
                info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, voluptatum.'
            },
            {
                icon: <FaBeer />,
                title: 'strongest beer',
                info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, voluptatum.'
            }
        ]
    }

    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        );
    }
}
