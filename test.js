console.log(hello);

// let age = 18;

// // if(age > 18){
// //     console.log("can get the liscense s");
// // }else if(age <18){
// //     console.log("dont have access to liscenses");
// // }else {
// //     console.log("enter valid age")
// // }

// // let time = 12;
// // let unit = "AM"

// // // console.log(new Date);

// // let a = 12;

// // function abhi() {
// //      a = 13;
// //     //  console.log(a);
// // }

// // abhi()

// // // console.log(a);

// // function technopediasoft(){
// //     console.log("service");
// //     console.log(2+2);
// //     console.log(2*2);
// // }

// // // technopediasoft()

// // const obj = {
// //     name:"abhi",
// //     age:20
// //     ,

// //     sayHello : function(){console.log("hello");}
// // }

// console.log("hello");
// console.log('hi');
// setTimeout(()=>{
//     console.log("settimeout");
// },0)

// console.log("exit");

// function namesex(a,b) {
//     return a+b
// }

// console.log(namesex(14,121))
// let abx = Number(prompt("enter your age"))
// // abx=parseInt(abx)                                         parse and prompt / number
// console.log(typeof abx)

// switch
// let abx = prompt("enter your from 1 to 4");
// // if(abx != "number") return;
// let co = Number(abx);

// switch (co) {
//   case 1:
//     console.log("sunday");

//     break;
//   case 2:
//     console.log("monday");

//   case 3:
//     console.log("tues");

//     break;
//   case 4:
//     console.log("wed");

//     break;
//   default:
//     break;
// }


export default function Navbar(){
    return (
        <>
            <h1> this is navbar</h1>
            <button>Click me </button>
        </>
    )
}


export default function Button ({text,color}){
    return (
        <>
            <button style={{color:color}}>{text}</button>
        </>
    )
}

import Navbar from './datatypes_summary'
export default function Hero(){
    const data = [
        {name:"hitesh"},
        {name:"ankit"}
    ]
    return (
        <>
            <Button text="clickme" color="red"/>
            <ScrollView>
                {data.map((item,index)=>{
                    return (
                        <View>
                            {item.name}
                        </View>
                    )
                })}
            </ScrollView>
        </>
    )
}



const [loading,setLoading]= useState(false);
const data = false
if(data){
    <view></view>
    setLoading(false)
}else {
    setLoading(true)
}


function Image({source}){
<img src={source}/>
}
