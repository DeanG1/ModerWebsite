import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({ className, href, onClick, children, px, white }) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-color hover:text-color-1 ${
    px || "px-7"
  } 
  ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;
  //   So, overall, this part dynamically sets the text color of the button based on
  //the white prop, and it allows for additional custom classes to be added via the className prop.

  const spanClasses = "relative z-10";
  const renderButton = () => (
    <button onClick={onClick} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );
  return href ? renderLink() : renderButton();
};

export default Button;

// This code is a React component called Button that renders either a <button> or an <a> element based on whether a href prop is provided. Here's a brief explanation of its structure and functionality:

// The component accepts several props:

// className: Additional classes for styling.
// href: The URL to link to (optional).
// onClick: Function to handle button click event.
// children: Content inside the button.
// px: Padding on the X-axis (optional).
// white: Boolean flag indicating if the button should be white.
// It constructs a classes string for applying CSS classes based on the provided props and defaults.

// There are two rendering functions:

// renderButton: Renders a <button> element with the provided children and an SVG icon (based on the white prop).
// renderLink: Renders an <a> element with the provided href, children, and an SVG icon (based on the white prop).
// The component conditionally renders either a button or a link based on whether the href prop is provided:

// If href is provided, it renders a link (<a>).
// If href is not provided, it renders a button (<button>).
// The component returns the result of either renderLink() or renderButton() based on the presence of the href prop.

// Overall, this component is a flexible button/link component that allows for easy customization of styles and behavior based on the provided props.
