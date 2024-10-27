export async function GET() {
    return Response.json({
        listOFSalah
    })
}

export async function POST(request) {
    const newSalah = await request.json()
    listOFSalah.push({
        id: listOFSalah.length + 1,
        name: newSalah.name,
        time: newSalah.time,
        status: newSalah.status
    })
    return Response.json({
        listOFSalah
    })
}

const listOFSalah = [
    {
        id: 1,
        name: 'Fazr',
        time: 'morning',
        status: 'prayed'
    },
    {
        id: 1,
        name: 'Fazr',
        time: 'morning',
        status: 'prayed'
    },
    {
        id: 1,
        name: 'Fazr',
        time: 'morning',
        status: 'prayed'
    }
]