// Pre-curried
{
  const multiply = (n, m) => n * m;
  console.log(multiply(2, 4));
}

// Curried
{
  const withMultiple = (n) => {
    return (m) => n * m;
  };
  console.log(withMultiple(2)(4));
}

// Curried with double arrow
{
  const withMultiple = (n) => (m) => n * m;
  console.log(withMultiple(2)(4));
}
