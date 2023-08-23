useEffect(() => {
  const handleWindowResize = () => {
    const optionsBarHeight = optionsBar.current.clientHeight; 
    document.documentElement.style.setProperty("--optionsBarHeight", `${optionsBarHeight}px`);
  };
  window.addEventListener("resize", handleWindowResize);
  return () => window.removeEventListener("resize", handleWindowResize);
}, []);

useEffect(() => {
  const optionsBarHeight = optionsBar.current.clientHeight; 
  document.documentElement.style.setProperty("--optionsBarHeight", `${optionsBarHeight}px`);
}, []);