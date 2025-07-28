export const selectStyles = {
  control: (provided, state, customStyles = {}) => ({
    ...provided,
    height: "44px",
    border: state.isFocused
      ? "1px solid #59b17a"
      : "1px solid rgba(29, 30, 33, 0.1)",
    borderRadius: "60px",
    fontFamily: "Inter, sans-serif",
    fontWeight: 400,
    fontSize: "12px",
    lineHeight: 1.5,
    padding: "13px 18px",
    cursor: "pointer",
    ...customStyles,
  }),
  option: (provided, state) => ({
    ...provided,
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    fontSize: "12px",
    color: state.isSelected ? "#ffffff" : "rgba(255, 255, 255, 0.5)",
    backgroundColor: "none",
    cursor: "pointer",
    "&:hover": {
      color: "#ffffff",
    },
    "&:active": {
      backgroundColor: "transparent",
    },
  }),
  placeholder: baseStyles => ({
    ...baseStyles,
    color: "rgba(29, 30, 33, 0.4)",
  }),
  dropdownIndicator: (baseStyles, state) => ({
    ...baseStyles,
    position: "absolute",
    top: "14px",
    right: "18px",
    transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : "rotate(0deg)",
    transition: "transform 250ms cubic-bezier(0.4, 0, 0.2, 1)",
    color: "#1d1e21",
  }),
  indicatorSeparator: baseStyles => ({
    ...baseStyles,
    display: "none",
  }),
  menu: provided => ({
    ...provided,
    position: "absolute",
    width: "100%",
    maxHeight: "140px",
    borderRadius: "15px",
    backgroundColor: "#59b17a",
    marginTop: "4px",
    padding: "13px 8px 13px 18px",
  }),
  menuList: provided => ({
    ...provided,
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    padding: "0",
    maxHeight: "114px",
    overflowY: "auto",
    "&::-webkit-scrollbar": {
      width: "6px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(255, 255, 255, 0.4)",
      borderRadius: "12px",
    },
  }),
};
