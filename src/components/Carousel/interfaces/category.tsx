export interface ICategory {
    titulo: string;
    cor: string;
    link_extra: { text: string; };
    videos: IVideo[];
    link: string;
}

export interface IVideo {
    titulo: string
    url: string;
}