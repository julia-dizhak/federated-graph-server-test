const mocks = {
  Query: () => ({
    tracksForHome: () => [...new Array(2)],
  }),
  Track: () => (
    {
      id: () => "track_01",
      title: () => "Astro Kitty, Space Explorer",
      author: () => {
        return {
          name: "Grumpy Cat",
          photo:
            "https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg",
        };
      },
      thumbnail: () =>
        "https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg",
      length: () => 1210,
      modulesCount: () => 1,
    },
    {
      id: () => "track_02",
      title: () => "test",
      author: () => {
        return {
          name: "Grumpy Cat",
          photo:
            "https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg",
        };
      },
      thumbnail: () =>
        "https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg",
      length: () => 0,
      modulesCount: () => 6,
    },
    {
      id: () => "track_03",
      title: () => "test 1",
      author: () => {
        return {
          name: "Grumpy Cat",
          photo:
            "https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg",
        };
      },
      thumbnail: () =>
        "https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg",
      length: () => 12,
      modulesCount: () => 6,
    }
  ),
};

module.exports = mocks;
