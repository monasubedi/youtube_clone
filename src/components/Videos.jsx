import { Box, Stack } from "@mui/material";
import React from "react";
import ChannelCard from "./ChannelCard";
import VideoCard from "./VideoCard";

const Videos = ({ videos, direction }) => {
  if (!videos?.length > 0) return "Loading...";
  return (
    <Stack direction={direction || "row"} flexWrap={"wrap"} gap={2}>
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.channelId && <ChannelCard channelDetail={item} />}
          {(item.id.videoId || item.id.playlistId) && (
            <VideoCard video={item} />
          )}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
