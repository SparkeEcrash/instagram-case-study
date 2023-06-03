import Post from "./Post";

export default function Posts() {
  const posts = [
    {
      id: "1",
      username: "jamespark",
      userImage:
        "https://www.thejamespark.com/img-backgrounds/proflie_picture.png",
      img: "https://images.unsplash.com/photo-1682687982134-2ac563b2228b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      caption: "Nice picture",
    },
    {
      id: "2",
      username: "jamespark",
      userImage:
        "https://www.thejamespark.com/img-backgrounds/proflie_picture.png",
      img: "https://images.unsplash.com/photo-1682687982134-2ac563b2228b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      caption: "Cool picture",
    },
    {
      id: "3",
      username: "jamespark",
      userImage:
        "https://www.thejamespark.com/img-backgrounds/proflie_picture.png",
      img: "https://images.unsplash.com/photo-1682687982134-2ac563b2228b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      caption: "Good picture",
    },
    {
      id: "4",
      username: "jamespark",
      userImage:
        "https://www.thejamespark.com/img-backgrounds/proflie_picture.png",
      img: "https://images.unsplash.com/photo-1682687982134-2ac563b2228b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      caption: "Beautiful picture",
    },
    {
      id: "5",
      username: "jamespark",
      userImage:
        "https://www.thejamespark.com/img-backgrounds/proflie_picture.png",
      img: "https://images.unsplash.com/photo-1682687982134-2ac563b2228b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      caption: "Pretty picture",
    },
  ];
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImage}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}
