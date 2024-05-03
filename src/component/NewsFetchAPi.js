import React,{useState, useEffect} from 'react'
import '../App.css'

export default function NewsFetchAPi() {


    const [news,setNews] = useState([]);

    useEffect(()=>{
        const url = 'https://newsapi.org/v2/everything?q=tesla&from=2024-04-01&sortBy=publishedAt&apiKey=a84cbc19a96648e3a4b18f45f6087534';

        fetch(url).then((response)=>{
            if(!response.ok){
                throw new Error ("Netowrk reponse was not ok");
            }else{
                return response.json();
            }
        }).then((data)=>{
            console.log(data);
            setNews(data.articles);
        });
    },[]);
  return (
    <>
            <div className="grid-container">

        {
            news.map((item,index)=>{
                return <div className="card" key={index} style={{width: "18rem"}}>
                <img src={item.urlToImage} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                  <a href="#" className="btn btn-primary">{item.url}</a>
                </div>
              </div>
            })
        }
        </div>
    </>
)
}
