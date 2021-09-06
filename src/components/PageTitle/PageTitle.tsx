const PageTitle: React.FC = ({ children, ...otherProps }) => {
  return ( 
    <>
      <h1 className={otherProps.classes}>{children}</h1>
    </>
  );
}; 

export default PageTitle;
