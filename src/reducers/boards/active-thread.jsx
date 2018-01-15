export default function() {
  return {
      board_tag: "t",
      title: "Hello",
      views: '12',
      imageCount: '0',
      images: [],
      replyCount: '2',
      posterCount: '2',
      posts: [
        {
          id: 1,
          message: "Hello",
          date: '',
          poster: {
            userID: 1,
            username: 'm!lk',
            avatarUrl: "https://i.redd.it/ibcr0wkcxlpz.jpg"
          }
        },
        {
          id: 2,
          message: "fuck you",
          date: '',
          poster: {
            userID: 2,
            username: 'rantahu',
            avatarUrl: "https://i.redd.it/ibcr0wkcxlpz.jpg"
          }
        },
        {
          id: 3,
          message: "goodbye",
          date: '',
          poster: {
            userID: 1,
            username: 'm!lk',
            avatarUrl: "https://i.redd.it/ibcr0wkcxlpz.jpg"
          }
        },
      ],
      posters: []
  }
}
