import './App.css';
import './input.css';
import {
  BackButton,
  UploadButton,
  SearchButton,
  DownloadButton,
  ResetButton,
  SaveButton,
  HomeButton,
  HeadButton,
  BodyButton,
  AnimationButton1,
} from './Buttons';
import { useCallback, useState } from 'react';
import throttle from 'lodash/throttle';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import { LeftArrow, RightArrow } from './ScrollBar/arrows';
// NOTE drag with mouse
import useDrag from './ScrollBar/useDrag';
import './ScrollBar/globalStyles.css';
import usePreventBodyScroll from './ScrollBar/usePreventBodyScroll';
// NOTE: embrace power of CSS flexbox!
import './ScrollBar/hideScrollbar.css';
import { BoyOption, boyFaceInactive } from './Elements/swatch';
import {
  BoyUpperClothObject,
  boyUpperClothes_Objects,
} from './Elements/objects';

function App() {
  //ScrollBar functionalities Start
  const [position, setPosition] = useState(0);
  const { disableScroll, enableScroll } = usePreventBodyScroll();
  const { dragStart, dragStop, dragMove, dragging } = useDrag();

  const handleDrag =
    ({ scrollContainer }) =>
    (ev) =>
      dragMove(ev, (posDiff) => {
        if (scrollContainer.current) {
          scrollContainer.current.scrollLeft += posDiff;
        }
      });

  const restorePosition = useCallback(
    ({ scrollContainer, getItemById, scrollToItem }) => {},
    [position]
  );

  const savePosition = useCallback(
    throttle(({ scrollContainer }) => {
      !!scrollContainer.current &&
        setPosition(scrollContainer.current.scrollLeft);
    }, 500),
    []
  );

  //ScrollBar functionalities Start
  function onWheel(apiObj, ev) {
    const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

    if (isThouchpad) {
      ev.stopPropagation();
      return;
    }

    if (ev.deltaY < 0) {
      apiObj.scrollNext();
    } else if (ev.deltaY > 0) {
      apiObj.scrollPrev();
    }
  }

  const scrollContainerClassName = `
    justify-center`;

  const optionsBarClassName = `overflow-y-auto h-full justify-evenly ${
    1 === true
      ? 'flex flex-col justify-center h-full '
      : 'inline-flex flex-wrap'
  }`;

  return (
    <div className="App">
      <div className="main-container">
        <div className="options-container">
          <div className="options">
            <div className="option-icon_1">
              <HomeButton />
            </div>
            <div className="option-icon_3">
              <BackButton />
              <UploadButton />
              <SearchButton />
            </div>
            <div className="option-icon_2">
              <HeadButton />
              <BodyButton />
            </div>
          </div>
          <div className="avatar">2</div>
          <div className="options">
            <div className="option-icon_2">
              <DownloadButton />
              <SaveButton />
            </div>
            <div className="option-icon_2">
              <AnimationButton1 />
              <ResetButton />
            </div>
          </div>
        </div>
        <div className="menu">
          <div className="lg:absolute lg:bottom-1/4 flex flex-col  h-full lg:h-4/6 w-full lg:w-1/2">
            <div className="title-bar rounded-t-3xl">
              <div className="font-sans p-4 m-2 h-16 text-3xl text-white ">
                Title
              </div>
            </div>
            <div className="options-bar p-1">
              <div onMouseEnter={disableScroll} onMouseLeave={enableScroll}>
                <ScrollMenu
                  LeftArrow={LeftArrow}
                  RightArrow={RightArrow}
                  onInit={restorePosition}
                  onScroll={savePosition}
                  onWheel={onWheel}
                  onMouseDown={() => dragStart}
                  onMouseUp={() => dragStop}
                  onMouseMove={handleDrag}
                  scrollContainerClassName={scrollContainerClassName}
                >
                  {boyFaceInactive.map((options, index) => (
                    <BoyOption key={index} id={index} options={options} />
                  ))}
                </ScrollMenu>
              </div>
            </div>
            <div className="objects-bar  h-3/5">
              {/* <div className="w-auto"> */}
                <div className={optionsBarClassName}>
                  {boyUpperClothes_Objects.map((options, index) => (
                    <BoyUpperClothObject
                      key={index}
                      id={index}
                      options={options}
                    />
                  ))}
                </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
