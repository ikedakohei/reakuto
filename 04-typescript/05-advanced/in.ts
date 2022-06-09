{
  const obj = { a: 1, b: 2, c: 3 };
  console.log('a' in obj);
  for (const key in obj) { console.log(key); }

  type Fig = 'one' | 'two' | 'three';
  type FigMap = { [k in Fig]?: number };

  const figMap: FigMap = {
    one: 1,
    two: 2,
    three: 3,
  };

  figMap.four = 4;
}
