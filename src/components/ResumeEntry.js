const ResumeEntry = ({ name, position, duration, children }) => (
  <div>
    <h4>{name}</h4>
    <div className="ps-4 pt-2">
      <p>{position}</p>
      <p>{duration}</p>
      {children}
    </div>
  </div>
);

export default ResumeEntry;
