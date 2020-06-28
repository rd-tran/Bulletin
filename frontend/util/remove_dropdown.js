export default function removeDropdown(targetClass) {
  const component = this;
  const windowEvent = (e) => {
    if (!e.target.className.includes(`${targetClass}`)) {
      component.setState({ active: false })
    }
  };
  $(window).on('click', windowEvent);
};