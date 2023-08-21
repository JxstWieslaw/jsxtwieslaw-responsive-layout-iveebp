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

function App() {
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
