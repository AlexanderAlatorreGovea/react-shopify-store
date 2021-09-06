const PageTitle: React.FC = ({ children, ...otherProps }) => {
  return ( 
    <>
      <h1 className={otherProps.className}>{children}</h1>
    </>
  );
}; 

export default PageTitle;
