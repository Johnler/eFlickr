
export interface IState {
    screen?: string;
    fav_photos?: IPhoto[]
}


export interface IPhoto {
  id: string;
  title: string;
  ownername: string;
  url_m: string;
}

