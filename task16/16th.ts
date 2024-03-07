let guest_list: string[]=['Bilal','Owais','faisal','fahim'];
let not_present: string='fahim';
let new_guest: string='Abbo';
guest_list[3]=new_guest;
for(let i=0; i<guest_list.length;i++){
    console.log('Respected brother'+guest_list[i]+',\n We invited you to on dinner today.\nthank you\n');
}
guest_list  .unshift('Ali','Burhan','Ahsan');
for(let i=0; i<guest_list.length;i++){
    console.log('Respected brothers'+guest_list[i]+',\n We invited you  to  on  dinner today. we found big table so we decide to invite 3 more  guest .\nThank you\n');
} 