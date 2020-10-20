// 定义电影需要的地址
export const nowPlayingListUri =
    "gateway?cityId=310100&pageSize=10&type=1&k=1315199&pageNum=";
    
export const comingSoonListUri =
    "gateway?cityId=310100&pageSize=10&type=2&k=9088710&pageNum=";


//   电影详情的数据  
export const moveDetailUrl = "gateway?k=9193073&filmId=";


//城市列表数据
export const cityListUrl = "gateway?k=5834977";


//影院详情数据
export const cinemaListUrl = "gateway?cityId=310100&ticketFlag=1&k=9924474";


// 个人中心相关 
export const loginUrl = "http://127.0.0.1:3000/api/v1/login";
export const centerUrl = "http://127.0.0.1:3000/api/v1/user_info";