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
import useDrag from './ScrollBar/useDrag';
import usePreventBodyScroll from './ScrollBar/usePreventBodyScroll';
import { useCallback, useState } from 'react';
import throttle from 'lodash/throttle';

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
          <div className=""></div>
        </div>
      </div>
    </div>
  );
}
export default App;
