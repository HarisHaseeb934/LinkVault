const Input = ({ label, name, type, placeholder, classname, div, labelClass}) => {
  return (
    <div className={div}>
      <label htmlFor={name} className={labelClass}>{label}</label>
      <input type={type} placeholder={placeholder} name={name} id={name} className={classname}/>
    </div>
  );
};

export default Input;
