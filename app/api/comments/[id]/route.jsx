//  amra ekta particular id ta hit kortesi and oi id ta amra return kore dibo
//  id ta hit kore comment ta find korbo - this is our work for now !
{
  /**
   * we are not going to get the entire thing from the request
   * we are going to get request body from the request -> menaing when we were doing
   * the post request only the last object that we wanted to insert was the request body
   * that is the part that we might get from the request
   *
   * route er moddhe ja ase oita browser er address bar e daoa jinish potro
   * we are getting this thing from the second parameter of next hjs
   * which is GET(rquest, context)
   *
   * context is an object that comes with the fucking request
   * params - will be an object that is part of that context and se we can do the destructuring
   * directly from the () as well !
   *
   */
}
import comments from "@/app/data/comments";

export async function GET(_request, { params }) {
  //   return new Response();
  const commentId = params.id;
  //    find the comment that we would want to edit
  const commentToEdit = comments.find(
    (thatComment) => thatComment.id === parseInt(commentId),
  );

  //   witar khetre 200 response geleo problem nai but na -
  return new Response(JSON.stringify(commentToEdit), {
    headers: { "Content-Type": "application/json" },
    status: 201,
  });
}

export async function PATCH(request, { params }) {
  const commentBodyToBePatched = await request.json();
  //   return new Response();
  const commentId = params.id;
  //    find the comment that we would want to edit
  const indexOFCommentToEdit = comments.findIndex(
    (thatComment) => thatComment.id === parseInt(commentId),
  );

  comments[indexOFCommentToEdit].text = commentBodyToBePatched.text;

  //   witar khetre 200 response geleo problem nai but na -
  return Response.json(comments[indexOFCommentToEdit]);
}

export async function DELETE(request, { params }) {
  const commentId = params.id;
  //    find the comment that we would want to edit
  const indexOFCommentToDelete = comments.findIndex(
    (thatComment) => thatComment.id === parseInt(commentId),
  );
  const commentToDelete = comments[indexOFCommentToDelete];
  comments.splice(indexOFCommentToDelete, 1);

  //   witar khetre 200 response geleo problem nai but na -
  return Response.json(commentToDelete);
}
