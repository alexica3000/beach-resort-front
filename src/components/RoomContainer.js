import React, {Component} from 'react';
import RoomFilter from './RoomFilter';
import RoomList from './RoomList';
import {RoomConsumer} from "../context";
import Loading from "./Loading";
import {withRoomConsumer} from "../context";

function roomContainer({context}) {
    const {loading, sortedRooms, rooms} = context;

    if (loading) {
        return <Loading />;
    }

    return (
        <>
            <RoomFilter rooms={rooms} />
            <RoomList rooms={sortedRooms} />
        </>
    );
}

export default withRoomConsumer(roomContainer);

// export default class RoomContainer extends Component {
//     render() {
//         return (
//             <RoomConsumer>
//                 {
//                     (value) => {
//                         const {loading, sortedRooms, rooms} = value;
//
//                         if (loading) {
//                             return <Loading />
//                         }
//
//                         return (
//                             <div>
//                                 test room container
//                                 <RoomFilter rooms={rooms} />
//                                 <RoomList rooms={sortedRooms} />
//                             </div>
//                         );
//                     }
//                 }
//             </RoomConsumer>
//         );
//     }
// }
