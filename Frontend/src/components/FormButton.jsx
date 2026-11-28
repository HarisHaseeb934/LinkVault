const FormButton = ({ text, type, bg = "bg-primary" }) => {
  return (
    <button
      type={type}
      className={` text-on-background text-sm font-semibold px-3 py-2 rounded-lg cursor-pointer ${bg}`}
    >
      {text}
    </button>
  );
};

export default FormButton;
