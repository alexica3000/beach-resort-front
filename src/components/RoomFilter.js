import React, {Component} from 'react';
import {useContext} from 'react';
import {RoomContext} from "../context";
import Title from "./Title";

export default class RoomFilter extends Component {

    static contextType = RoomContext;

    componentDidMount() {
        const context = this.context;
    }

    render() {
        // const context = useContext(RoomContext);
        const {rooms} = this.props;
        const {
            handleChange,
            type,
            capacity,
            price,
            minPrice,
            maxPrice,
            minSize,
            maxSize,
            breakfast,
            pets
        } = this.context;
        let types = this.getUnique(rooms, 'type');
        types = ['all', ...types];
        types = types.map((item, index) => {
            return <option value={item} key={index}>{item}</option>
        });
        let people = this.getUnique(rooms, 'capacity');
        people = people.map((item, index) => {
            return <option key={index} value={item}>{item}</option>
        })


        return (
            <section className="filter-container">
                <Title title="search rooms" />
                <form className="filter-form">
                    <div className="form-group">
                        <label htmlFor="type">room type</label>
                        <select
                            name="type"
                            id="type"
                            value={type}
                            className="form-control"
                            onChange={handleChange}
                        >{types}</select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="capacity">guests</label>
                        <select
                            name="capacity"
                            id="capacity"
                            value={capacity}
                            className="form-control"
                            onChange={handleChange}
                        >{people}</select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">room price ${price}</label>
                        <input
                            type="range"
                            name="price"
                            min={minPrice}
                            max={maxPrice}
                            id="price"
                            value={price}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                </form>
            </section>
        );
    }

    getUnique (items, value) {
        return [...new Set(items.map(item => item[value]))];
    }
}
