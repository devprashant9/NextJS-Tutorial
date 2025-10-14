import React from 'react'

const ToDOs = async () => {

  const slowResponse = await fetch("https://procodrr.vercel.app/?sleep=2000")
  const slowData = await slowResponse.json();
  console.log(slowData);

  const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
  const data = await res.json();
  // console.log(data);
  return (
    <div>
      {
        data.map((item: { userId: number, id: number, title: string, completed: boolean }) => (
          <div style={{
            backgroundColor: "tomato"
          }} key={item.id}>
            <p>{item.title}</p>
            <input type="checkbox" name="" id="" checked={item.completed} readOnly />
          </div>
        ))
      }
    </div>
  )
}

export default ToDOs;
