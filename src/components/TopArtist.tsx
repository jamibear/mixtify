import "../styles/Spotify.css";

const TopArtist = ({ topArtists }) => {
  return (
    <div>
      <h1 className="title">Top Artists</h1>
      <div className="grid grid-cols-5 gap-1 max-w-2xl mx-auto p-4">
        {topArtists.items?.map((item) => (
          <div className="cover">
            <img src={item.images[0].url} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopArtist;
