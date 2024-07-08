////// example one ///

// For InterView // 
// const Arr = [1,2,3,4,5,6,7]
// const FilterArr = Arr.filter(item => {
//     return item%2 === 0
// })

// console.log(FilterArr)



////// example Two ///
import React from "react";
import { Text, View } from "react-native";

export default function App(): JSX.Element {
const Arr = [1, 2, 3, 4, 5, 6, 7];
const FilterArr = Arr.filter(item => item % 2 === 0
);
console.log(FilterArr);

return (
  <View>
    {FilterArr.map((item, index) => (
      <Text key={index}>{item}</Text>
    ))}
  </View>
)
}
