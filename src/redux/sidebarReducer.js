// default state
const initialState = {
  friends: [
    {
      id: 1,
      name: 'John',
      img:
        'https://w7.pngwing.com/pngs/409/621/png-transparent-computer-icons-avatar-male-user-profile-others-logo-monochrome-silhouette.png',
    },
    {
      id: 2,
      name: 'Mia',
      img:
        'https://cdn6.aptoide.com/imgs/f/4/c/f4c2d35ee761f9be3bbeff8750d67c63_icon.png',
    },
    {
      id: 3,
      name: 'Margaret',
      img:
        'https://cdn1.iconfinder.com/data/icons/avatar-97/32/avatar-02-512.png',
    },
  ],
};

const sidebarReducer = (state = initialState, action) => {
  return state;
};

export default sidebarReducer;
