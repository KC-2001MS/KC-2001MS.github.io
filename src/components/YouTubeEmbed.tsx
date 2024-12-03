type YouTubeEmbedProps = {
  videoId: string; // YouTube動画のIDを指定
};

const YouTubeEmbed = ({ videoId }: YouTubeEmbedProps) => {

  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
      <iframe
        width="560"
        height="315"
        src={embedUrl}
        title="YouTube video player"
        frameBorder="0"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default YouTubeEmbed;