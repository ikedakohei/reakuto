type Company = 'Apple' | 'IBM' | 'GitHub';

type C1 = Lowercase<Company>; // 'apple' | 'ibm' | 'github'
type C2 = Uppercase<Company>; // 'APPLE' | 'IBM' | 'GITHUB'
type C3 = Uncapitalize<Company>; // 'apple' | 'iBM' | 'gitHub'
type C4 = Capitalize<C3>; // 'Apple' | 'IBM' | 'GitHub';
