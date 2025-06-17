import { useThemeContext } from "../../../shared/themes/ThemeContext";

const Container = ({ children }) => {
  const {themeStyles} = useThemeContext()

    return <div className="flex w-full flex-1" style={{
      backgroundColor: themeStyles?.backgroundColor,
    }}>{children}</div>;
  };
  export default Container;
  