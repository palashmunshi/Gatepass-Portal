import "./widget.scss";



const Widget = (props) => {
  

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{props.title}</span>
        <span className="counter">0</span>
        {props.type === "user" ? (
          <span className="link">
            
          </span>
        ) : (
          <span className="link"></span>
        )}
      </div>
      <div className="right">{props.icon}</div>
    </div>
  );
};

export default Widget;
