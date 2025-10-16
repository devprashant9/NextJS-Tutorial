import data from "../../data.json"

export function GET() {
  console.log("Running GET");
  // return new Response(JSON.stringify(data), { headers: { "Content-Type": "application/json" } })
  return Response.json(data);

}