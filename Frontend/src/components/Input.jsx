const Input = ({
  label,
  name,
  type = 'text',
  placeholder,
  classname = "bg-surface-container-low mt-1 w-full outline-none placeholder:text-on-surface/50 font-display p-2 text-on-surface font-normal text-sm focus:border-primary border rounded-sm border-outline-variant",
  div = "flex flex-col",
  labelClass = 'text-on-surface text-sm',
}) => {
  return (
    <div className={div}>
      <label htmlFor={name} className={labelClass}>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        id={name}
        className={classname}
      />
    </div>
  );
};

export default Input;
