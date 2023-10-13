import React, { useCallback, useState, useEffect } from 'react';
import debounce from 'lodash.debounce';

import youtubeSearch from '../services/youtube-api';

import SearchBar from './search_bar';
import VideoDetail from './video_detail';
import VideoList from './video_list';

function App(props) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelected] = useState(null);

  const search = (text) => {
    youtubeSearch(text).then((result) => {
      setVideos(result);
      setSelected(result[0]);
    });
  };

  const debouncedSearch = useCallback(debounce(search, 500), []);

  useEffect(() => {
    search('pixar');
  }, []);

  return (
    <div>
      <div id="search-bar">
        <SearchBar onSearchChange={debouncedSearch} />
      </div>

      <div id="video-section">
        <VideoList onVideoSelect={(selection) => setSelected(selection)} videos={videos} />
        <VideoDetail video={selectedVideo} />
      </div>

    </div>
  );
}

export default App;
