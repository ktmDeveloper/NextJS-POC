export interface ISlideProps {
    slide: ISlide;
    index: number;
    activeIndex: number;
}

export interface ISlide {
    content: string;
    author: string;
    source: string;
}

export interface ISlider {
    slides: ISlide[];
}

export interface IArrow {
    onArrowClick: (event: React.MouseEvent<HTMLElement>) => void;
}

export interface IIndicator {
    onIndicatorClick: () => void;
    index: number;
    activeIndex: number;
}

// export interface IChildSubGroup {
//     slug: string | null;
//     childSubGroupName: string | null;
//     items?: IItem[];
// }

// export interface ISubGroup {
//     slug: string;
//     subGroupName: string;
//     childSubGroups?: IChildSubGroup[];
//     items?: IItem[];
// }

// export interface IAccordionTilesGroup {
//     slug: string;
//     groupName: string;
//     subGroups: ISubGroup[];
// }

// export interface IAccordionTilesState {
//     libraryGroup: [] | IAccordionTilesGroup[];
//     showModal: boolean;
//     activeContentSlug?: string;
//     setActiveContentSlug?: (text: string) => void;
//     modalWidth?: number;
//     modalHeight?: number;
//     activeVideo?: IItem | null;
//     onVideoPlayClick?: (video: IItem) => void;
//     displayName?: string;
// }
