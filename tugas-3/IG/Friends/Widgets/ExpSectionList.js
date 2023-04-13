import React from "react";
import UserItems from "./UserItems";
import { ScrollView } from "react-native";

const ExpSectionList = ({Users}) => {

  return (
    <ScrollView>
        {Users.map((v,index) =>(
            <UserItems item={v} key={index} />
        ))}
    </ScrollView>
  );
};

export default ExpSectionList;
