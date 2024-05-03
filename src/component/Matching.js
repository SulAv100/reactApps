import React, {useState} from 'react'
import { useEffect } from 'react';

export default function Matching() {
    

    const [value, setValue] = useState("");
    
    const books = [
        { title: "The Catcher in the Rye", author: "J.D. Salinger", genre: "Fiction" },
        { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction" },
        { title: "1984", author: "George Orwell", genre: "Fiction" },
        { title: "Pride and Prejudice", author: "Jane Austen", genre: "Romance" },
        { title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy" }
      ];

     

      let updatedArray =[];

    //   const handleFiltering = (event)=>{

    //     for(let i =0;i <books.length;i++){
    //         if(books[i].genre.toLowerCase() === value.toLowerCase()){
    //             updatedArray.push(books[i]);
    //         }else{
    //             console.log( books[i].genre+" didn't existed");
    //         }
    //     }
    //     console.log(updatedArray);
    //   }

      const handleUpdatedString = (event)=>{
        const newData = event.target.value;
        setValue(newData);
      }

    const handleFiltering = (event)=>{
        
        books.map((item,index)=>{
            if(item.genre.toLowerCase() === value.toLowerCase()){
                updatedArray.push(item);
                
            }
        });
        console.log(updatedArray);
    }
  return (
    <>

    <input type="text" id='searchValue'  value={value} onChange={handleUpdatedString}/>
        <button onClick={handleFiltering}>Submit Button</button>
    </>
)
}
