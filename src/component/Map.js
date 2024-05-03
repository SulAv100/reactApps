import React from 'react'

export default function Map() {
    const animeArray = ["Bleach", "Naruto", "Dragon Ball Z", "One Piece"]
  return (
    <>
        <select name="notthingNew" id="selectValue">
            <option value="">Select an Anime</option>
            {
                animeArray.map((item,index)=>{
                    return <option key={index} value={item}>{item}</option>
                })
            }
        </select>
    </>
)
}
