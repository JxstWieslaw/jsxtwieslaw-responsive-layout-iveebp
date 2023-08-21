import { useEffect, useState, useContext } from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";

function LeftArrowIcon({ children, disabled, onClick }) {
  return (
    <div className="mr-3"
      disabled={disabled}
      onClick={onClick}
      style={{
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        right: "1%",
        opacity: disabled ? "0" : "1",
        userSelect: "none",
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="36.71" height="42.39">
        <defs>
          <linearGradient
            id="prefix__a"
            x1="10.65"
            y1="5.4"
            x2="45.71"
            y2="29.05"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#ff5050" />
            <stop offset=".54" stopColor="#ff7a3f" />
            <stop offset="1" stopColor="#f93" />
          </linearGradient>
        </defs>
        <path
          fill="url(#prefix__a)"
          d="M36.71 21.19v21.2l-18.35-10.6L0 21.19 18.36 10.6 36.71 0v21.19z"
          data-name="Layer 2"
        />
      </svg>
    </div>
  );
}

function RightArrowIcon({ children, disabled, onClick }) {
  return (
    <div className="ml-3"
      disabled={disabled}
      onClick={onClick}
      style={{
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        right: "1%",
        opacity: disabled ? "0" : "1",
        userSelect: "none",
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="36.71" height="42.39">
        <defs>
          <linearGradient
            id="prefix__a"
            x1="-9"
            y1="13.34"
            x2="26.06"
            y2="36.99"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#ff5050" />
            <stop offset=".54" stopColor="#ff7a3f" />
            <stop offset="1" stopColor="#f93" />
          </linearGradient>
        </defs>
        <path
          fill="url(#prefix__a)"
          d="M0 21.19V0l18.36 10.6 18.35 10.59-18.35 10.6L0 42.39v-21.2z"
          data-name="Layer 2"
        />
      </svg>
    </div>
  );
}


export function LeftArrow() {
  const {
    isFirstItemVisible,
    scrollPrev,
    visibleItemsWithoutSeparators,
    initComplete,
  } = useContext(VisibilityContext);

  const [disabled, setDisabled] = useState(
    !initComplete || (initComplete && isFirstItemVisible)
  );

  useEffect(() => {
    // NOTE: detect if whole component visible
    if (visibleItemsWithoutSeparators.length) {
      setDisabled(isFirstItemVisible);
    }
  }, [isFirstItemVisible, visibleItemsWithoutSeparators]);

  return (
    <LeftArrowIcon disabled={disabled} onClick={() => scrollPrev()}/>
  );
}

export function RightArrow() {
  const { isLastItemVisible, scrollNext, visibleItemsWithoutSeparators } =
    useContext(VisibilityContext);

  // console.log({ isLastItemVisible });
  const [disabled, setDisabled] = useState(
    !visibleItemsWithoutSeparators.length && isLastItemVisible
  );

  useEffect(() => {
    if (visibleItemsWithoutSeparators.length) {
      setDisabled(isLastItemVisible);
    }
  }, [isLastItemVisible, visibleItemsWithoutSeparators]);

  return (
    <RightArrowIcon disabled={disabled} onClick={() => scrollNext()}/>
  );
}
