import { ISlideProps } from '../../slider.types';

export const SliderSlide: React.FunctionComponent<ISlideProps> = (props: ISlideProps): JSX.Element => {
    const { index, slide, activeIndex } = props;
    return (
        <li className={index == activeIndex ? 'carousel__slide carousel__slide--active' : 'carousel__slide'}>
            <p className="carousel-slide__content">{slide.content}</p>
            <p>
                <strong className="carousel-slide__author text-ggg">{slide.author}</strong>,{' '}
                <small className="carousel-slide__source">{slide.source}</small>
            </p>
            <style jsx>{`
                .carousel__slide {
                    margin-right: auto;
                    margin-left: auto;
                    display: none;
                    max-width: 900px;
                    list-style-type: none;
                    text-align: center;
                }

                @media (max-width: 991px) {
                    .carousel__slide {
                        padding-right: 60px;
                        padding-left: 60px;
                    }
                }

                .carousel__slide--active {
                    display: block;
                }

                .carousel-slide__content {
                    margin-bottom: 19px;
                    font-family: 'Open Sans', 'Trebuchet MS', sans-serif;
                    font-size: 16px;
                }

                @media (max-width: 991px) {
                    .carousel-slide__content {
                        font-size: 18px;
                    }
                }

                .carousel-slide__author,
                .carousel-slide__source {
                    font-family: 'Roboto', arial, sans-serif;
                    font-size: 14px;
                }

                @media (min-width: 992px) {
                    .carousel-slide__author,
                    .carousel-slide__source {
                        font-size: 16px;
                    }
                }

                .carousel-slide__source {
                    font-style: italic;
                    color: #888;
                }
            `}</style>
        </li>
    );
};
