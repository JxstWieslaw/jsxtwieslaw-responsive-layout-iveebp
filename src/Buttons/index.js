import './elements.css';

export const HomeButton = ({ onClick }) => {
  return (
    <>
      <svg
        className="hover:cursor-pointer hoverfill "
        onClick={onClick}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 99.95 99.95"
      >
        <defs>
          <linearGradient
            id="linear-gradient"
            x1="49.98"
            x2="49.98"
            y2="99.95"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#3879fb" />
            <stop offset="0.11" stopColor="#3f82f7" />
            <stop offset="0.25" stopColor="#4c94f0" />
            <stop offset="0.4" stopColor="#48a5f8" />
            <stop offset="0.5" stopColor="#44b3ff" />
            <stop offset="0.75" stopColor="#32e3f7" />
            <stop offset="1" stopColor="#70ece1" />
          </linearGradient>
          <linearGradient
            id="linear-gradient-2"
            x1="49.98"
            y1="29.69"
            x2="49.98"
            y2="70.27"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#8348f8" />
            <stop offset="0.07" stopColor="#8051f8" />
            <stop offset="0.2" stopColor="#786bf9" />
            <stop offset="0.34" stopColor="#6d90fa" />
            <stop offset="0.66" stopColor="#6798f8" />
            <stop offset="1" stopColor="#55b3f4" />
          </linearGradient>
        </defs>
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_2-2" data-name="Layer 2">
            <path
              className="applyhere"
              d="M50,7A43,43,0,1,1,7,50,43,43,0,0,1,50,7m0-7a50,50,0,1,0,50,50A50,50,0,0,0,50,0Z"
              fill="url(#linear-gradient)"
              fillOpacity={0.7}
            />
            <path
              className="applyhere"
              d="M75.46,50.57l-1.95,2.37c-.65.78-1.16.82-1.94.17L50.47,35.52l-.5-.41-2.36,2L28.35,53.14A1.13,1.13,0,0,1,26.48,53c-.53-.62-1.05-1.24-1.57-1.87a1.11,1.11,0,0,1,.18-1.86L42,35.2c1.84-1.53,3.67-3.07,5.51-4.58a3.82,3.82,0,0,1,4.24-.52,5.13,5.13,0,0,1,1.09.77l6.88,5.74.4.3c0-.22,0-.38,0-.54V31.1c0-1,.34-1.31,1.32-1.32h5.42c1,0,1.35.34,1.35,1.35q0,6,0,12.09a.92.92,0,0,0,.37.8q3.12,2.55,6.2,5.15a6.15,6.15,0,0,1,.71.81ZM54.38,70.26H66a2,2,0,0,0,2.17-2.2q0-7.35,0-14.68a.94.94,0,0,0-.39-.8q-7-5.73-13.93-11.48L50,37.9c-.17.13-.31.23-.45.35Q40.82,45.42,32.1,52.61a.91.91,0,0,0-.34.81c0,4.81,0,9.62,0,14.43a2.13,2.13,0,0,0,2.42,2.41H45.93V58.16H54V70.23Z"
              fill="url(#linear-gradient-2)"
              fillOpacity={0.7}
            />
          </g>
        </g>
      </svg>
    </>
  );
};

export const BodyButton = ({ onClick, activeElement }) => {
  return (
    <>
      <svg
        className="hover:cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 99.95 99.95"
        onClick={onClick}
      >
        <defs>
          <linearGradient
            id="linear-gradient"
            x1="49.98"
            x2="49.98"
            y2="99.95"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#3879fb" />
            <stop offset="0.11" stopColor="#3f82f7" />
            <stop offset="0.25" stopColor="#4c94f0" />
            <stop offset="0.4" stopColor="#48a5f8" />
            <stop offset="0.5" stopColor="#44b3ff" />
            <stop offset="0.75" stopColor="#32e3f7" />
            <stop offset="1" stopColor="#70ece1" />
          </linearGradient>
          <linearGradient
            id="linear-gradient-2"
            x1="49.98"
            y1="24.54"
            x2="49.98"
            y2="75.4"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#8348f8" />
            <stop offset="0.07" stopColor="#8051f8" />
            <stop offset="0.2" stopColor="#786bf9" />
            <stop offset="0.34" stopColor="#6d90fa" />
            <stop offset="0.66" stopColor="#6798f8" />
            <stop offset="1" stopColor="#55b3f4" />
          </linearGradient>
        </defs>
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_2-2" data-name="Layer 2">
            <path
              d="M50,0A50,50,0,1,1,0,50,50,50,0,0,1,50,0ZM93,50A43,43,0,1,0,50,93,43,43,0,0,0,93,50Z"
              fill="url(#linear-gradient)"
            />
            <path
              d="M50,7A43,43,0,1,1,7,50,43,43,0,0,1,50,7ZM63.79,48.07c2.46.1,3.94-2.25,2.92-4.62-1.14-2.64-2.3-5.27-3.44-7.9s-2.25-5.2-3.4-7.78A5,5,0,0,0,55,24.55q-5.09,0-10.17,0a4.78,4.78,0,0,0-4.64,3c-2.37,5.33-4.68,10.69-7,16a3.12,3.12,0,0,0-.07,2.57A3,3,0,0,0,36,48.07a2.93,2.93,0,0,0,2.86-1.82c.81-1.76,1.55-3.54,2.33-5.3.07-.16.16-.32.24-.48l.12,0V71.26c0,.35,0,.69,0,1a3.41,3.41,0,0,0,4.07,3,3.5,3.5,0,0,0,2.75-3.69V50.56h3.13V64.71c0,2.34,0,4.68,0,7,0,2.89,2.82,4.59,5.19,3.15a3.52,3.52,0,0,0,1.65-3.34q0-15.2,0-30.4v-.69l.11,0c.08.18.18.36.26.55.76,1.72,1.5,3.45,2.27,5.18A3,3,0,0,0,63.79,48.07Z"
              fill="#fff"
            />
            <path
              d="M66.71,43.45c1,2.37-.46,4.72-2.92,4.62a3,3,0,0,1-2.74-1.92c-.77-1.73-1.51-3.46-2.27-5.18-.08-.19-.18-.37-.26-.55l-.11,0v.69q0,15.2,0,30.4a3.52,3.52,0,0,1-1.65,3.34c-2.37,1.44-5.16-.26-5.19-3.15,0-2.34,0-4.68,0-7V50.56H48.43V71.63a3.5,3.5,0,0,1-2.75,3.69,3.41,3.41,0,0,1-4.07-3c0-.34,0-.68,0-1V40.5l-.12,0c-.08.16-.17.32-.24.48-.78,1.76-1.52,3.54-2.33,5.3A2.93,2.93,0,0,1,36,48.07a3,3,0,0,1-2.87-1.92,3.12,3.12,0,0,1,.07-2.57c2.32-5.34,4.63-10.7,7-16a4.78,4.78,0,0,1,4.64-3q5.09,0,10.17,0a5,5,0,0,1,4.83,3.22c1.15,2.58,2.26,5.18,3.4,7.78S65.57,40.81,66.71,43.45Z"
              fill="url(#linear-gradient-2)"
            />
          </g>
        </g>
      </svg>

      {activeElement === 0 && (
        <svg
          className="hover:cursor-pointer  hoverfillEl"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 99.95 99.95"
          onClick={onClick}
        >
          <defs>
            <linearGradient
              id="linear-gradient"
              x1="49.98"
              x2="49.98"
              y2="99.95"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#3879fb" />
              <stop offset="0.11" stopColor="#3f82f7" />
              <stop offset="0.25" stopColor="#4c94f0" />
              <stop offset="0.4" stopColor="#48a5f8" />
              <stop offset="0.5" stopColor="#44b3ff" />
              <stop offset="0.75" stopColor="#32e3f7" />
              <stop offset="1" stopColor="#70ece1" />
            </linearGradient>
            <linearGradient
              id="linear-gradient-2"
              x1="49.98"
              y1="24.55"
              x2="49.98"
              y2="75.4"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#8348f8" />
              <stop offset="0.07" stopColor="#8051f8" />
              <stop offset="0.2" stopColor="#786bf9" />
              <stop offset="0.34" stopColor="#6d90fa" />
              <stop offset="0.66" stopColor="#6798f8" />
              <stop offset="1" stopColor="#55b3f4" />
            </linearGradient>
          </defs>
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_2-2" data-name="Layer 2">
              <path
                className="appliedhere"
                d="M50,7A43,43,0,1,1,7,50,43,43,0,0,1,50,7m0-7a50,50,0,1,0,50,50A50,50,0,0,0,50,0Z"
                fill="url(#linear-gradient)"
                fillOpacity={0.3}
              />
              <path
                className="appliedhere"
                d="M58.41,40.46v.68q0,15.2,0,30.4a3.51,3.51,0,0,1-1.65,3.34,3.42,3.42,0,0,1-5.19-3.14c0-2.35,0-4.69,0-7V50.56H48.43V71.63a3.5,3.5,0,0,1-2.75,3.69,3.4,3.4,0,0,1-4.07-3c0-.35,0-.69,0-1V40.51l-.12,0c-.08.16-.17.31-.24.47-.77,1.77-1.52,3.55-2.33,5.3A2.94,2.94,0,0,1,36,48.08a3,3,0,0,1-2.87-1.93,3.09,3.09,0,0,1,.07-2.56c2.32-5.35,4.63-10.71,7-16a4.79,4.79,0,0,1,4.64-3H55a5,5,0,0,1,4.83,3.22c1.15,2.59,2.26,5.19,3.4,7.78s2.31,5.26,3.44,7.9c1,2.37-.46,4.72-2.92,4.63a3,3,0,0,1-2.74-1.93c-.77-1.72-1.51-3.45-2.27-5.18-.08-.18-.18-.36-.26-.55Z"
                fill="url(#linear-gradient-2)"
                fillOpacity={0.3}
              />
            </g>
          </g>
        </svg>
      )}
    </>
  );
};

export const HeadButton = ({ onClick, activeElement }) => {
  return (
    <>
      <svg
        className="hover:cursor-pointer "
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 99.95 99.95"
        onClick={onClick}
      >
        <defs>
          <linearGradient
            id="linear-gradient"
            x1="49.98"
            x2="49.98"
            y2="99.95"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#3879fb" />
            <stop offset="0.11" stopColor="#3f82f7" />
            <stop offset="0.25" stopColor="#4c94f0" />
            <stop offset="0.4" stopColor="#48a5f8" />
            <stop offset="0.5" stopColor="#44b3ff" />
            <stop offset="0.75" stopColor="#32e3f7" />
            <stop offset="1" stopColor="#70ece1" />
          </linearGradient>
          <linearGradient
            id="linear-gradient-2"
            x1="49.98"
            y1="24.55"
            x2="49.98"
            y2="75.4"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#8348f8" />
            <stop offset="0.07" stopColor="#8051f8" />
            <stop offset="0.2" stopColor="#786bf9" />
            <stop offset="0.34" stopColor="#6d90fa" />
            <stop offset="0.66" stopColor="#6798f8" />
            <stop offset="1" stopColor="#55b3f4" />
          </linearGradient>
        </defs>
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_2-2" data-name="Layer 2">
            <path
              d="M67.89,61.49c1.14-.1,1.52-.62,1.28-1.73a11,11,0,0,0-.39-1.27c-.15-.42-.34-.82-.5-1.2.77-.23,1.54-.4,2.27-.69a6.14,6.14,0,0,0,1.24-.81,1,1,0,0,0,.35-1.36,12.57,12.57,0,0,0-1.07-1.89c-.9-1.33-1.86-2.62-2.75-3.95a4.11,4.11,0,0,1-.59-3.17,19.06,19.06,0,0,0-.35-8.94,15.13,15.13,0,0,0-7.48-9.17,22.68,22.68,0,0,0-9.77-2.69,31.11,31.11,0,0,0-12.87,1.81A14.2,14.2,0,0,0,31.71,30a12.8,12.8,0,0,0-3.18,6.56,52,52,0,0,0-.79,5.25,19.48,19.48,0,0,0,1.63,8.9,43.77,43.77,0,0,0,7.48,12,.89.89,0,0,1,.23.56q-.28,5.91-.59,11.81a2.85,2.85,0,0,1,0,.29H54.34l1.36-5.6a10.45,10.45,0,0,0,5.82,1.6,3.14,3.14,0,0,0,3.34-2.54,12,12,0,0,0,.29-2.25.71.71,0,0,1,.43-.67,14.45,14.45,0,0,0,2-1.25c.77-.58.82-1.08.22-1.85-.36-.46-.8-.86-1.25-1.34C67,61.5,67.47,61.53,67.89,61.49ZM50,7A43,43,0,1,1,7,50,43,43,0,0,1,50,7Z"
              fill="#fff"
            />
            <path
              d="M50,0A50,50,0,1,1,0,50,50,50,0,0,1,50,0ZM93,50A43,43,0,1,0,50,93,43,43,0,0,0,93,50Z"
              fill="url(#linear-gradient)"
            />
            <path
              d="M72.14,54.43a1,1,0,0,1-.35,1.36,6.14,6.14,0,0,1-1.24.81c-.73.29-1.5.46-2.27.69.16.38.35.78.5,1.2a11,11,0,0,1,.39,1.27c.24,1.11-.14,1.63-1.28,1.73-.42,0-.85,0-1.32,0,.45.48.89.88,1.25,1.34.6.77.55,1.27-.22,1.85a14.45,14.45,0,0,1-2,1.25.71.71,0,0,0-.43.67,12,12,0,0,1-.29,2.25,3.14,3.14,0,0,1-3.34,2.54,10.45,10.45,0,0,1-5.82-1.6l-1.36,5.6H36.46a2.85,2.85,0,0,0,0-.29q.3-5.91.59-11.81a.89.89,0,0,0-.23-.56,43.77,43.77,0,0,1-7.48-12,19.48,19.48,0,0,1-1.63-8.9,52,52,0,0,1,.79-5.25A12.8,12.8,0,0,1,31.71,30a14.2,14.2,0,0,1,5.55-3.56,31.11,31.11,0,0,1,12.87-1.81,22.68,22.68,0,0,1,9.77,2.69,15.13,15.13,0,0,1,7.48,9.17,19.06,19.06,0,0,1,.35,8.94,4.11,4.11,0,0,0,.59,3.17c.89,1.33,1.85,2.62,2.75,3.95A12.57,12.57,0,0,1,72.14,54.43Z"
              fill="url(#linear-gradient-2)"
            />
          </g>
        </g>
      </svg>
      {activeElement === 1 && (
        <svg
          className="hover:cursor-pointer  hoverfillEl"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 99.95 99.95"
          onClick={onClick}
        >
          <defs>
            <linearGradient
              id="linear-gradient"
              x1="49.98"
              x2="49.98"
              y2="99.95"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#3879fb" />
              <stop offset="0.11" stopColor="#3f82f7" />
              <stop offset="0.25" stopColor="#4c94f0" />
              <stop offset="0.4" stopColor="#48a5f8" />
              <stop offset="0.5" stopColor="#44b3ff" />
              <stop offset="0.75" stopColor="#32e3f7" />
              <stop offset="1" stopColor="#70ece1" />
            </linearGradient>
            <linearGradient
              id="linear-gradient-2"
              x1="49.98"
              y1="24.55"
              x2="49.98"
              y2="75.4"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#8348f8" />
              <stop offset="0.07" stopColor="#8051f8" />
              <stop offset="0.2" stopColor="#786bf9" />
              <stop offset="0.34" stopColor="#6d90fa" />
              <stop offset="0.66" stopColor="#6798f8" />
              <stop offset="1" stopColor="#55b3f4" />
            </linearGradient>
          </defs>
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_2-2" data-name="Layer 2">
              <path
                className="appliedhere"
                d="M50,7A43,43,0,1,1,7,50,43,43,0,0,1,50,7m0-7a50,50,0,1,0,50,50A50,50,0,0,0,50,0Z"
                fill="url(#linear-gradient)"
                fillOpacity={0.3}
              />
              <path
                className="appliedhere"
                d="M54.34,75.4H36.46a2.58,2.58,0,0,0,0-.29q.3-5.91.59-11.8a.85.85,0,0,0-.23-.56,44,44,0,0,1-7.48-12,19.46,19.46,0,0,1-1.63-8.9,52,52,0,0,1,.79-5.25A12.77,12.77,0,0,1,31.71,30a14,14,0,0,1,5.55-3.56,31,31,0,0,1,12.87-1.82,22.69,22.69,0,0,1,9.77,2.7,15.09,15.09,0,0,1,7.48,9.16,19.09,19.09,0,0,1,.35,9,4.09,4.09,0,0,0,.59,3.16c.89,1.34,1.85,2.62,2.75,3.95a12.57,12.57,0,0,1,1.07,1.89,1,1,0,0,1-.35,1.37,6.09,6.09,0,0,1-1.24.8c-.73.29-1.5.47-2.27.69.16.38.35.78.5,1.2a11.61,11.61,0,0,1,.39,1.27c.24,1.11-.14,1.63-1.28,1.73-.42,0-.85,0-1.32,0,.45.48.89.88,1.25,1.34.6.77.56,1.27-.22,1.85a15.52,15.52,0,0,1-2,1.26.7.7,0,0,0-.43.66,12.16,12.16,0,0,1-.29,2.26,3.14,3.14,0,0,1-3.34,2.53,10.37,10.37,0,0,1-5.82-1.6Z"
                fill="url(#linear-gradient-2)"
                fillOpacity={0.3}
              />
            </g>
          </g>
        </svg>
      )}
    </>
  );
};

export const BackButton = ({ onClick }) => {
  return (
    <>
      <svg
        className="hover:cursor-pointer  hoverfill"
        onClick={onClick}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 99.95 99.95"
      >
        <defs>
          <linearGradient
            id="linear-gradient"
            x1="49.98"
            x2="49.98"
            y2="99.95"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#3879fb" />
            <stop offset="0.11" stopColor="#3f82f7" />
            <stop offset="0.25" stopColor="#4c94f0" />
            <stop offset="0.4" stopColor="#48a5f8" />
            <stop offset="0.5" stopColor="#44b3ff" />
            <stop offset="0.75" stopColor="#32e3f7" />
            <stop offset="1" stopColor="#70ece1" />
          </linearGradient>
          <linearGradient
            id="linear-gradient-2"
            x1="49.98"
            y1="30.62"
            x2="49.98"
            y2="69.34"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#8348f8" />
            <stop offset="0.07" stopColor="#8051f8" />
            <stop offset="0.2" stopColor="#786bf9" />
            <stop offset="0.34" stopColor="#6d90fa" />
            <stop offset="0.66" stopColor="#6798f8" />
            <stop offset="1" stopColor="#55b3f4" />
          </linearGradient>
        </defs>
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_2-2" data-name="Layer 2">
            <path
              className="applyhere"
              d="M50,7A43,43,0,1,1,7,50,43,43,0,0,1,50,7m0-7a50,50,0,1,0,50,50A50,50,0,0,0,50,0Z"
              fill="url(#linear-gradient)"
              fillOpacity={0.7}
            />
            <path
              className="applyhere"
              d="M75.4,68.25a1.4,1.4,0,0,0-.1.16,1.46,1.46,0,0,1-1.35.93,1.49,1.49,0,0,1-1.42-.91c-.33-.63-.65-1.27-1-1.88A31.55,31.55,0,0,0,62.32,56.1a24.76,24.76,0,0,0-12-4.43c-1.55-.15-3.12-.18-4.75-.27V52c0,2.2,0,4.4,0,6.61a1.6,1.6,0,0,1-.81,1.58A1.56,1.56,0,0,1,43.1,60L25.37,48.34a1.5,1.5,0,0,1-.13-2.6L43,31.09a1.52,1.52,0,0,1,1.74-.32,1.53,1.53,0,0,1,.87,1.54c0,2.22,0,4.43,0,6.65v.6c.55,0,1.06,0,1.56,0a27.41,27.41,0,0,1,15.65,4.79A28,28,0,0,1,75.08,63.57c.14.86.22,1.73.32,2.6Z"
              fill="url(#linear-gradient-2)"
              fillOpacity={0.7}
            />
          </g>
        </g>
      </svg>
    </>
  );
};

export const SearchButton = ({ onClick }) => {
  return (
    <svg
      className="hover:cursor-pointer hoverfill"
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 99.95 99.95"
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="49.98"
          x2="49.98"
          y2="99.95"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#3879fb" />
          <stop offset="0.11" stopColor="#3f82f7" />
          <stop offset="0.25" stopColor="#4c94f0" />
          <stop offset="0.4" stopColor="#48a5f8" />
          <stop offset="0.5" stopColor="#44b3ff" />
          <stop offset="0.75" stopColor="#32e3f7" />
          <stop offset="1" stopColor="#70ece1" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-2"
          x1="49.98"
          y1="24.55"
          x2="49.98"
          y2="75.4"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#8348f8" />
          <stop offset="0.07" stopColor="#8051f8" />
          <stop offset="0.2" stopColor="#786bf9" />
          <stop offset="0.34" stopColor="#6d90fa" />
          <stop offset="0.66" stopColor="#6798f8" />
          <stop offset="1" stopColor="#55b3f4" />
        </linearGradient>
      </defs>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_2-2" data-name="Layer 2">
          <path
            className="applyhere"
            d="M50,7A43,43,0,1,1,7,50,43,43,0,0,1,50,7m0-7a50,50,0,1,0,50,50A50,50,0,0,0,50,0Z"
            fill="url(#linear-gradient)"
            fillOpacity={0.7}
          />
          <path
            className="applyhere"
            d="M53.75,24.55h2.08a3.39,3.39,0,0,0,.44.08,18.82,18.82,0,0,1,6.57,1.57A20.18,20.18,0,0,1,75.13,42.06a19.63,19.63,0,0,1-1.38,11.17,20.32,20.32,0,0,1-11.53,11.2,19.35,19.35,0,0,1-9.79,1.2,20.47,20.47,0,0,1-7.65-2.58c-.78-.45-1-.41-1.64.23-3.33,3.33-6.64,6.66-10,10a9.34,9.34,0,0,1-1.79,1.41,4.29,4.29,0,0,1-5.71-.75,5.05,5.05,0,0,1-1.11-2.17V70.54c.38-2,1.68-3.31,3-4.65,2.88-2.85,5.74-5.73,8.61-8.59,1.19-1.2,1.29-1,.39-2.76A19.1,19.1,0,0,1,35,39.37c2.58-8.12,8.17-13,16.59-14.54C52.3,24.7,53,24.64,53.75,24.55ZM70,45.18A15.24,15.24,0,1,0,54.74,60.41,15.23,15.23,0,0,0,70,45.18Zm-22.7-9.41a13.2,13.2,0,0,0-3.93,5.15,2.11,2.11,0,0,0,3,2.74,3,3,0,0,0,1.14-1.46,9,9,0,0,1,7.72-5.11,9.78,9.78,0,0,1,4.17.73,2.08,2.08,0,0,0,2.7-1.26,2.11,2.11,0,0,0-1.25-2.72,14,14,0,0,0-5.25-1A13.37,13.37,0,0,0,47.32,35.77Z"
            fill="url(#linear-gradient-2)"
            fillOpacity={0.7}
          />
        </g>
      </g>
    </svg>
  );
};

export const UploadButton = ({ onClick }) => {
  return (
    <svg
      className="hover:cursor-pointer  hoverfill"
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 99.95 99.95"
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="49.98"
          x2="49.98"
          y2="99.95"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#3879fb" />
          <stop offset="0.11" stopColor="#3f82f7" />
          <stop offset="0.25" stopColor="#4c94f0" />
          <stop offset="0.4" stopColor="#48a5f8" />
          <stop offset="0.5" stopColor="#44b3ff" />
          <stop offset="0.75" stopColor="#32e3f7" />
          <stop offset="1" stopColor="#70ece1" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-2"
          x1="49.98"
          y1="27.16"
          x2="49.98"
          y2="72.79"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#8348f8" />
          <stop offset="0.07" stopColor="#8051f8" />
          <stop offset="0.2" stopColor="#786bf9" />
          <stop offset="0.34" stopColor="#6d90fa" />
          <stop offset="0.66" stopColor="#6798f8" />
          <stop offset="1" stopColor="#55b3f4" />
        </linearGradient>
      </defs>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_2-2" data-name="Layer 2">
          <path
            className="applyhere"
            d="M50,7A43,43,0,1,1,7,50,43,43,0,0,1,50,7m0-7a50,50,0,1,0,50,50A50,50,0,0,0,50,0Z"
            fill="url(#linear-gradient)"
            fillOpacity={0.7}
          />
          <path
            className="applyhere"
            d="M24.55,51a2.83,2.83,0,0,1,1.37-1.8,2.51,2.51,0,0,1,3.59,1.59,4.68,4.68,0,0,1,.1,1v10a5.76,5.76,0,0,0,6,6H64.35a5.75,5.75,0,0,0,6-6c0-3.35,0-6.71,0-10.07a2.57,2.57,0,0,1,1.59-2.57,2.52,2.52,0,0,1,3.46,2.32c0,1,0,2,0,2.93v7.4A10.85,10.85,0,0,1,64.3,72.78c-9.55,0-19.09,0-28.64,0a10.55,10.55,0,0,1-10.13-6.38,19.36,19.36,0,0,1-.88-3c0-.14-.07-.28-.1-.43Zm32.64-7.82h4.32A2.31,2.31,0,0,0,63,42.69a2.12,2.12,0,0,0,0-3.33L51.66,28a2.14,2.14,0,0,0-3.35,0q-5.72,5.7-11.4,11.41a2.74,2.74,0,0,0-.61.84,2.07,2.07,0,0,0,2,2.93c1.51,0,3,0,4.52,0h.56v15a2.83,2.83,0,0,0,3.07,3.1h7.15a3.65,3.65,0,0,0,.88-.08,2.82,2.82,0,0,0,2.17-3v-15Z"
            fill="url(#linear-gradient-2)"
            fillOpacity={0.7}
          />
        </g>
      </g>
    </svg>
  );
};

export const DownloadButton = ({ onClick }) => {
  return (
    <svg
      className="hover:cursor-pointer  hoverfill"
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 99.95 99.95"
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="49.98"
          x2="49.98"
          y2="99.95"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#3879fb" />
          <stop offset="0.11" stopColor="#3f82f7" />
          <stop offset="0.25" stopColor="#4c94f0" />
          <stop offset="0.4" stopColor="#48a5f8" />
          <stop offset="0.5" stopColor="#44b3ff" />
          <stop offset="0.75" stopColor="#32e3f7" />
          <stop offset="1" stopColor="#70ece1" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-2"
          x1="49.98"
          y1="27.73"
          x2="49.98"
          y2="72.22"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#8348f8" />
          <stop offset="0.07" stopColor="#8051f8" />
          <stop offset="0.2" stopColor="#786bf9" />
          <stop offset="0.34" stopColor="#6d90fa" />
          <stop offset="0.66" stopColor="#6798f8" />
          <stop offset="1" stopColor="#55b3f4" />
        </linearGradient>
      </defs>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_2-2" data-name="Layer 2">
          <path
            d="M50,7A43,43,0,1,1,7,50,43,43,0,0,1,50,7m0-7a50,50,0,1,0,50,50A50,50,0,0,0,50,0Z"
            fill="url(#linear-gradient)"
            fillOpacity={0.7}
          />
          <path
            className="applyhere"
            d="M75.4,39.25a8.49,8.49,0,0,1-1.15,1.24Q68.34,45,62.38,49.4a2.67,2.67,0,0,1-1.14.54,1.55,1.55,0,0,1-1.72-1.66c0-1.35,0-2.71,0-4.07v-.59H59c-1.74,0-3.48,0-5.22,0a14.13,14.13,0,0,0-13.14,8c-.11.21-.21.42-.32.62a1.58,1.58,0,0,1-3-.79,17.53,17.53,0,0,1,7.61-14.33,15.61,15.61,0,0,1,7.37-2.84c2.12-.2,4.26-.16,6.4-.23h.86v-.54c0-1.34,0-2.68,0-4a1.63,1.63,0,0,1,.87-1.6,1.59,1.59,0,0,1,1.81.22c4.16,3.12,8.32,6.23,12.46,9.37a4.37,4.37,0,0,1,.75.94Zm-44.46-2h9.47V30.9H28.13a3.24,3.24,0,0,0-3.58,3.56V68.68a3.22,3.22,0,0,0,3.54,3.54H62.35a3.22,3.22,0,0,0,3.52-3.51V53.29H59.5V65.84H30.94Z"
            fill="url(#linear-gradient-2)"
            fillOpacity={0.7}
          />
        </g>
      </g>
    </svg>
  );
};

export const SaveButton = ({ onClick }) => {
  return (
    <svg
      className="hover:cursor-pointer hoverfill"
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 99.95 99.95"
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="49.98"
          x2="49.98"
          y2="99.95"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#3879fb" />
          <stop offset="0.11" stopColor="#3f82f7" />
          <stop offset="0.25" stopColor="#4c94f0" />
          <stop offset="0.4" stopColor="#48a5f8" />
          <stop offset="0.5" stopColor="#44b3ff" />
          <stop offset="0.75" stopColor="#32e3f7" />
          <stop offset="1" stopColor="#70ece1" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-2"
          x1="49.98"
          y1="24.97"
          x2="49.98"
          y2="74.98"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#8348f8" />
          <stop offset="0.07" stopColor="#8051f8" />
          <stop offset="0.2" stopColor="#786bf9" />
          <stop offset="0.34" stopColor="#6d90fa" />
          <stop offset="0.66" stopColor="#6798f8" />
          <stop offset="1" stopColor="#55b3f4" />
        </linearGradient>
      </defs>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_2-2" data-name="Layer 2">
          <path
            className="applyhere"
            d="M50,7A43,43,0,1,1,7,50,43,43,0,0,1,50,7m0-7a50,50,0,1,0,50,50A50,50,0,0,0,50,0Z"
            fill="url(#linear-gradient)"
            fillOpacity={0.7}
          />
          <path
            className="applyhere"
            d="M60,25c1.2,0,2.32,0,3.44,0a1.82,1.82,0,0,1,1.09.51q5,4.9,9.89,9.89a2,2,0,0,1,.53,1.29q0,16.61,0,33.22a5,5,0,0,1-5,5c-1.09,0-2.18,0-3.35,0V60.24a5,5,0,0,0-5.31-5.31H38.64a5,5,0,0,0-5.3,5.3V75a37.51,37.51,0,0,1-4.68-.32A4.78,4.78,0,0,1,25,70.13V30.21a5,5,0,0,1,3.74-5.06A4.72,4.72,0,0,1,29.94,25h9.77L40,25V38a3.35,3.35,0,0,0,3.61,3.59H56.34A3.35,3.35,0,0,0,60,38V25Zm3.33,49.38V60.18a1.7,1.7,0,0,0-1.91-1.92H38.6a1.71,1.71,0,0,0-1.94,1.94V74.87H63.29ZM43.36,25V38.26H56.61V25Z"
            fill="url(#linear-gradient-2)"
            fillOpacity={0.7}
          />
        </g>
      </g>
    </svg>
  );
};

export const SignoutButton = ({ onClick }) => {
  return (
    <svg
      className="hover:cursor-pointer change-styling hoverfill"
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 84.53 84.11"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_7" data-name="Layer 7">
          <path
            className="applyhere"
            d="M67.43,75.85A42.88,42.88,0,0,1,55.4,82,41.85,41.85,0,0,1,42.08,84.1V84A41.6,41.6,0,0,0,55.3,81.72a40.35,40.35,0,0,0,11.75-6.37Z"
            fill="#eff8ff"
            fillOpacity={0.7}
          />
          <path
            className="applyhere"
            d="M42.08,84.1a42.31,42.31,0,0,1-13.57-2.26A42.33,42.33,0,0,1,7,65.25,42,42,0,0,1,1.34,52.64l.58-.15A41.46,41.46,0,0,0,16.54,75.13a40.79,40.79,0,0,0,12,6.57A42,42,0,0,0,42.08,84Z"
            fill="#eff8ff"
            fillOpacity={0.7}
          />
          <polygon
            points="0.58 49.07 0.58 49.06 1.21 48.96 1.21 48.97 0.58 49.07"
            fill="#eff8ff"
          />
          <path
            className="applyhere"
            d="M.58,49.06A42.09,42.09,0,0,1,5.09,22.11,42.63,42.63,0,0,1,25.23,3.54l.42,1A41.34,41.34,0,0,0,1.35,35.35,42,42,0,0,0,1.21,49Z"
            fill="#eff8ff"
            fillOpacity={0.7}
          />
          <polygon
            points="28.65 2.22 28.66 2.22 29 3.23 28.99 3.23 28.65 2.22"
            fill="#eff8ff"
          />
          <path
            className="applyhere"
            d="M28.66,2.22A41.88,41.88,0,0,1,42.39,0,42.58,42.58,0,0,1,56.13,2.33a44.42,44.42,0,0,1,6.4,2.82A43.44,43.44,0,0,1,68.37,9a42.39,42.39,0,0,1,9.42,10.3l-1.22.78a42.08,42.08,0,0,0-9.07-10A40.38,40.38,0,0,0,55.7,3.54,41.61,41.61,0,0,0,42.38,1.16,41.12,41.12,0,0,0,29,3.23Z"
            fill="#eff8ff"
            fillOpacity={0.7}
          />
          <rect
            x="78.29"
            y="22.83"
            width="1.44"
            height="0.01"
            transform="translate(-1.51 39.58) rotate(-27.87)"
            fill="#eff8ff"
          />
          <path
            className="applyhere"
            d="M79.65,22.51A42.52,42.52,0,0,1,84,35.77a41.61,41.61,0,0,1-.21,13.95A41.05,41.05,0,0,1,82,56.47a37.52,37.52,0,0,1-2.94,6.33,42.59,42.59,0,0,1-8.77,10.76L69.79,73A41.7,41.7,0,0,0,82.51,49.49a43.66,43.66,0,0,0,.1-13.5,41.11,41.11,0,0,0-4.24-12.81Z"
            fill="#eff8ff"
            fillOpacity={0.7}
          />
          <polygon
            points="67.44 75.85 67.43 75.85 67.05 75.35 67.06 75.35 67.44 75.85"
            fill="#eff8ff"
          />
          <circle
            className="applyhere fill-transparent"
            cx="42.09"
            cy="42.3"
            r="35.38"
            stroke="#eff8ff"
          />
          <path
            className="applyhere"
            d="M59.79,42.52a18,18,0,0,0-6.12-13.76,2.26,2.26,0,0,1-.21-3.47,2.21,2.21,0,0,1,3,.05,22.08,22.08,0,1,1-33.29,28C18.48,45,19,36.7,24.56,28.82a26.15,26.15,0,0,1,3-3.29,2.18,2.18,0,0,1,3.26,0,2.23,2.23,0,0,1-.28,3.25A17.67,17.67,0,1,0,59.49,45.16C59.66,44.16,59.72,43.15,59.79,42.52Z"
            fill="#1ba1e7"
            fillOpacity={0.7}
          />
          <path
            className="applyhere"
            d="M39.93,31.36c0-2.92,0-5.84,0-8.76a2.19,2.19,0,0,1,4.37-.37,5.15,5.15,0,0,1,0,.56V39.9a3.51,3.51,0,0,1-.09.92,2.18,2.18,0,0,1-2.41,1.58,2.14,2.14,0,0,1-1.88-2.12c0-3,0-6,0-8.92Z"
            fill="#1ba1e7"
            fillOpacity={0.7}
          />
        </g>
      </g>
    </svg>
  );
};

export const ResetButton = ({ onClick }) => {
  return (
    <svg
      className="hover:cursor-pointer hoverfill"
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 99.95 99.95"
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="49.98"
          y1="22.43"
          x2="49.98"
          y2="76.36"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#8348f8" />
          <stop offset="0.07" stopColor="#8051f8" />
          <stop offset="0.2" stopColor="#786bf9" />
          <stop offset="0.34" stopColor="#6d90fa" />
          <stop offset="0.66" stopColor="#6798f8" />
          <stop offset="1" stopColor="#55b3f4" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-2"
          x1="49.98"
          x2="49.98"
          y2="99.95"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#3879fb" />
          <stop offset="0.11" stopColor="#3f82f7" />
          <stop offset="0.25" stopColor="#4c94f0" />
          <stop offset="0.4" stopColor="#48a5f8" />
          <stop offset="0.5" stopColor="#44b3ff" />
          <stop offset="0.75" stopColor="#32e3f7" />
          <stop offset="1" stopColor="#70ece1" />
        </linearGradient>
      </defs>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_2-2" data-name="Layer 2">
          <path
            className="applyhere"
            d="M36.52,37.63c2.56,1.34,5.06,2.65,7.55,4a2,2,0,0,1,.76.6c.28.46-.09.91-.85,1-1.34.1-2.68.15-4,.22l-6.09.26-8.68.4c-.53,0-1.05.09-1.57.1-.84,0-1.06-.2-.9-1,.31-1.64.67-3.28,1-4.92.65-3.05,1.31-6.1,2-9.15.43-2,.84-4,1.31-6a1.1,1.1,0,0,1,.67-.66c.16-.05.56.29.64.53.93,2.6,1.81,5.21,2.71,7.82.07.2.16.39.28.66,4.78-4.62,10.33-7.58,16.94-8.12a26.06,26.06,0,0,1,19.48,6.09A26.58,26.58,0,0,1,44.4,75.62C31.59,72.51,25.28,61.48,24.55,54.18l7.2-1.3c.49-.09.65,0,.78.56A18.29,18.29,0,0,0,44.15,67.05a17.43,17.43,0,0,0,10.36.8,18.08,18.08,0,0,0,12.61-9.66,17.63,17.63,0,0,0,1.59-12.35A17.89,17.89,0,0,0,58.48,33.08a18.5,18.5,0,0,0-20.2,3C37.73,36.59,37.16,37.07,36.52,37.63Zm14.83,6.93A5.42,5.42,0,1,0,56.76,50,5.42,5.42,0,0,0,51.35,44.56Z"
            fill="url(#linear-gradient)"
            fillOpacity={0.7}
          />
          <path
            className="applyhere"
            d="M50,7A43,43,0,1,1,7,50,43,43,0,0,1,50,7m0-7a50,50,0,1,0,50,50A50,50,0,0,0,50,0Z"
            fill="url(#linear-gradient-2)"
            fillOpacity={0.7}
          />
        </g>
      </g>
    </svg>
  );
};

// export const AnimationButton = ({ appliedAnimation, onClick }) => {
//   return (
//     <>
//       <svg
//         id="Layer_2"
//         data-name="Layer 2"
//         className="hover:cursor-pointer  hoverfill"
//         xmlns="http://www.w3.org/2000/svg"
//         xmlnsXlink="http://www.w3.org/1999/xlink"
//         viewBox="0 0 99.95 99.95"
//         onClick={onClick}
//       >
//         <defs>
//           <linearGradient
//             id="linear-gradient"
//             x1="49.98"
//             y1="24.39"
//             x2="49.98"
//             y2="75.56"
//             gradientUnits="userSpaceOnUse"
//           >
//             <stop offset="0" stopColor="#8348f8" />
//             <stop offset=".07" stopColor="#8051f8" />
//             <stop offset=".2" stopColor="#786af8" />
//             <stop offset=".34" stopColor="#6d90fa" />
//             <stop offset=".66" stopColor="#6798f8" />
//             <stop offset="1" stopColor="#55b3f4" />
//           </linearGradient>
//           <linearGradient
//             id="linear-gradient-2"
//             y1="22.67"
//             y2="77.28"
//             xlinkHref="#linear-gradient"
//           />
//           <linearGradient
//             id="linear-gradient-3"
//             y1="22.67"
//             y2="77.28"
//             xlinkHref="#linear-gradient"
//           />
//           <linearGradient
//             id="linear-gradient-4"
//             x1="49.98"
//             y1="22.68"
//             x2="49.98"
//             y2="77.28"
//             xlinkHref="#linear-gradient"
//           />
//           <linearGradient
//             id="linear-gradient-5"
//             y1="26.2"
//             y2="73.76"
//             xlinkHref="#linear-gradient"
//           />
//           <linearGradient
//             id="linear-gradient-6"
//             y1="22.67"
//             y2="77.28"
//             xlinkHref="#linear-gradient"
//           />
//           <linearGradient
//             id="linear-gradient-7"
//             x1="49.98"
//             y1="22.67"
//             x2="49.98"
//             y2="77.28"
//             xlinkHref="#linear-gradient"
//           />
//           <linearGradient
//             id="linear-gradient-8"
//             x1="49.98"
//             y1="0"
//             x2="49.98"
//             y2="99.95"
//             gradientUnits="userSpaceOnUse"
//           >
//             <stop offset="0" stopColor="#3879fb" />
//             <stop offset=".11" stopColor="#3e82f7" />
//             <stop offset=".25" stopColor="#4c94f0" />
//             <stop offset=".4" stopColor="#47a4f8" />
//             <stop offset=".5" stopColor="#44b3ff" />
//             <stop offset=".75" stopColor="#32e3f7" />
//             <stop offset="1" stopColor="#70ece1" />
//           </linearGradient>
//           <linearGradient
//             id="linear-gradient-9"
//             y1="16.93"
//             x2="49.98"
//             y2="83.02"
//             xlinkHref="#linear-gradient"
//           />
//         </defs>
//         <g id="Layer_2-2" data-name="Layer 2">
//           //WHITE BACKGROUND
//           {appliedAnimation !== 6 && (
//             <path
//               fill="#fff"
//               d="m99.95,49.97c0,27.61-22.37,49.98-49.98,49.98S0,77.58,0,49.97,22.37,0,49.97,0s49.98,22.37,49.98,49.97Z"
//             />
//           )}
//           //DANCE
//           {appliedAnimation === 5 && (
//             <path
//               className="applyhere"
//               // fillOpacity={0.7}
//               fill="url(#linear-gradient)"
//               d="m55.61,37.46c-.69-1.93-1.38-3.77-2.01-5.63-.63-1.83.48-3.61,2.37-3.88,1.23-.18,2.54.5,3.01,1.72,1.2,3.1,2.39,6.21,3.48,9.35.66,1.89-.66,3.72-2.73,3.97-1.79.22-3.59.43-5.38.64-1.24.14-1.51.42-1.51,1.66-.02,2.89-.11,5.77-.01,8.66.05,1.36.48,2.71.74,4.06.05.23.11.46.19.78,1.45-.93,2.84-1.83,4.24-2.71,1.9-1.18,4.28-.3,4.94,1.79.42,1.34-.03,2.83-1.2,3.62-2.54,1.71-5.09,3.43-7.7,5.04-2.18,1.35-5.01.07-5.52-2.45-.42-2.05-.73-4.12-1.08-6.18-.07-.45-.25-.79-.73-.84-.46-.05-.7.27-.85.65-.64,1.71-.78,3.48-.6,5.28.25,2.57,1.16,4.92,2.46,7.14,1.33,2.28.19,4.91-2.34,5.38-1.36.25-2.5-.2-3.3-1.35-3.07-4.37-4.1-9.24-3.27-14.47.34-2.14.94-4.23,1.41-6.35.05-.24.09-.48.09-.72,0-2.76,0-5.53,0-8.29,0-.79-.22-1.5-.81-2.03-3.36-3.07-5.12-7-6.16-11.33-.12-.49-.22-.99-.32-1.49-.37-1.93.8-3.72,2.63-4.01,1.93-.31,3.59.92,3.85,2.91.22,1.77.59,3.48,1.42,5.07.24.47.53.91.81,1.36.64.99,1.46,1.65,2.7,1.86,1.84.31,3.65.78,5.46,1.24.81.2,1.59.19,2.4.06,1.06-.18,2.13-.31,3.28-.48Zm-8.03-11.47c-2.74-.07-5.1,2.2-5.16,4.94-.06,2.86,2.2,5.21,5.05,5.24,2.79.03,5.08-2.22,5.12-5.03.04-2.79-2.18-5.07-5.01-5.14Zm-17.28,24.58c.59.45,1.18.43,1.56-.05.37-.47.26-1.1-.3-1.54-.83-.66-1.67-1.29-2.49-1.96-.39-.31-.79-.5-1.28-.26-.49.24-.59.68-.58,1.18,0,1.48,0,2.97,0,4.45,0,.21,0,.42,0,.61-.56-.05-1.03-.12-1.49-.12-1.56,0-2.8,1.13-3.02,2.72-.2,1.44.78,2.87,2.24,3.28,2.26.64,4.29-.87,4.3-3.21,0-1.93,0-3.85,0-5.94.43.34.74.59,1.06.84Zm44.78-11.89c.19.15.38.31.58.44.51.34,1.06.26,1.4-.19.33-.43.31-.99-.15-1.36-.95-.79-1.92-1.56-2.92-2.29-.68-.49-1.54-.03-1.57.81-.03.83,0,1.66,0,2.5,0,.97,0,1.93,0,2.84-.74,0-1.45-.12-2.1.03-1.24.29-2.15,1.06-2.41,2.38-.24,1.26.31,2.46,1.38,3.07,1.2.69,2.44.7,3.65.03,1.13-.63,1.51-1.68,1.5-2.92-.01-1.89,0-3.77,0-5.81.29.22.47.35.64.48Zm-2.57-12.65c-.43-.43-.65-1.06-.99-1.64-.34.59-.57,1.21-.99,1.64-.42.42-1.03.64-1.71,1.03,1.4.43,2.21,1.3,2.7,2.56.49-1.26,1.31-2.13,2.72-2.57-.7-.4-1.32-.61-1.73-1.02Zm-48.23,1.85c-.28.27-.67.42-.92.57.57.57,1.13,1.13,1.61,1.6.51-.5,1.07-1.05,1.63-1.6-.28-.17-.68-.32-.96-.59-.27-.27-.42-.67-.67-1.08-.26.43-.41.83-.69,1.11Zm6.33,43.5c1.02.27,1.51.9,1.91,1.71.27-.9.91-1.38,1.76-1.74-.43-.25-.83-.4-1.11-.68-.28-.27-.43-.67-.76-1.21-.21,1.02-.89,1.49-1.8,1.92Zm40.39-8.02c-.86-.15-1.26-.87-1.75-1.78-.21,1.09-.88,1.52-1.53,1.82.58.58,1.13,1.13,1.61,1.61.5-.5,1.07-1.05,1.67-1.65Z"
//             />
//           )}
//           //RUN
//           {appliedAnimation === 3 && (
//             <path
//               className="applyhere"
//               // fillOpacity={0.7}
//               fill="url(#linear-gradient-2)"
//               d="m61.92,22.67c.32.09.64.17.96.27,2.78.87,4.49,3.65,4.03,6.53-.46,2.84-2.96,4.95-5.83,4.92-2.87-.03-5.34-2.18-5.75-5.02-.45-3.07,1.6-5.96,4.65-6.59.12-.02.23-.07.34-.11.53,0,1.07,0,1.6,0Zm-8.41,40.09c.1.08.16.34.11.48-.22.62-.48,1.22-.72,1.83-.98,2.45-1.98,4.9-2.95,7.36-.6,1.53-.15,3.16,1.1,4.11,1.89,1.43,4.51.7,5.42-1.54,1.58-3.88,3.13-7.77,4.69-11.65.71-1.77.31-3.27-1.19-4.45-1.73-1.37-3.46-2.73-5.19-4.09-.55-.44-1.11-.88-1.68-1.33,1.63-2.79,3.24-5.53,4.88-8.33,1.01,1.55,1.97,3.02,2.94,4.49,1.17,1.77,3.06,2.24,4.92,1.21,2.72-1.5,5.44-3.01,8.15-4.53,1.82-1.02,2.44-3.09,1.48-4.84-.96-1.74-3.06-2.3-4.89-1.3-.86.47-1.71.95-2.56,1.42-.96.53-1.92,1.06-2.89,1.6-.13-.18-.23-.33-.33-.47-1.04-1.59-2.07-3.19-3.13-4.76-.11-.17-.37-.34-.57-.35-3.69-.16-6.4-1.86-8.15-5.12-.08-.15-.33-.31-.51-.31-3.75-.02-7.5-.03-11.25,0-1.33,0-2.37.62-3.02,1.78-1.52,2.71-3.01,5.44-4.5,8.16-.44.8-.53,1.65-.3,2.53.37,1.43,1.52,2.41,3.03,2.61,1.34.17,2.72-.52,3.43-1.79,1.1-1.95,2.17-3.91,3.24-5.88.16-.29.33-.4.66-.39,1.9.02,3.8,0,5.7,0,.13,0,.27.02.46.03-.09.17-.14.29-.21.41-3.22,5.62-6.44,11.25-9.65,16.87-.18.31-.38.39-.72.39-3.95,0-7.89-.03-11.84,0-2.38.02-4.02,2.31-3.32,4.56.47,1.51,1.83,2.46,3.54,2.46,4.55,0,9.1-.02,13.65.01,1.67,0,2.89-.64,3.71-2.11.72-1.3,1.51-2.57,2.3-3.9,2.09,1.65,4.11,3.23,6.12,4.84Z"
//             />
//           )}
//           JUMP
//           {appliedAnimation === 4 && (
//             <path
//               className="applyhere"
//               // fillOpacity={0.7}
//               fill="url(#linear-gradient-3)"
//               d="m67.15,22.67c.65.3,1.25.65,1.52,1.38.27.73.11,1.38-.24,2.04-2.42,4.51-4.82,9.02-7.24,13.52-.21.38-.22.68-.02,1.08,1.75,3.57,2.8,7.36,3.41,11.27.27,1.75.51,3.53.54,5.29.02,1.08.29,2.04.64,3.03,1.13,3.17,2.08,6.39,2.4,9.75.13,1.33.06,2.7-.1,4.04-.19,1.63-1.69,2.62-3.4,2.4-2.04-.26-3.41-1.47-4.4-3.19-.12-.2-.21-.41-.31-.62-.89-1.76-.56-2.97,1.16-4.07-.29-.7-.57-1.42-.87-2.13-.21-.49-.47-.96-.66-1.46-.14-.39-.38-.44-.74-.39-.35.05-.59.11-.68.56-.55,2.73-1.2,5.44-2.43,7.97-1.02,2.1-2.55,3.56-4.92,4-1.46.27-2.9.12-4.33-.21-2.26-.53-4.38-1.44-6.41-2.55-1.2-.65-1.73-1.86-1.39-3.09.33-1.18,1.45-1.99,2.7-1.88.43.04.86.21,1.26.38,1.63.67,3.26,1.34,5.02,1.55,2.24.27,2.19.28,2.67-1.8.68-2.93.9-5.93.99-8.94,0-.15-.02-.32-.07-.47-.45-1.15-.52-2.35-.5-3.56.06-3.78-.41-7.47-1.71-11.05-.13-.36-.31-.54-.66-.67-5.21-1.91-10.43-3.83-15.64-5.75-1.18-.43-1.77-1.35-1.59-2.45.19-1.16,1.29-2.01,2.45-1.75,2.61.6,5.21,1.27,7.81,1.89,2.76.66,5.52,1.33,8.29,1.95,2.67.6,4.82-.28,6.38-2.48,2.42-3.4,4.79-6.83,7.18-10.26.41-.58.81-1.17,1.18-1.78.42-.7.94-1.27,1.72-1.57h.96Zm-9.95,7.56c.03-3.96-3.24-7.17-7.31-7.17-3.91,0-7.13,3.26-7.13,7.24,0,3.93,3.26,7.19,7.2,7.19,3.99,0,7.22-3.23,7.25-7.26Z"
//             />
//           )}
//           HAND_CLAP
//           {appliedAnimation === 8 && (
//             <path
//               className="applyhere"
//               // fillOpacity={0.7}
//               fill="url(#linear-gradient-4)"
//               d="m22.67,52.86c.36-1.77.71-3.54,1.07-5.31.81-4,1.61-8,2.46-12,.59-2.78,3.91-3.84,6.03-1.94.17.15.31.33.49.54-1.28.35-2.36.92-3.26,1.82-1.01,1.01-1.63,2.22-1.91,3.62-1.1,5.46-2.24,10.92-3.32,16.38-.19.98-.2,2-.3,3.04-.53-.92-.83-1.91-1.04-2.93-.08-.36-.14-.73-.22-1.09,0-.71,0-1.42,0-2.13Zm39.79-30.19c-.92.42-1.22,1.15-1.19,2.15.05,1.52.01,3.05.02,4.58,0,1.08.65,1.81,1.6,1.81.95,0,1.6-.73,1.6-1.81,0-1.53-.04-3.05.02-4.58.04-.99-.27-1.72-1.19-2.15h-.85Zm-5,17.18c.07-.16.15-.31.22-.47.82-1.95-.19-4.19-2.22-4.81-1.46-.45-2.72-.05-3.79,1.02-4.31,4.31-8.62,8.62-12.93,12.93-.52.52-.93.63-1.42.38-.48-.25-.66-.69-.53-1.37.3-1.64.63-3.28.89-4.93.13-.82.29-1.67.18-2.47-.26-1.76-1.8-2.94-3.59-2.95-1.76,0-3.2,1.23-3.58,3.06-1.06,5.18-2.11,10.36-3.18,15.55-.82,3.99.07,7.53,2.92,10.47,2.58,2.67,5.22,5.28,7.88,7.88,2.05,2.01,4.56,3.06,7.43,3.14,3.26.09,6.05-1.06,8.35-3.36,5.47-5.47,10.93-10.93,16.4-16.4.13-.13.25-.25.37-.39,1-1.15,1.16-2.79.41-4.12-.75-1.33-2.25-2.04-3.75-1.75-.43.08-.84.26-1.07.33.46-.7,1.13-1.46,1.52-2.35.42-.96.22-1.99-.33-2.91-.52-.87-1.29-1.41-2.26-1.65-.96-.23-1.87-.03-2.75.39.52-.58,1.08-1.11,1.61-1.65,1.45-1.5,1.47-3.69.06-5.12-1.43-1.44-3.66-1.42-5.16.06-.53.52-1.04,1.07-1.56,1.6-.03-.03-.06-.06-.09-.09Zm-5.28-9.12c-1.45-1.25-3.53-1.16-4.96.26-2.02,2-4.01,4.03-6.04,6.02-.52.51-.71.89-.42,1.66.33.87.34,1.85.5,2.79.09-.08.23-.2.36-.34,2.53-2.52,5.06-5.04,7.57-7.58.99-1.01,2.11-1.79,3.6-2.17-.24-.25-.41-.46-.6-.63Zm19.8-.53c1.27-1.22,2.51-2.47,3.74-3.72.66-.67.65-1.62.05-2.26-.58-.6-1.55-.7-2.17-.11-1.35,1.29-2.66,2.61-3.96,3.96-.46.47-.51,1.09-.24,1.69.27.61.77.91,1.5,1.03.37-.19.8-.32,1.08-.59Zm3.64,8.46c.95-.01,1.65-.69,1.66-1.58.01-.91-.7-1.61-1.68-1.61-1.72,0-3.44,0-5.16,0-.98,0-1.69.7-1.69,1.61,0,.91.72,1.58,1.71,1.59.85,0,1.7,0,2.55,0,.87,0,1.74,0,2.61,0Z"
//             />
//           )}
//           SIT_DOWN
//           {appliedAnimation === 2 && (
//             <path
//               className="applyhere"
//               // fillOpacity={0.7}
//               fill="url(#linear-gradient-5)"
//               d="m68.73,51.32v-3.5c-.01-.32-.04-.66-.08-1.02-.41-2.9-2.7-5.26-5.58-5.74-.38-.07-.77-.1-1.16-.1-2.59,0-4.93,1.42-6.11,3.71-.51,1-.76,2.07-.76,3.28v16.87l-4.8-5.96-.2-.24c-.12-.15-.21-.26-.29-.37-.27-.34-.53-.69-.79-1.04-.53-.7-1.02-1.36-1.55-1.98-1.07-1.27-2.59-1.97-4.26-1.97-2.1,0-3.92,1.09-4.86,2.9-2.31,4.44-4.46,8.93-6.84,13.92-.29.6-.31,1.3-.05,1.94.27.7.82,1.25,1.52,1.53.32.13.65.19.99.19,1.02,0,1.94-.61,2.44-1.63,1.07-2.16,2.12-4.32,3.18-6.49l1.64-3.35c.08-.15.16-.3.25-.47l.1-.2,2.18-4.1,2.49,3.92.16.25c.1.16.19.3.27.44l1.39,2.25c.98,1.58,1.96,3.17,2.95,4.75,1.83,2.91,4.89,4.65,8.17,4.65.68,0,1.36-.08,2.02-.23,4.5-1.02,7.54-4.78,7.57-9.37.02-4.28.01-8.63.01-12.84Zm-8.11-24.66c-.35-.13-.79-.24-1.25-.35-.16-.04-.31-.07-.46-.11h-1.17c-.1.02-.21.05-.33.06-3.59.52-5.91,3.69-5.41,7.37.41,2.97,3.17,5.29,6.28,5.29.27,0,.54-.02.81-.06,2.97-.38,5.14-2.64,5.53-5.75.33-2.67-1.39-5.44-4-6.45Z"
//             />
//           )}
//           STAND_UP
//           {appliedAnimation === 1 && (
//             <path
//               className="applyhere"
//               // fillOpacity={0.7}
//               fill="url(#linear-gradient-6)"
//               d="m45.61,77.28c-.67-.28-1.32-.57-1.78-1.18-.48-.65-.6-1.38-.6-2.16,0-5.56,0-11.13.01-16.69,0-.47-.12-.63-.6-.68-.9-.11-1.57-.65-2.01-1.43-1.33-2.35-2.66-4.7-3.97-7.06-.53-.95-.47-1.93.15-2.82,1.63-2.31,3.28-4.6,4.94-6.89.63-.87,1.51-1.32,2.6-1.33,3.75,0,7.5,0,11.25,0,1.11,0,1.99.46,2.64,1.36,1.63,2.26,3.26,4.53,4.88,6.8.67.94.72,1.94.15,2.96-1.22,2.17-2.47,4.32-3.65,6.5-.61,1.12-1.41,1.9-2.8,1.97-.01.22-.03.43-.03.63,0,5.4-.04,10.81.02,16.21.02,1.87-.58,3.21-2.44,3.8h-1.28c-2.01-.85-2.45-1.52-2.45-3.72,0-4.71,0-9.42,0-14.13v-.6h-1.27c0,.25,0,.47,0,.68,0,4.8,0,9.6,0,14.4,0,.37,0,.75-.09,1.11-.3,1.26-1.19,1.92-2.37,2.27h-1.28Zm-2.41-33.39s-.06-.03-.1-.04c-.64.95-1.31,1.87-1.92,2.84-.26.41-.15.89.11,1.32.31.5.61,1,.92,1.5.3.49.6.97.98,1.59v-7.2Zm13.62-.1v7.06c.73-1.02,1.41-2.05,1.97-3.14.15-.3.09-.85-.09-1.15-.54-.91-1.19-1.76-1.88-2.76Zm-6.78-21.12c-3.55-.02-6.45,2.86-6.46,6.42,0,3.55,2.9,6.47,6.44,6.44,3.54-.02,6.4-2.88,6.4-6.42,0-3.53-2.85-6.42-6.38-6.44Z"
//             />
//           )}
//           WALK
//           {appliedAnimation === 0 && (
//             <path
//               className="applyhere"
//               // fillOpacity={0.7}
//               fill="url(#linear-gradient-7)"
//               d="m49.45,22.67c.95.27,1.88.58,2.67,1.24,1.87,1.57,2.42,4.28,1.26,6.42-1.21,2.25-3.72,3.31-6.1,2.59-2.3-.7-3.88-2.85-3.78-5.15.11-2.47,1.8-4.46,4.26-5,.1-.02.2-.07.3-.1.46,0,.92,0,1.39,0Zm-6.06,21.85c0,.19,0,.37,0,.56.05,2.93.08,5.87.17,8.8.04,1.26-.2,2.41-.79,3.53-2.69,5.13-4.54,10.59-6.17,16.13-.47,1.59.38,3.14,1.89,3.61,1.52.47,3.05-.34,3.59-1.92.23-.67.43-1.35.63-2.03,1.35-4.44,2.93-8.79,5.06-12.92.09-.17.27-.28.41-.42.12.16.28.3.34.47.32.89.61,1.78.91,2.67,1.25,3.72,2.49,7.43,3.74,11.15.25.74.59,1.41,1.3,1.82,1.03.59,2.47.44,3.44-.36.97-.8,1.23-1.85.78-3.23-1.39-4.17-2.81-8.34-4.19-12.52-.58-1.75-1.37-3.45-1.47-5.32-.17-3.1-.26-6.21-.37-9.32,0-.05.02-.09.05-.2.16.13.29.24.42.35,1.81,1.43,3.59,2.9,5.44,4.28.88.66,1.84,1.21,2.82,1.71.94.48,1.91.19,2.56-.64,1.13-1.43.84-3.46-.66-4.49-.63-.43-1.29-.81-1.93-1.23-3.46-2.32-6.43-5.17-8.87-8.53-1.99-2.75-6.62-2.61-8.67-.6-2.27,2.23-4.44,4.56-6.36,7.11-.64.85-1.28,1.71-1.82,2.62-.71,1.2-.29,2.73.87,3.53,1.11.77,2.69.57,3.57-.48.52-.63.97-1.32,1.46-1.96.57-.74,1.15-1.47,1.72-2.2l.12.04Z"
//             />
//           )}
//           <path
//             className="applyhere"
//             fillOpacity={appliedAnimation !== 7 ? 1 : 0.7}
//             fill="url(#linear-gradient-8)"
//             d="m49.98,7c23.7,0,42.98,19.28,42.98,42.98s-19.28,42.98-42.98,42.98S7,73.67,7,49.98,26.28,7,49.98,7M49.98,0C22.38,0,0,22.38,0,49.98s22.38,49.98,49.98,49.98,49.98-22.38,49.98-49.98S77.58,0,49.98,0h0Z"
//           />
//           T-POSE/IDLE
//           {(appliedAnimation === 6 || appliedAnimation === 7) && (
//             <path
//               className="applyhere"
//               fillOpacity={0.7}
//               fill="url(#linear-gradient-9)"
//               d="m62.74,28.82c0,4.69-2.72,8.75-6.67,10.68-.26-2.65-2.5-4.72-5.22-4.72s-4.95,2.07-5.22,4.72c-3.95-1.93-6.67-5.99-6.67-10.68,0-6.56,5.32-11.88,11.88-11.88s11.88,5.32,11.88,11.88Zm-11.88,14.23v12.88m.86-12.88h-1.72v12.88h1.72v-12.88Zm-.42,2.28l9.48,1.37.25-1.7-9.84-1.42-12.33,3.39.46,1.66,11.98-3.29Zm-.11,14.58l-1.59-.65-4.33,10.59,1.59.65,4.33-10.59Zm-9.27,12.36l-9.32-1.3-.24,1.71,9.32,1.3.24-1.71Zm30.73-34.28c1.1-1.17,1.36-2.88.64-4.25-.27-.51-.63-.92-1.07-1.22l-.97,1.42c.21.14.38.34.51.6.38.72.23,1.64-.37,2.27l-6.55,6.92,1.25,1.18,6.55-6.92Zm-40.81,23.7c1.55-.14,2.84-1.29,3.22-2.85l1.9-7.83-1.67-.41-1.9,7.83c-.21.85-.89,1.47-1.71,1.54-.29.03-.55,0-.78-.11l-.67,1.59c.4.17.82.25,1.27.25.11,0,.22,0,.34-.02Zm32.96.68l-10.63-4.19-.63,1.6,10.63,4.19.63-1.6Zm2.47,5.6l-1.68-.37-1.94,8.87,1.68.37,1.94-8.87Zm-16.42-31.46c-1.94,0-3.52,1.58-3.52,3.52,0,.05,0,.1,0,.15.08,1.87,1.62,3.36,3.51,3.36s3.43-1.49,3.51-3.36c0-.05,0-.1,0-.15,0-1.94-1.58-3.52-3.52-3.52Zm-14.63,9.06c-1.94,0-3.52,1.58-3.52,3.52s1.58,3.52,3.52,3.52,3.52-1.58,3.52-3.52-1.58-3.52-3.52-3.52Zm30.66,15.93c-1.94,0-3.52,1.58-3.52,3.52s1.58,3.52,3.52,3.52,3.52-1.58,3.52-3.52-1.58-3.52-3.52-3.52Zm-3.52,14.5c-1.94,0-3.52,1.58-3.52,3.52s1.58,3.52,3.52,3.52,3.52-1.58,3.52-3.52-1.58-3.52-3.52-3.52Zm0-33.03c-1.94,0-3.52,1.58-3.52,3.52s1.58,3.52,3.52,3.52,3.52-1.58,3.52-3.52-1.58-3.52-3.52-3.52Zm-12.51,11.69c-1.94,0-3.52,1.58-3.52,3.52s1.58,3.52,3.52,3.52,3.52-1.58,3.52-3.52-1.58-3.52-3.52-3.52Zm-6.03,14.3c-1.94,0-3.52,1.58-3.52,3.52s1.58,3.52,3.52,3.52,3.52-1.58,3.52-3.52-1.58-3.52-3.52-3.52Zm-15.07-2.19c-1.94,0-3.52,1.58-3.52,3.52s1.58,3.52,3.52,3.52,3.52-1.58,3.52-3.52-1.58-3.52-3.52-3.52Z"
//             />
//           )}
//         </g>
//       </svg>
//     </>
//   );
// };

export const AnimationButton1 = ({ appliedAnimation, onClick }) => {
  return (
    <>
      <svg
        id="Layer_2"
        data-name="Layer 2"
        className="hover:cursor-pointer  hoverfill"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 99.95 99.95"
        onClick={onClick}
      >
        <defs>
          <linearGradient
            id="linear-gradient"
            x1="49.98"
            y1="2650.33"
            x2="49.98"
            y2="2550.37"
            gradientTransform="translate(0 2650.33) scale(1 -1)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#3879fb" />
            <stop offset=".11" stopColor="#3e82f7" />
            <stop offset=".25" stopColor="#4c94f0" />
            <stop offset=".4" stopColor="#47a4f8" />
            <stop offset=".5" stopColor="#44b3ff" />
            <stop offset=".75" stopColor="#32e3f7" />
            <stop offset="1" stopColor="#70ece1" />
          </linearGradient>
          <linearGradient
            id="linear-gradient-2"
            x1="-19.36"
            y1="-286.23"
            x2="-19.36"
            y2="-225.01"
            gradientTransform="translate(219.39 243.41) rotate(-37.04)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#8348f8" />
            <stop offset=".07" stopColor="#8051f8" />
            <stop offset=".2" stopColor="#786af8" />
            <stop offset=".34" stopColor="#6d90fa" />
            <stop offset=".66" stopColor="#6798f8" />
            <stop offset="1" stopColor="#55b3f4" />
          </linearGradient>
          <linearGradient
            id="linear-gradient-3"
            x1="49.98"
            y1="22.67"
            x2="49.98"
            y2="77.29"
            gradientTransform="matrix(1,0,0,1,0,0)"
            xlinkHref="#linear-gradient-2"
          />
          <linearGradient
            id="linear-gradient-4"
            x1="49.98"
            y1="2625.94"
            x2="49.98"
            y2="2574.75"
            gradientTransform="translate(0 2650.33) scale(1 -1)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#8348f8" />
            <stop offset=".07" stopColor="#8051f8" />
            <stop offset=".2" stopColor="#786af8" />
            <stop offset=".34" stopColor="#6d90fa" />
            <stop offset=".66" stopColor="#6798f8" />
            <stop offset="1" stopColor="#55b3f4" />
          </linearGradient>
          <linearGradient
            id="linear-gradient-5"
            x1="49.98"
            y1="2627.65"
            x2="49.98"
            y2="2573.04"
            xlinkHref="#linear-gradient-4"
          />
          <linearGradient
            id="linear-gradient-6"
            x1="49.98"
            y1="2627.66"
            x2="49.98"
            y2="2573.03"
            xlinkHref="#linear-gradient-4"
          />
          <linearGradient
            id="linear-gradient-7"
            y1="2627.65"
            y2="2573.04"
            xlinkHref="#linear-gradient-4"
          />
          <linearGradient
            id="linear-gradient-8"
            y1="2624.13"
            y2="2576.57"
            xlinkHref="#linear-gradient-4"
          />
          <linearGradient
            id="linear-gradient-9"
            y1="2627.65"
            y2="2573.04"
            xlinkHref="#linear-gradient-4"
          />
          <linearGradient
            id="linear-gradient-10"
            y1="2627.65"
            y2="2573.04"
            xlinkHref="#linear-gradient-4"
          />
        </defs>
        <g id="Layer_5" data-name="Layer 5">
          <g>
            WHITE BACKGROUND
            <path
              className="applyhere"
              fill="#fff"
              d="m99.95,49.98c0,27.61-22.37,49.98-49.98,49.98S0,77.59,0,49.98,22.38,0,49.98,0s49.98,22.37,49.98,49.97Z"
            />
            EDGE RIBBON
            <path
              className="applyhere"
              fill="url(#linear-gradient)"
              d="m49.98,7c23.7,0,42.98,19.28,42.98,42.98s-19.28,42.98-42.98,42.98S7,73.67,7,49.98,26.28,7,49.98,7m0-7C22.38,0,0,22.38,0,49.98s22.38,49.98,49.98,49.98,49.98-22.38,49.98-49.98S77.58,0,49.98,0h0Z"
            />
          </g>
          IDLE
          {appliedAnimation === 6 && (
            <path
              className="applyhere"
              fill="url(#linear-gradient-2)"
              d="m61.85,27.56c0,4.69-2.72,8.75-6.67,10.68-.26-2.65-2.5-4.72-5.22-4.72s-4.95,2.07-5.22,4.72c-3.95-1.93-6.67-5.99-6.67-10.68,0-6.56,5.32-11.88,11.88-11.88s11.88,5.32,11.88,11.88Zm-11.88,14.23v12.88m.86-12.88h-1.72v12.88h1.72v-12.88Zm-1.77,14.8l-1.59-.65-4.33,10.59,1.59.65,4.33-10.59Zm-3.94,11.65l-1.72-.03-.18,11.45,1.72.03.18-11.45Zm4.85-33c-1.94,0-3.52,1.58-3.52,3.52,0,.05,0,.1,0,.15.08,1.87,1.62,3.36,3.51,3.36s3.43-1.49,3.51-3.36c0-.05,0-.1,0-.15,0-1.94-1.58-3.52-3.52-3.52Zm0,18.15c-1.94,0-3.52,1.58-3.52,3.52s1.58,3.52,3.52,3.52,3.52-1.58,3.52-3.52-1.58-3.52-3.52-3.52Zm-5.8,11.79c-1.94,0-3.52,1.58-3.52,3.52s1.58,3.52,3.52,3.52,3.52-1.58,3.52-3.52-1.58-3.52-3.52-3.52Zm0,12.05c-1.94,0-3.52,1.58-3.52,3.52s1.58,3.52,3.52,3.52,3.52-1.58,3.52-3.52-1.58-3.52-3.52-3.52Zm10.82-10.05l1.59-.65-4.33-10.59-1.59.65,4.33,10.59Zm-.22,12.5l1.72-.03-.18-11.45-1.72.03.18,11.45Zm-2.75-10.99c0,1.94,1.58,3.52,3.52,3.52s3.52-1.58,3.52-3.52-1.58-3.52-3.52-3.52-3.52,1.58-3.52,3.52Zm0,12.05c0,1.94,1.58,3.52,3.52,3.52s3.52-1.58,3.52-3.52c0-1.94-1.58-3.52-3.52-3.52s-3.52,1.58-3.52,3.52Zm-13.88-24.41c-.27,1.58.47,3.15,1.84,3.89.5.27,1.03.41,1.57.42v-1.72c-.24,0-.49-.07-.75-.21-.72-.39-1.1-1.23-.96-2.09l1.58-9.4-1.7-.29-1.58,9.4Zm-.76-9.4c0,1.94,1.58,3.52,3.52,3.52,1.94,0,3.52-1.58,3.52-3.52,0-1.94-1.58-3.52-3.52-3.52-1.94,0-3.52,1.58-3.52,3.52Zm1.97-.06l1.16,1.27,8.47-7.7-1.16-1.27-8.47,7.7Zm20.87.06l-1.7.29,1.58,9.4c.14.86-.24,1.7-.96,2.09-.26.14-.51.21-.76.21v1.72c.55,0,1.08-.14,1.58-.42,1.37-.74,2.1-2.3,1.84-3.89l-1.58-9.4Zm-1.18-3.52c-1.94,0-3.52,1.58-3.52,3.52s1.58,3.52,3.52,3.52,3.52-1.58,3.52-3.52-1.58-3.52-3.52-3.52Zm-6.92-4.24l-1.16,1.27,8.47,7.7,1.16-1.27-8.47-7.7Z"
            />
          )}
          T_POSE
          {appliedAnimation === 1 && (
            <path
              className="applyhere"
              fill="url(#linear-gradient-3)"
              d="m43.11,42.99c-2.92-.54-5.78-1.06-8.64-1.59-1.52-.28-3.03-.54-4.54-.84-1.19-.24-1.93-1.13-1.87-2.2.06-1.13.92-1.94,2.15-2.03.26-.02.51,0,.77,0,4.71,0,9.43,0,14.14,0,7.91,0,15.83,0,23.74,0,.29,0,.57-.01.86,0,1.24.08,2.09.87,2.17,2.01.07,1.07-.66,2-1.84,2.22-4.01.75-8.02,1.48-12.04,2.22-.36.07-.72.14-1.15.23,0,.38,0,.72,0,1.05,0,10,0,20,0,30,0,2.02-1.31,3.32-3.18,3.21-1.36-.08-2.48-1.08-2.7-2.44-.06-.39-.07-.8-.07-1.19,0-4.34,0-8.69,0-13.03,0-1.23-.27-1.72-.94-1.71-.65,0-.88.47-.88,1.75,0,4.46,0,8.91,0,13.37,0,2.08-1.4,3.42-3.33,3.24-1.42-.13-2.54-1.27-2.64-2.7-.02-.34-.01-.69-.01-1.03,0-9.86.01-19.71.02-29.57,0-.31,0-.62,0-.98Zm6.93-20.32c-3.23-.03-5.86,2.53-5.89,5.74-.03,3.25,2.58,5.92,5.81,5.93,3.19.01,5.83-2.61,5.85-5.81.02-3.23-2.54-5.83-5.77-5.86Z"
            />
          )}
          DANCE
          {appliedAnimation === 7 && (
            <path
              className="applyhere"
              fill="url(#linear-gradient-4)"
              d="m55.61,37.46c-.69-1.93-1.38-3.77-2.01-5.63-.63-1.83.48-3.61,2.37-3.88,1.23-.18,2.54.5,3.01,1.72,1.2,3.1,2.39,6.21,3.48,9.35.66,1.89-.66,3.72-2.73,3.97-1.79.22-3.59.43-5.38.64-1.24.14-1.51.42-1.51,1.66-.02,2.89-.11,5.77,0,8.66.05,1.36.48,2.71.74,4.06.05.23.11.46.19.78,1.45-.93,2.84-1.83,4.24-2.71,1.9-1.18,4.28-.3,4.94,1.79.42,1.34-.03,2.83-1.2,3.62-2.54,1.71-5.09,3.43-7.7,5.04-2.18,1.35-5.01.07-5.52-2.45-.42-2.05-.73-4.12-1.08-6.18-.07-.45-.25-.79-.73-.84-.46-.05-.7.27-.85.65-.64,1.71-.78,3.48-.6,5.28.25,2.57,1.16,4.92,2.46,7.14,1.33,2.28.19,4.91-2.34,5.38-1.36.25-2.5-.2-3.3-1.35-3.07-4.37-4.1-9.24-3.27-14.47.34-2.14.94-4.23,1.41-6.35.05-.24.09-.48.09-.72v-8.29c0-.79-.22-1.5-.81-2.03-3.36-3.07-5.12-7-6.16-11.33-.12-.49-.22-.99-.32-1.49-.37-1.93.8-3.72,2.63-4.01,1.93-.31,3.59.92,3.85,2.91.22,1.77.59,3.48,1.42,5.07.24.47.53.91.81,1.36.64.99,1.46,1.65,2.7,1.86,1.84.31,3.65.78,5.46,1.24.81.2,1.59.19,2.4.06,1.06-.18,2.13-.31,3.28-.48l.04-.03Zm-8.03-11.47c-2.74-.07-5.1,2.2-5.16,4.94-.06,2.86,2.2,5.21,5.05,5.24,2.79.03,5.08-2.22,5.12-5.03.04-2.79-2.18-5.07-5.01-5.14h0Zm-17.28,24.58c.59.45,1.18.43,1.56-.05.37-.47.26-1.1-.3-1.54-.83-.66-1.67-1.29-2.49-1.96-.39-.31-.79-.5-1.28-.26s-.59.68-.58,1.18v5.06c-.56-.05-1.03-.12-1.49-.12-1.56,0-2.8,1.13-3.02,2.72-.2,1.44.78,2.87,2.24,3.28,2.26.64,4.29-.87,4.3-3.21v-5.94c.43.34.74.59,1.06.84Zm44.78-11.89c.19.15.38.31.58.44.51.34,1.06.26,1.4-.19.33-.43.31-.99-.15-1.36-.95-.79-1.92-1.56-2.92-2.29-.68-.49-1.54-.03-1.57.81-.03.83,0,1.66,0,2.5v2.84c-.74,0-1.45-.12-2.1.03-1.24.29-2.15,1.06-2.41,2.38-.24,1.26.31,2.46,1.38,3.07,1.2.69,2.44.7,3.65.03,1.13-.63,1.51-1.68,1.5-2.92-.01-1.89,0-3.77,0-5.81.29.22.47.35.64.48h0Zm-2.57-12.65c-.43-.43-.65-1.06-.99-1.64-.34.59-.57,1.21-.99,1.64-.42.42-1.03.64-1.71,1.03,1.4.43,2.21,1.3,2.7,2.56.49-1.26,1.31-2.13,2.72-2.57-.7-.4-1.32-.61-1.73-1.02Zm-48.23,1.85c-.28.27-.67.42-.92.57.57.57,1.13,1.13,1.61,1.6.51-.5,1.07-1.05,1.63-1.6-.28-.17-.68-.32-.96-.59-.27-.27-.42-.67-.67-1.08-.26.43-.41.83-.69,1.11h0Zm6.33,43.5c1.02.27,1.51.9,1.91,1.71.27-.9.91-1.38,1.76-1.74-.43-.25-.83-.4-1.11-.68-.28-.27-.43-.67-.76-1.21-.21,1.02-.89,1.49-1.8,1.92Zm40.39-8.02c-.86-.15-1.26-.87-1.75-1.78-.21,1.09-.88,1.52-1.53,1.82.58.58,1.13,1.13,1.61,1.61.5-.5,1.07-1.05,1.67-1.65Z"
            />
          )}
          RUN
          {appliedAnimation === 4 && (
            <path
              className="applyhere"
              fill="url(#linear-gradient-5)"
              d="m61.95,22.68c.32.09.64.17.96.27,2.78.87,4.49,3.65,4.03,6.53-.46,2.84-2.96,4.95-5.83,4.92-2.87-.03-5.34-2.18-5.75-5.02-.45-3.07,1.6-5.96,4.65-6.59.12-.02.23-.07.34-.11.53,0,1.07,0,1.6,0Zm-8.41,40.09c.1.08.16.34.11.48-.22.62-.48,1.22-.72,1.83-.98,2.45-1.98,4.9-2.95,7.36-.6,1.53-.15,3.16,1.1,4.11,1.89,1.43,4.51.7,5.42-1.54,1.58-3.88,3.13-7.77,4.69-11.65.71-1.77.31-3.27-1.19-4.45-1.73-1.37-3.46-2.73-5.19-4.09-.55-.44-1.11-.88-1.68-1.33,1.63-2.79,3.24-5.53,4.88-8.33,1.01,1.55,1.97,3.02,2.94,4.49,1.17,1.77,3.06,2.24,4.92,1.21,2.72-1.5,5.44-3.01,8.15-4.53,1.82-1.02,2.44-3.09,1.48-4.84-.96-1.74-3.06-2.3-4.89-1.3-.86.47-1.71.95-2.56,1.42-.96.53-1.92,1.06-2.89,1.6-.13-.18-.23-.33-.33-.47-1.04-1.59-2.07-3.19-3.13-4.76-.11-.17-.37-.34-.57-.35-3.69-.16-6.4-1.86-8.15-5.12-.08-.15-.33-.31-.51-.31-3.75-.02-7.5-.03-11.25,0-1.33,0-2.37.62-3.02,1.78-1.52,2.71-3.01,5.44-4.5,8.16-.44.8-.53,1.65-.3,2.53.37,1.43,1.52,2.41,3.03,2.61,1.34.17,2.72-.52,3.43-1.79,1.1-1.95,2.17-3.91,3.24-5.88.16-.29.33-.4.66-.39,1.9.02,3.8,0,5.7,0,.13,0,.27.02.46.03-.09.17-.14.29-.21.41-3.22,5.62-6.44,11.25-9.65,16.87-.18.31-.38.39-.72.39-3.95,0-7.89-.03-11.84,0-2.38.02-4.02,2.31-3.32,4.56.47,1.51,1.83,2.46,3.54,2.46,4.55,0,9.1-.02,13.65,0,1.67,0,2.89-.64,3.71-2.11.72-1.3,1.51-2.57,2.3-3.9,2.09,1.65,4.11,3.23,6.12,4.84h.04Z"
            />
          )}
          JUMP
          {appliedAnimation === 5 && (
            <path
              className="applyhere"
              fill="url(#linear-gradient-6)"
              d="m67.17,22.69c.65.3,1.25.65,1.52,1.38s.11,1.38-.24,2.04c-2.42,4.51-4.82,9.02-7.24,13.52-.21.38-.22.68-.02,1.08,1.75,3.57,2.8,7.36,3.41,11.27.27,1.75.51,3.53.54,5.29.02,1.08.29,2.04.64,3.03,1.13,3.17,2.08,6.39,2.4,9.75.13,1.33.06,2.7-.1,4.04-.19,1.63-1.69,2.62-3.4,2.4-2.04-.26-3.41-1.47-4.4-3.19-.12-.2-.21-.41-.31-.62-.89-1.76-.56-2.97,1.16-4.07-.29-.7-.57-1.42-.87-2.13-.21-.49-.47-.96-.66-1.46-.14-.39-.38-.44-.74-.39-.35.05-.59.11-.68.56-.55,2.73-1.2,5.44-2.43,7.97-1.02,2.1-2.55,3.56-4.92,4-1.46.27-2.9.12-4.33-.21-2.26-.53-4.38-1.44-6.41-2.55-1.2-.65-1.73-1.86-1.39-3.09.33-1.18,1.45-1.99,2.7-1.88.43.04.86.21,1.26.38,1.63.67,3.26,1.34,5.02,1.55,2.24.27,2.19.28,2.67-1.8.68-2.93.9-5.93.99-8.94,0-.15-.02-.32-.07-.47-.45-1.15-.52-2.35-.5-3.56.06-3.78-.41-7.47-1.71-11.05-.13-.36-.31-.54-.66-.67-5.21-1.91-10.43-3.83-15.64-5.75-1.18-.43-1.77-1.35-1.59-2.45.19-1.16,1.29-2.01,2.45-1.75,2.61.6,5.21,1.27,7.81,1.89,2.76.66,5.52,1.33,8.29,1.95,2.67.6,4.82-.28,6.38-2.48,2.42-3.4,4.79-6.83,7.18-10.26.41-.58.81-1.17,1.18-1.78.42-.7.94-1.27,1.72-1.57h.96l.03.02Zm-9.95,7.56c.03-3.96-3.24-7.17-7.31-7.17s-7.13,3.26-7.13,7.24,3.26,7.19,7.2,7.19,7.22-3.23,7.25-7.26h0Z"
            />
          )}
          CLAP
          {appliedAnimation === 8 && (
            <path
              className="applyhere"
              fill="url(#linear-gradient-7)"
              d="m22.67,52.86c.36-1.77.71-3.54,1.07-5.31.81-4,1.61-8,2.46-12,.59-2.78,3.91-3.84,6.03-1.94.17.15.31.33.49.54-1.28.35-2.36.92-3.26,1.82-1.01,1.01-1.63,2.22-1.91,3.62-1.1,5.46-2.24,10.92-3.32,16.38-.19.98-.2,2-.3,3.04-.53-.92-.83-1.91-1.04-2.93-.08-.36-.14-.73-.22-1.09,0-.71,0-1.42,0-2.13Zm39.79-30.19c-.92.42-1.22,1.15-1.19,2.15.05,1.52,0,3.05.02,4.58,0,1.08.65,1.81,1.6,1.81s1.6-.73,1.6-1.81c0-1.53-.04-3.05.02-4.58.04-.99-.27-1.72-1.19-2.15h-.86Zm-5,17.18c.07-.16.15-.31.22-.47.82-1.95-.19-4.19-2.22-4.81-1.46-.45-2.72-.05-3.79,1.02l-12.93,12.93c-.52.52-.93.63-1.42.38-.48-.25-.66-.69-.53-1.37.3-1.64.63-3.28.89-4.93.13-.82.29-1.67.18-2.47-.26-1.76-1.8-2.94-3.59-2.95-1.76,0-3.2,1.23-3.58,3.06-1.06,5.18-2.11,10.36-3.18,15.55-.82,3.99.07,7.53,2.92,10.47,2.58,2.67,5.22,5.28,7.88,7.88,2.05,2.01,4.56,3.06,7.43,3.14,3.26.09,6.05-1.06,8.35-3.36l16.4-16.4c.13-.13.25-.25.37-.39,1-1.15,1.16-2.79.41-4.12-.75-1.33-2.25-2.04-3.75-1.75-.43.08-.84.26-1.07.33.46-.7,1.13-1.46,1.52-2.35.42-.96.22-1.99-.33-2.91-.52-.87-1.29-1.41-2.26-1.65-.96-.23-1.87-.03-2.75.39.52-.58,1.08-1.11,1.61-1.65,1.45-1.5,1.47-3.69.06-5.12-1.43-1.44-3.66-1.42-5.16.06-.53.52-1.04,1.07-1.56,1.6l-.09-.09-.03-.02Zm-5.28-9.12c-1.45-1.25-3.53-1.16-4.96.26-2.02,2-4.01,4.03-6.04,6.02-.52.51-.71.89-.42,1.66.33.87.34,1.85.5,2.79.09-.08.23-.2.36-.34,2.53-2.52,5.06-5.04,7.57-7.58.99-1.01,2.11-1.79,3.6-2.17-.24-.25-.41-.46-.6-.63h-.01Zm19.8-.53c1.27-1.22,2.51-2.47,3.74-3.72.66-.67.65-1.62.05-2.26-.58-.6-1.55-.7-2.17-.11-1.35,1.29-2.66,2.61-3.96,3.96-.46.47-.51,1.09-.24,1.69.27.61.77.91,1.5,1.03.37-.19.8-.32,1.08-.59Zm3.64,8.46c.95,0,1.65-.69,1.66-1.58.01-.91-.7-1.61-1.68-1.61h-5.16c-.98,0-1.69.7-1.69,1.61s.72,1.58,1.71,1.59h5.16,0Z"
            />
          )}
          SIT_DOWN
          {appliedAnimation === 3 && (
            <path
              className="applyhere"
              fill="url(#linear-gradient-8)"
              d="m68.73,51.32v-3.5c-.01-.32-.04-.66-.08-1.02-.41-2.9-2.7-5.26-5.58-5.74-.38-.07-.77-.1-1.16-.1-2.59,0-4.93,1.42-6.11,3.71-.51,1-.76,2.07-.76,3.28v16.87l-4.8-5.96-.2-.24c-.12-.15-.21-.26-.29-.37-.27-.34-.53-.69-.79-1.04-.53-.7-1.02-1.36-1.55-1.98-1.07-1.27-2.59-1.97-4.26-1.97-2.1,0-3.92,1.09-4.86,2.9-2.31,4.44-4.46,8.93-6.84,13.92-.29.6-.31,1.3-.05,1.94.27.7.82,1.25,1.52,1.53.32.13.65.19.99.19,1.02,0,1.94-.61,2.44-1.63,1.07-2.16,2.12-4.32,3.18-6.49l1.64-3.35c.08-.15.16-.3.25-.47l.1-.2,2.18-4.1,2.49,3.92.16.25c.1.16.19.3.27.44l1.39,2.25c.98,1.58,1.96,3.17,2.95,4.75,1.83,2.91,4.89,4.65,8.17,4.65.68,0,1.36-.08,2.02-.23,4.5-1.02,7.54-4.78,7.57-9.37.02-4.28.01-8.63.01-12.84h0Zm-8.11-24.66c-.35-.13-.79-.24-1.25-.35-.16-.04-.31-.07-.46-.11h-1.17c-.1.02-.21.05-.33.06-3.59.52-5.91,3.69-5.41,7.37.41,2.97,3.17,5.29,6.28,5.29.27,0,.54-.02.81-.06,2.97-.38,5.14-2.64,5.53-5.75.33-2.67-1.39-5.44-4-6.45Z"
            />
          )}
          STAND UP
          {appliedAnimation === 2 && (
            <path
              className="applyhere"
              fill="url(#linear-gradient-9)"
              d="m45.61,77.29c-.67-.28-1.32-.57-1.78-1.18-.48-.65-.6-1.38-.6-2.16,0-5.56,0-11.13,0-16.69,0-.47-.12-.63-.6-.68-.9-.11-1.57-.65-2.01-1.43-1.33-2.35-2.66-4.7-3.97-7.06-.53-.95-.47-1.93.15-2.82,1.63-2.31,3.28-4.6,4.94-6.89.63-.87,1.51-1.32,2.6-1.33h11.25c1.11,0,1.99.46,2.64,1.36,1.63,2.26,3.26,4.53,4.88,6.8.67.94.72,1.94.15,2.96-1.22,2.17-2.47,4.32-3.65,6.5-.61,1.12-1.41,1.9-2.8,1.97,0,.22-.03.43-.03.63,0,5.4-.04,10.81.02,16.21.02,1.87-.58,3.21-2.44,3.8h-1.28c-2.01-.85-2.45-1.52-2.45-3.72v-14.73h-1.27v15.08c0,.37,0,.75-.09,1.11-.3,1.26-1.19,1.92-2.37,2.27h-1.3Zm-2.41-33.39s-.06-.03-.1-.04c-.64.95-1.31,1.87-1.92,2.84-.26.41-.15.89.11,1.32.31.5.61,1,.92,1.5.3.49.6.97.98,1.59v-7.2h0Zm13.62-.1v7.06c.73-1.02,1.41-2.05,1.97-3.14.15-.3.09-.85-.09-1.15-.54-.91-1.19-1.76-1.88-2.76h0Zm-6.78-21.12c-3.55-.02-6.45,2.86-6.46,6.42,0,3.55,2.9,6.47,6.44,6.44,3.54-.02,6.4-2.88,6.4-6.42s-2.85-6.42-6.38-6.44Z"
            />
          )}
          {/* WALK  */}
          {appliedAnimation === 0 && (
            <path
              className="applyhere"
              fill="url(#linear-gradient-10)"
              d="m49.46,22.67c.95.27,1.88.58,2.67,1.24,1.87,1.57,2.42,4.28,1.26,6.42-1.21,2.25-3.72,3.31-6.1,2.59-2.3-.7-3.88-2.85-3.78-5.15.11-2.47,1.8-4.46,4.26-5,.1-.02.2-.07.3-.1.46,0,.92,0,1.39,0Zm-6.06,21.85v.56c.05,2.93.08,5.87.17,8.8.04,1.26-.2,2.41-.79,3.53-2.69,5.13-4.54,10.59-6.17,16.13-.47,1.59.38,3.14,1.89,3.61,1.52.47,3.05-.34,3.59-1.92.23-.67.43-1.35.63-2.03,1.35-4.44,2.93-8.79,5.06-12.92.09-.17.27-.28.41-.42.12.16.28.3.34.47.32.89.61,1.78.91,2.67,1.25,3.72,2.49,7.43,3.74,11.15.25.74.59,1.41,1.3,1.82,1.03.59,2.47.44,3.44-.36.97-.8,1.23-1.85.78-3.23-1.39-4.17-2.81-8.34-4.19-12.52-.58-1.75-1.37-3.45-1.47-5.32-.17-3.1-.26-6.21-.37-9.32,0-.05.02-.09.05-.2.16.13.29.24.42.35,1.81,1.43,3.59,2.9,5.44,4.28.88.66,1.84,1.21,2.82,1.71.94.48,1.91.19,2.56-.64,1.13-1.43.84-3.46-.66-4.49-.63-.43-1.29-.81-1.93-1.23-3.46-2.32-6.43-5.17-8.87-8.53-1.99-2.75-6.62-2.61-8.67-.6-2.27,2.23-4.44,4.56-6.36,7.11-.64.85-1.28,1.71-1.82,2.62-.71,1.2-.29,2.73.87,3.53,1.11.77,2.69.57,3.57-.48.52-.63.97-1.32,1.46-1.96.57-.74,1.15-1.47,1.72-2.2l.12.04h.01Z"
            />
          )}
        </g>
      </svg>
    </>
  );
};
