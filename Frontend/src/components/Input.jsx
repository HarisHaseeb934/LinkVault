const Input = ({label, name, type, placeholder}) => {
  return (
    <div>
        {label && <label htmlFor={name}>{label}</label>}
        <input type={type} placeholder={placeholder} name={name} id={name}/>
    </div>
  )
}

export default Input