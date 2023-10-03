const useSetTheme = () => {
  const isBrowser = (() => typeof window !== "undefined")();

  const setTheme = ({
    key,
    value,
    sessionType = "localStorage",
  }: {
    key: string;
    value?: string;
    sessionType?: "localStorage" | "localStorage";
  }) => {
    if (isBrowser) {
      if (value) {
        window[sessionType].setItem(key, value);
        document.documentElement.setAttribute("data-theme", value);
        return;
      }
    }
  };
  return setTheme;
};

export default useSetTheme;
