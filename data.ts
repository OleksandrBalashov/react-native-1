export const posts = [
  {
    id: 1,
    image: require("./assets/images/forest.jpg"),
    description: "Ліс",
    location: {
      name: "Ivano-Frankivs'k region",
      latitude: 48.160076,
      longitude: 24.49985,
    },
    country: "Ukraine",
    userId: 1,
    comments: [
      {
        user: {
          id: 2,
          logoImage:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuWgg1mjdrrer5asSh0TiJKDkdg40UEHc3uw&s",
        },
        comment: "Яке чудове місце! Природа просто зачаровує 🌿✨",
        date: "09 червня, 2020 | 09:20",
        id: 1,
      },
      {
        user: {
          id: 4,
          logoImage:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuWgg1mjdrrer5asSh0TiJKDkdg40UEHc3uw&s",
        },
        comment: "Яке чудове місце! Природа просто зачаровує 🌿✨",
        date: "09 червня, 2020 | 09:20",
        id: 4,
      },
      {
        user: {
          id: 1,
          logoImage: "https://banner2.cleanpng.com/20180329/zue/avijk4azb.webp",
        },
        comment: "Дякую за коментарій",
        date: "09 червня, 2020 | 09:20",
        id: 2,
      },
      {
        user: {
          id: 3,
          logoImage:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuWgg1mjdrrer5asSh0TiJKDkdg40UEHc3uw&s",
        },
        comment:
          "Тут так спокійно і красиво! Місце, де хочеться залишитися надовго",
        date: "09 червня, 2020 | 09:20",
        id: 3,
      },
    ],
    likes: 20,
  },
  {
    id: 2,
    image: require("./assets/images/sunrize.jpg"),
    description: "Сонце",
    location: {
      name: "Ivano-Frankivs'k region",
      latitude: 48.160076,
      longitude: 24.49985,
    },
    country: "Ukraine",
    userId: 1,
    comments: [
      {
        user: {
          id: 2,
          logoImage:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuWgg1mjdrrer5asSh0TiJKDkdg40UEHc3uw&s",
        },
        comment: "Яке чудове місце! Природа просто зачаровує 🌿✨",
        date: "09 червня, 2020 | 09:20",
        id: 1,
      },
      {
        user: {
          id: 1,
          logoImage: "https://banner2.cleanpng.com/20180329/zue/avijk4azb.webp",
        },
        comment: "Дякую за коментарій",
        date: "09 червня, 2020 | 09:20",
        id: 2,
      },
      {
        user: {
          id: 3,
          logoImage:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuWgg1mjdrrer5asSh0TiJKDkdg40UEHc3uw&s",
        },
        comment:
          "Тут так спокійно і красиво! Місце, де хочеться залишитися надовго",
        date: "09 червня, 2020 | 09:20",
        id: 3,
      },
    ],
    likes: 10,
  },
];

export const user = {
  id: 1,
  name: "Natalia",
  secondName: "Romanova",
};
