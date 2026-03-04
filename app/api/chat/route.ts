export async function POST(req: Request) {
  const { message } = await req.json()

  return Response.json({
    reply: "أنا AI Assistant. اسألني عن مشاريعي أو مهاراتي."
  })
}
