import data from "../../data.json"

export function GET(request) {
  console.log("Running GET");
  // return new Response(JSON.stringify(data), { headers: { "Content-Type": "application/json" } })
  console.log(request);
  return Response.json(data);

}