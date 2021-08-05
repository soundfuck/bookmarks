import ReactPlayer from 'react-player'
import { useState, useEffect, useRef } from 'react'

// spoti:
// https://open.spotify.com/embed/track/79k4PkE9Hllo7OqZm5Q01R
// https://open.spotify.com/track/79k4PkE9Hllo7OqZm5Q01R?si=40f5fd43e2124966
// 79k4PkE9Hllo7OqZm5Q01R

const items = [
  {
    artist: 'Babyfather',
    track: 'God Hour',
    url: 'https://open.spotify.com/embed/track/79k4PkE9Hllo7OqZm5Q01R',

    source: 'spotify',
  },
  {
    artist: 'Hype Williams',
    track: 'The Attitude Era',
    url: 'https://youtu.be/pQJ3wauYJHk?t=1333',
    source: 'youtube',
    timecodes: ['22:00'],
  },
  {
    artist: 'Rinse FM',
    track: 'Dr Banana with Ponura',
    url: 'https://soundcloud.com/rinsefm/drbanana250621#t=1:57:25',
    source: 'soundcloud',
    timecodes: ['1:57:25'],
  },
  // {
  //   artist: 'WAVESENSE',
  //   track: 'Undertow',
  //   url:
  //     'https://soundcloud.com/urwaxx/wavesense-undertow-sampler-tapedigital#t=1:12',

  //   source: 'soundcloud',
  //   timecodes: ['1:12'],
  // },
]

// https://youtu.be/pQJ3wauYJHk?t=3903

export default function Home() {
  const [selectedItem, setSelectedItem] = useState(undefined)

  const playingItem = items[selectedItem]
  let playingItemComponent

  if (playingItem) {
    switch (playingItem.source) {
      case 'spotify':
        playingItemComponent = <SpotifyItem url={playingItem.url} />
        break
      case 'soundcloud':
        playingItemComponent = <SoundcloudItem url={playingItem.url} />
        break
      case 'youtube':
        playingItemComponent = <YoutubeItem url={playingItem.url} />
        break
    }
  }

  return (
    <div className="flex flex-col items-center min-h-screen pt-48 w-4/6">
      <div className="flex flex-col max-w-xl">
        {items.map((item, index) => (
          <div
            className={`flex cursor-pointer  ${
              selectedItem === index
                ? 'text-red-600 hover:text-red-600'
                : 'text-gray-900 hover:text-indigo-700'
            }`}
            style={{ fontSize: 36 }}
            onClick={() => setSelectedItem(index)}
          >{`${item.artist} - ${item.track}`}</div>
        ))}
      </div>
      <div className="fixed bottom-0 left-0 w-full">{playingItemComponent}</div>
    </div>
  )
}

const SpotifyItem = ({ url }) => (
  <iframe
    src={url}
    width="100%"
    height="80"
    frameBorder="0"
    allowtransparency="true"
    allow="encrypted-media"
  ></iframe>
)

const SoundcloudItem = ({
  url = 'https://soundcloud.com/rinsefm/drbanana250621#t=1:57:25',
}) => {
  const player = useRef(null)

  useEffect(() => {
    // duration / timecode
    player.current.seekTo(0.1)
  }, [player])

  return (
    <ReactPlayer
      ref={player}
      url={url}
      playing
      volume={0.01}
      width="100%"
      height="130px"
    />
  )
}

const YoutubeItem = ({
  url = 'https://www.youtube.com/embed/pQJ3wauYJHk?start=2527',
}) => {
  return (
    <ReactPlayer
      url={url}
      playing
      volume={0.01}
      controls
      width="100%"
      height="130px"
      config={{
        youtube: {
          playerVars: { showinfo: 1, fs: 0, modestbranding: 1 },
        },
      }}
    />
  )
}
