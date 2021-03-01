import { useState } from 'react';
import { ISlider } from './slider.types';
import { SliderLeftArrow } from './nested-components/slider-left-arrow/slider-left-arrow';
import { SliderRightArrow } from './nested-components/slider-right-arrow/slider-right-arrow';
import { SliderIndicator } from './nested-components/slider-indicator/slider-indicator';
import { SliderSlide } from './nested-components/slider-slide/slider-slide';

export const Slider: React.FunctionComponent<ISlider> = (props: ISlider): JSX.Element => {
    const { slides } = props;
    const [activeIndex, setActiveIndex] = useState(0);

    const goToPrevSlide = (e: React.MouseEvent<HTMLElement>): void => {
        e.preventDefault();

        let index = activeIndex;
        const slidesLength = slides.length;

        if (index < 1) {
            index = slidesLength;
        }
        --index;
        setActiveIndex(index);
    };

    const goToNextSlide = (e: React.MouseEvent<HTMLElement>): void => {
        e.preventDefault();

        let index = activeIndex;
        const slidesLength = slides.length - 1;

        if (index === slidesLength) {
            index = -1;
        }
        ++index;
        setActiveIndex(index);
    };
    return (
        <div className="carousel">
            <SliderLeftArrow onArrowClick={goToPrevSlide} />

            <ul className="carousel__slides">
                {slides.map((slide, index) => (
                    <SliderSlide key={index} activeIndex={activeIndex} index={index} slide={slide} />
                ))}
            </ul>

            <SliderRightArrow onArrowClick={goToNextSlide} />

            <ul className="carousel__indicators">
                {slides.map((slide, index) => (
                    <SliderIndicator
                        key={index}
                        activeIndex={activeIndex}
                        index={index}
                        onIndicatorClick={setActiveIndex.bind(this, index)}
                    />
                ))}
            </ul>
            <style jsx>{`
                .carousel__indicators {
                    padding: 0;
                    margin: 0;
                    list-style-type: none;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    margin-top: 20px;
                }
                .carousel__slides {
                    padding: 0;
                    margin: 0;
                    list-style-type: none;
                }
                .carousel-container {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    min-height: 210px;
                }

                .carousel {
                    position: relative;
                }
            `}</style>
        </div>
    );
};
export default Slider;
