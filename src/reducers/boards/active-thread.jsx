export default function() {
  return {
      board_tag: "t",
      title: "I'M ONLINE",
      views: '12',
      imageCount: '1',
      replyCount: '2',
      posterCount: '2',
      posts: [
        {
          id: 1,
          image: 'http://i.imgur.com/4WV4TzY.png',
          message: "I'M IN YOUR AREA!",
          date: '',
          poster: {
            userID: 1,
            username: 'm!lk',
            avatarUrl: "https://i.redd.it/ibcr0wkcxlpz.jpg"
          }
        },
        {
          id: 2,
          image: null,
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
          image: null,
          message: "goodbye",
          date: '',
          poster: {
            userID: 1,
            username: 'm!lk',
            avatarUrl: "https://i.redd.it/ibcr0wkcxlpz.jpg"
          }
        },
      ],
  }
}
