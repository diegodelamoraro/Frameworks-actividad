import { Player } from "@lottiefiles/react-lottie-player";
export default function Loading() {
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
        <br />
        Loading..
      </div>
    </div>
  );
}
