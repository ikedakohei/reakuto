const counter = () => {
  let count = 0;

  const increment = () => {
    return count += 1;
  };

  return increment;
}
