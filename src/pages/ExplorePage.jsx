import React from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import ImageOne from "../assets/image-one.png";
import ImageTwo from "../assets/image-two.png";

const ExplorePage = () => {
    const data =[
        {
            image: ImageOne,
            name: "Vadim Bogulov",
            picture:"Monalisa Digital Arts #001",
            price:0.01,
        },
        {
            image: ImageTwo,
            name: "Vadim Bogulov",
            picture:"Monalisa Digital Arts #001",
            price:0.01,
        },
        {
            image: ImageOne,
            name: "Vadim Bogulov",
            picture:"Monalisa Digital Arts #001",
            price:0.01,
        },
        {
            image: ImageOne,
            name: "Vadim Bogulov",
            picture:"Monalisa Digital Arts #001",
            price:0.01,
        },
        {
            image: ImageOne,
            name: "Vadim Bogulov",
            picture:"Monalisa Digital Arts #001",
            price:0.01,
        },
    ];
    return (
        <>
       <Header />
       <div className= "grid grid-cols-2 gap-y-4"></div>
       {data.map((item) => (
        <Card
        image= {item.image}
        name={item.name}
        picture={item.picture}
        price={item.price}   
        />    
        ))
       }
        </>
    );
};

export default ExplorePage;
