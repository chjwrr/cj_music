export interface MV {
  id: number;
  name: string;
  status: number;
  imgurl: string;
  imgurl16v9: string;
  artist: Artist;
  artistName: string;
  duration: number;
  playCount: number;
  publishTime: string;
  subed: boolean;
}

interface Artist {
  img1v1Id: number;
  topicPerson: number;
  trans: string;
  musicSize: number;
  picUrl: string;
  img1v1Url: string;
  albumSize: number;
  briefDesc: string;
  alias: any[];
  picId: number;
  name: string;
  id: number;
  img1v1Id_str: string;
}