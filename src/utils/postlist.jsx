import Post from "./post";
import Loading from "./loading";
export default function PostList({ posts }) {
  const condition = posts.length == 0;
  return (
    <>
      {condition ? (
        <Loading />
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
