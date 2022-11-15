// {
//   "name": "林俊杰",
//   "id": 3684,
//   "picId": 109951167878710660,
//   "img1v1Id": 109951167878713400,
//   "briefDesc": "",
//   "picUrl": "http://p1.music.126.net/7636PzUiFMETHU7SAr05FA==/109951167878710661.jpg",
//   "img1v1Url": "http://p1.music.126.net/thrEGQSfLQp0Kd6M5yBEEg==/109951167878713410.jpg",
//   "albumSize": 59,
//   "alias": [
//       "JJ Lin",
//       "Wayne Lim"
//   ],
//   "trans": "",
//   "musicSize": 532,
//   "topicPerson": 0,
//   "showPrivateMsg": null,
//   "isSubed": null,
//   "accountId": null,
//   "picId_str": "109951167878710661",
//   "img1v1Id_str": "109951167878713410",
//   "transNames": null,
//   "followed": false,
//   "mvSize": null,
//   "publishTime": null,
//   "identifyTag": null,
//   "alg": null,
//   "fansCount": 8906340
// }
/**
 * 歌手
 */
export interface Artists {
  name: string;
  id: number;
  picId?: number;
  img1v1Id?: number;
  briefDesc?: string;
  picUrl?: string;
  img1v1Url?: string;
  albumSize?: number;
  alias?: string[];
  trans?: string;
  musicSize?: number;
  topicPerson?: number;
  showPrivateMsg?: any;
  isSubed?: any;
  accountId?: any;
  picId_str?: string;
  img1v1Id_str?: string;
  transNames?: any;
  followed?: boolean;
  mvSize?: any;
  publishTime?: any;
  identifyTag?: any;
  alg?: any;
  fansCount?: number;
}
// const ab:Artists[] = JSON.parse(JSON.stringify(result.artists))
