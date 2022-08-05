

export function getMonthName(dateString : string){
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const d = new Date(dateString);

return monthNames[d.getMonth()];
}