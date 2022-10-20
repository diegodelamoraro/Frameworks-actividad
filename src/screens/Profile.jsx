import ProfileComponent from "../utils/profile";

export default function Profile() {
  return (
    <ProfileComponent
      avatar={require("../images/diego.jpeg")}
      username={"@diego"}
      bio={`Sed ut perspiciatis unde omnis iste natus error sit voluptatem
accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
illo inventore veritatis et quasi architecto beatae vitae dicta sunt
explicabo.`}
    />
  );
}
