const user = {
  id: 3,
  name: 'Bobby Kumanov',
  username: 'bobby',
  email: 'bobby@maple.town',
};

console.log(Object.keys(user));
// [ 'id', 'name', 'username', 'email' ]

console.log(Object.values(user));
// [ 3, 'Bobby Bear', 'bobby', 'bobby@maple.town' ]

console.log(Object.entries(user));
// [
//   [ 'id', 3 ],
//   [ 'name', 'Bobby Kumanov' ],
//   [ 'username', 'bobby' ],
//   [ 'email', 'bobby@maple.town' ]
// ]
