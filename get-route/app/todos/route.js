import data from "../../data.json";
import fs from "fs/promises"

export function GET(request) {
  // console.log("Running GET");
  // return new Response(JSON.stringify(data), { headers: { "Content-Type": "application/json" } })
  // console.log(request);
  return Response.json(data);

}

export async function POST(request) {
  const newData = await request.json();
  // console.log(newData);
  data.push(newData);

  await fs.writeFile("data.json", JSON.stringify(data, null, 2));

  return Response.json({ success: true, message: "ok", data }, {
    status: 201
  })
}