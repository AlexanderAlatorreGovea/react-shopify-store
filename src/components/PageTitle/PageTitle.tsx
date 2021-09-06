const PageTitle: React.FC = ({ children, className }) => {
  return ( 
    <>
      <h1 className={className}>{children}</h1>
    </>
  );
};

export default PageTitle;
