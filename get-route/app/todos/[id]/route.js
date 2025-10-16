import data from "../../../data.json"

export async function GET(request, { params }) {
    const { id } = await params;
    console.log(id)


    return Response.json(data[Number(id)])
}