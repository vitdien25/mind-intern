import { Grid } from "antd";

const { useBreakpoint } = Grid;

export const useScreen = () => {
  const screens = useBreakpoint();
  const isMobile = !!screens.xs;
  const isTablet = !!screens.md && !screens.lg;
  const isDesktop = !!screens.lg;
  const tickRotation = isDesktop ? 0 : 45;

  return { isDesktop, isTablet, isMobile, tickRotation };
};
