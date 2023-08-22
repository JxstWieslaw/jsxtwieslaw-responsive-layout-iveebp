<div className="p-2 lg:p-2 xl:p-2 2xl:p-9 lg:relative flex justify-center  w-full h-1/2 lg:h-full lg:w-1/2 ">
  <div className="lg:absolute lg:bottom-1/4 flex flex-col  h-full lg:h-4/6 w-full lg:w-1/2">
    <div className="title-bar rounded-t-3xl">
      <div className="font-sans p-4 m-2 h-16 text-3xl text-white ">{title}</div>
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
    <div className="objects-bar h-screen">
      <div className={optionsBarClassName}>
        {boyUpperClothes_Objects.map((options, index) => (
          <BoyUpperClothObject
            key={index}
            id={index}
            active={state.appliedBoyUpperClothes}
            options={options}
            onClick={() => {
              setState((prevState) => ({
                ...prevState,
                appliedBoyUpperClothes: options.alt_text,
              }));
              setTextureUrl(null);
            }}
          />
        ))}
      </div>
    </div>
  </div>
</div>;
