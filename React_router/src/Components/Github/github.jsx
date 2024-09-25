import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Github = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("https://api.github.com/users/vinayjoshi434")
      .then((res) => res.json())
      .then((data)=>{
           console.log(data);
           setData(data)
      })
      
  }, []);

  return (
    <div className="flex flex-col my-2">
      <h1 className="text-center text-2xl text-white">Github Info:</h1>

      <div className="flex justify-between m-12 items-center ">
        <img  className="rounded-3xl" src={data.avatar_url} alt="" width={300} />
        <h2 className="text-2xl text-purple-800 text font-medium ">Username: {data.login}</h2>
        <h3>{data.bio}</h3>
      </div>
    </div>
  );
};

export default Github;
