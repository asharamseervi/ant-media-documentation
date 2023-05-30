import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import Admonition from '@site/src/components/Admonition';
import InfoBox from '@site/src/components/InfoBox';
import VideoPlayer from '@site/src/components/VideoPlayer';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map the "highlight" tag to our <Highlight /> component!
  // `Highlight` will receive all props that were passed to `highlight` in MDX
  Admonition: Admonition,
  VideoPlayer: VideoPlayer,
  InfoBox: InfoBox
};