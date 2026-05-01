function Button({ text, variant = "primary", size = "medium" }) {
  return <button className={`custom-button ${variant} ${size}`}>{text}</button>;
}

export default Button;