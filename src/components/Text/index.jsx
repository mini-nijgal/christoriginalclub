import React from "react";

const sizeClasses = {
  txtCandaraBoldItalic56: "font-bold font-candara italic",
  txtCandara17: "font-candara font-normal",
  txtCandaraBoldItalic24: "font-bold font-candara italic",
  txtCandaraBoldItalic32: "font-bold font-candara italic",
  txtCandaraBold24: "font-bold font-candara",
  txtALTERON80: "font-alteron font-normal",
  txtInterRegular24: "font-inter font-normal",
  txtCandaraBoldItalic80: "font-bold font-candara italic",
  txtCandaraLightItalic24: "font-candara font-normal italic",
  txtCandaraBoldItalic31: "font-bold font-candara italic",
  txtCandaraLight24: "font-candara font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
