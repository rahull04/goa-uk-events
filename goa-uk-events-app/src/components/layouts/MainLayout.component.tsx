interface MainLayoutProps {
  children?: JSX.Element[];
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      <h2>MainLayout.component</h2>
      {children}
    </div>
  );
};

export default MainLayout;
