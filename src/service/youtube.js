class Youtube {
  constructor(key) {
    this.key = key;
    this.getRequestOption = {
      method: "GET",
      redirect: "follow",
    };
  }

  async mostPopular() {
    return fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
      this.getRequestOption
    )
      .then((response) => response.json()) // txt -> json 으로 바꿔주는 게 좋다.
      .then((result) => result.items);
  }

  async search(query) {
    return fetch(
      `https://www.googleapis.com/youtube/v3/search/?part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`,
      this.getRequestOption
    )
      .then((response) => response.json())
      .then((result) =>
        result.items.map((item) => ({ ...item, id: item.id.videoId }))
      );
  }
}

export default Youtube;
