import comments from "@/app/data/comments";

export async function GET(_request, { params }) {
  const commentId = params.id;
  const commentToEdit = comments.find(
    (thatComment) => thatComment.id === parseInt(commentId),
  );

  return new Response(JSON.stringify(commentToEdit), {
    headers: { "Content-Type": "application/json" },
    status: 201,
  });
}

export async function PATCH(request, { params }) {
  const commentBodyToBePatched = await request.json();
  const commentId = params.id;
  const indexOFCommentToEdit = comments.findIndex(
    (thatComment) => thatComment.id === parseInt(commentId),
  );

  comments[indexOFCommentToEdit].text = commentBodyToBePatched.text;

  return Response.json(comments[indexOFCommentToEdit]);
}

export async function DELETE(request, { params }) {
  const commentId = params.id;
  const indexOFCommentToDelete = comments.findIndex(
    (thatComment) => thatComment.id === parseInt(commentId),
  );
  const commentToDelete = comments[indexOFCommentToDelete];
  comments.splice(indexOFCommentToDelete, 1);

  return Response.json(commentToDelete);
}
