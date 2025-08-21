function addVideo(videos, video) {
  return [...videos, video];
}

function findVideo(videos, id) {
  return videos.find((v) => v.id === id);
}

module.exports = { addVideo, findVideo };
