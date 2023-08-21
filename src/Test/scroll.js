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
