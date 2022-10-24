import Post from "./post";
import Loading from "./loading";
export default function PostListComponent({ posts }) {
  let condition = null;
  if (posts != null) {
    condition = posts.length;
  }
  return (
    <>
      {typeof condition === "undefined" || condition == null ? (
        <Loading />
      ) : condition === 0 ? (
        <>Sorry, we couldn't find any results</>
      ) : (
        <div className="row">
          {posts.map((item) => (
            <Post
              key={item.id}
              id={item.id}
              createdAt={new Date(item.createdAt)}
              updatedAt={new Date(item.updatedAt)}
              author={item.author}
              text={item.text}
              comments={item.comments}
              image={item.image}
            />
          ))}
        </div>
      )}
    </>
  );
}
