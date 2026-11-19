import comments from "@/app/data/comments";

export async function GET() {
  return Response.json(comments);
}

// request header has a lot of things related to request for examples cookies and stuffs !

export async function POST(request) {
  const comment = await request.json();
  const newComment = {
    id: comments.length + 1,
    text: comment.text,
  };
  comments.push(newComment); // database e save kore fellam

  {
    // now we are going to give a response to database - ei nao tomader response 1
    // with this response we are going to be sending the updated comments - with the new comment id and text
    //   return Response.json(newComment); Cant do this as we are not going to be working with status code 200 only
    //    this is what we want instead of line 19
  }
  return new Response(JSON.stringify(newComment), {
    headers: { "Content-Type": "application/json" },
    status: 201,
  });
}
