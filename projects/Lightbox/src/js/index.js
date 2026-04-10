import { Lightbox } from "./Lightbox";

class API {
  constructor({ baseURL, token = "" }) {
    this.baseURL = baseURL;
    this.token = token;
  }

  async fetch({ api = "", query = {} }) {
    const searchParams = new URLSearchParams(query);

    const url = `${this.baseURL}${api}/?${searchParams}`;

    return await axios.get(url);
  }
}

class PixabayAPI {
  constructor(API) {
    this.API = API;
  }

  async fetch({
    query,
    page = 1,
    per_page,
    safesearch = false,
    image_type = "photo",
    orientation = "horizontal",
    category = "",
  }) {
    if (!per_page) per_page = apiConfig.per_page;

    return await this.API.fetch({
      query: {
        key: this.API.token,
        image_type,
        orientation,
        safesearch,
        q: query,
        page,
        per_page,
        category,
      },
    });
  }
}

const imageAPI = new PixabayAPI(
  new API({
    baseURL: "https://pixabay.com/api",
    token: "35790595-0862ce34bbcdea66fb3b3d261",
  })
);

window.addEventListener("load", async () => {
  try {
    const lightbox = new Lightbox();

    lightbox.init(".container");

    const response = await imageAPI.fetch({
      query: "waterfall",
      orientation: "horizontal",
      per_page: 10,
      category: "nature",
    });

    const images = response.data.hits
      .map(({ id, previewURL, largeImageURL, tags }) => {
        return {
          url: previewURL,
          largeUrl: largeImageURL,
          description: tags,
          id,
        };
      });

    lightbox.addImages(images);
  } catch (e) {
    console.error(e);
  }
});
