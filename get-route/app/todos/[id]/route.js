import data from "../../../data.json"

export async function GET(request, { params }) {
    const { id } = await params;
    return Response.json(data[Number(id) - 1])
}

export async function PATCH(request, { params }) {
    let { id } = await params;
    const valueToUpdate = await request.json();

    const updatedData = data.map((item) => item.id === id ? {...item, text: valueToUpdate.text} : item)
    return Response.json(updatedData);
}

export async function DELETE(request, { params }) {
    const { id } = await params;
    
    const updatedData = data.filter((item) => id !== item.id);

    return Response.json(updatedData);
}