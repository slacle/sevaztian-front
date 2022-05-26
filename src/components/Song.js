import { useParams } from "react-router-dom";

const Song = () => {
  const params = useParams();

  if (/^week-[1-5]?[0-9]-of-201[1-5]$/.test(params.song)) {
    const songName = params.song.replace(/-/g, " ").replace("w", "W");

    document.title = songName + " - sevaztian";

    return (
      <div>
        <p>More details about {songName} coming soon. In the mean time...</p>
        <p>
          <a
            href={`https://soundcloud.com/sevaztian/${params.song}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Listen to {songName} on SoundCloud
          </a>
        </p>
        <p>
          <a
            href={`https://audius.co/sevaztian/${params.song}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Listen to {songName} on Audius
          </a>
        </p>
      </div>
    );
  } else {
    return (
      <>
        <p>You may listen to my songs at...</p>
        <p>
          <a
            href="https://soundcloud.com/sevaztian"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://soundcloud.com/sevaztian
          </a>
        </p>
        <p>
          <a
            href="https://audius.co/sevaztian"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://audius.co/sevaztian
          </a>
        </p>
      </>
    );
  }
};

export default Song;
