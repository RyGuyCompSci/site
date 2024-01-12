const Box = ({ children }) => (
  <div>
    <div className="d-lg-none rounded-lg p-4 bg-transluscent-black big-font overflow-hidden">
      {children}
    </div>
    <div className="d-none d-lg-block rounded-lg p-5 my-5 bg-transluscent-black big-font overflow-hidden">
      {children}
    </div>
  </div>
);

export default Box;
