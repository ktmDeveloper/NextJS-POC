import { IIndicator } from '../../slider.types';

export const SliderIndicator: React.FunctionComponent<IIndicator> = (props: IIndicator): JSX.Element => {
    const { index, activeIndex, onIndicatorClick } = props;
    const hanldeKeyPress: (ev: React.KeyboardEvent<HTMLDivElement>) => void = (
        ev: React.KeyboardEvent<HTMLDivElement>
    ): void => {
        if (ev.key === 'Enter') {
            ev.preventDefault();
            onIndicatorClick();
        }
    };
    return (
        <li>
            <span
                className={
                    index == activeIndex ? 'carousel__indicator carousel__indicator--active' : 'carousel__indicator'
                }
                role="button"
                tabIndex={0}
                onClick={onIndicatorClick}
                onKeyPress={hanldeKeyPress}
            ></span>
            <style jsx>{`
                .carousel__indicators {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    margin-top: 20px;
                }

                .carousel__indicators li:nth-of-type(n + 2) {
                    margin-left: 9px;
                }

                .carousel__indicator {
                    display: block;
                    width: 24px;
                    height: 3px;
                    background-color: #111;
                    cursor: pointer;
                    opacity: 0.15;
                    transition: opacity 0.15s cubic-bezier(0.4, 0, 1, 1);
                }

                .carousel__indicator:hover {
                    opacity: 0.5;
                }

                .carousel__indicator--active,
                .carousel__indicator--active:hover {
                    opacity: 0.75;
                }
            `}</style>
        </li>
    );
};
