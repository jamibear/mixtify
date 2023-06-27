import "../styles/Spotify.css";

const Songbook = ({ trackList }) => {
  return (
    <div>
      <h1 className="title">Top Tracks</h1>
      <div class="grid grid-cols-5 gap-1 max-w-2xl mx-auto p-4">
        {trackList.items?.map((item) => (
          <img src={item.album.images[0].url} />
        ))}
      </div>
    </div>
  );
};

export default Songbook;
