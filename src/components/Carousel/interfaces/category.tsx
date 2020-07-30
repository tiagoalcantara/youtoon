export interface ICategory {
    titulo: string;
    cor: string;
    linkExtra: { text: string; };
    videos: IVideo[];
    link: string;
}

export interface IVideo {
    titulo: string
    url: string;
}
