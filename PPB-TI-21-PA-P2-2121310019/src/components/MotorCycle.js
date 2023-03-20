import React from 'react';
import { View, Text } from 'react-native';

const MotorCycle = () => {
    const city = "selatan";
    const peoples = [{Name : "Rafi", fams : "Brother"}, {Name : "Raju", Fams : "sister"}];
    return (
        <View>
            <Text>Minimal perpanjang stnk lah</Text>
            <Text>tipe : {types.type}</Text>
            <Text>model : {types.model}</Text>
            <Text>harga : {types.harga}</Text>
            <TakeARide peoples={peoples}/>
            {Place2Go(city)}
        </View>
    );
    }

export default MotorCycle;

const types = {type : "manual", model : "mio", harga : "20000"}

const TakeARide = ({peoples}) => {
    return (
        <View>
            <Text>Let's go riding with us : </Text>
            {peoples.map((v,index)=>(
                <View key={index}>
                    <Text>{v.Name} / my {v.Fams}</Text>
                </View>
            ))}
        </View>
    
    )
};

function Place2Go (value) {
    return <Text>kita mau pergi ke suatu tempat di {value}, ayo</Text>
}