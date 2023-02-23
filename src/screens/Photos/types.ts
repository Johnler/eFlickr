export interface IState {
    screen? : string;
    photos?: IData;
    fetching: boolean;
}

export interface IPhotosProps {}


export interface IData {
  page: number;
  pages: number;
  perpage: number;
  photo: IPhoto[]
}

export interface IPhoto {
  id: string;
  title: string;
  ownername: string;
  url_m: string;
}

