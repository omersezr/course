const { addVideo, findVideo } = require('../src/videoManagement');

describe('video management', () => {
  test('adds a video and retrieves it by id', () => {
    const videos = [];
    const video = { id: 1, title: 'Intro' };
    const updated = addVideo(videos, video);
    expect(updated).toHaveLength(1);
    expect(findVideo(updated, 1)).toEqual(video);
  });
});
