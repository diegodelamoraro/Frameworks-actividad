import { Player } from "@lottiefiles/react-lottie-player";
export default function Loading() {
  // return <img alt="loading" src={require("../images/loading.gif")} />;
  return (
    <div className="row">
      <div className="col-12 text-center">
        <Player
          src="https://assets10.lottiefiles.com/packages/lf20_a2chheio.json"
          className="player"
          loop
          autoplay
          style={{ height: "300px", width: "300px" }}
        />
        {/* <img
          alt="loading"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"
          className="img-response"
          // style={{ width: "50px" }}
        /> */}
        <br />
        Loading..
      </div>
    </div>
  );
}
