import { IArrow } from '../../slider.types';

export const SliderLeftArrow: React.FunctionComponent<IArrow> = (props: IArrow): JSX.Element => {
    const { onArrowClick } = props;
    return (
        <a href="#" className="carousel__arrow carousel__arrow--left" onClick={onArrowClick}>
            {'<'}
            <style jsx>{`
                .carousel__arrow {
                    position: absolute;
                    top: 50%;
                    display: block;
                    color: #111;
                    cursor: pointer;
                    opacity: 0.75;
                    transform: translateY(-50%);
                    transition: opacity 0.15s cubic-bezier(0.4, 0, 1, 1);
                }

                .carousel__arrow:focus {
                    outline: 0;
                }

                .carousel__arrow:hover {
                    opacity: 0.5;
                }

                .carousel__arrow--left {
                    left: 32px;
                }

                .carousel__arrow--right {
                    right: 32px;
                }
            `}</style>
        </a>
    );
};
