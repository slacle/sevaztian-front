import { useParams } from "react-router-dom";

const Song = () => {
  const params = useParams();
  console.log(params.song);
  return <div>this is a song - {params.song}</div>;
};

export default Song;
