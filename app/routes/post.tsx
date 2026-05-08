import {
  Form,
  Link,
  NavLink,
  redirect,
  useFetcher,
  useNavigate,
} from "react-router";
import type { Route } from "./+types/post";

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  const postId = params.postId;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
  );
  return await res.json();
}

// =============== FOR WORKING WITH DATABASE ======================
// export async function loader({ params }: Route.LoaderArgs) {
//   const product = await db.getProduct(params.id)
//   return product
// }

export async function clientAction({ params }: Route.ClientActionArgs) {
  try {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`, {
      method: "DELETE",
    });
    return { isDeleted: true };
  } catch (err) {
    return { isDeleted: false };
  }
}

export default function Post({ loaderData }: Route.ComponentProps) {
  const fetcher = useFetcher();
  const navigate = useNavigate();

  const isDeleted = fetcher.data?.isDeleted;

  return (
    <div>
      {!isDeleted && (
        <>
          <p>Title: {loaderData.title}</p>
          <p>Body: {loaderData.body}</p>
        </>
      )}
      <NavLink to="/about">About</NavLink>
      <button onClick={() => navigate("/")}>Redirect</button>
      <fetcher.Form method="delete">
        <button type="submit">Delete</button>
      </fetcher.Form>
    </div>
  );
}
