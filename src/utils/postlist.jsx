import Post from "./post";
import Loading from "./loading";
export default function PostList({ posts }) {
  let condition = null;
  if (posts != null) {
    condition = posts.length;
  }
  return (
    <>
      {typeof condition === "undefined" || condition == null ? (
        <Loading />
      ) : condition == 0 ? (
        <>Sorry, we couldn't find any results</>
      ) : (
        posts.map((item) => (
          <Post
            key={item.id}
            createdAt={item.createdAt}
            autor={item.autor}
            text={item.text}
            comments={item.comments}
            image={item.image}
          />
        ))
      )}
    </>
  );
}
