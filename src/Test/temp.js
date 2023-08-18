<div className="p-2 lg:p-2 xl:p-2 2xl:p-3 flex flex-col justify-center items-center icons_test my-2 lg:my-4 2xl:my-6">
<HomeButton onClick={ClickHome} />
</div>
<div className="p-2 lg:p-2 xl:p-2 2xl:p-3 icons_test flex flex-col justify-center items-center lg:my-4 2xl:my-6">
<BackButton onClick={ClickUndo} />
<UploadButton onClick={ClickUpload} />
<SearchButton onClick={ClickSearch} />
</div>
<div className="p-2 lg:p-2 xl:p-2 2xl:p-3 icons_test flex flex-col justify-center items-center my-2 lg:my-4 2xl:my-6">
<HeadButton
  onClick={ClickHead}
  activeElement={data.activeElement}
/>
<BodyButton
  onClick={ClickBody}
  activeElement={data.activeElement}
/>
</div>