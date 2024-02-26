/*
const result= getGradeAndGpa(55);
const {gpa, grade} = getGradeAndGpa(77)
console.log(gpa)
*/

console.log (resultSystemPro({
    bangla : 44,
    engligh : 55,
    math : 44 ,
    sceince : 66,
    social : 77,
}))


/*
name.forEach((item, index) => {
    console.log (`
    Name : ${item}
    Roll : ${roll[index]}
    Reg  : ${reg[index]}

=====================================
 Sub  =>   Mark  => Grade  =>Gpa
Bangla => ${ban[index]} => ${getGrade(ban[index])} => ${getGpa(ban[index])}
Englilsh => ${eng[index]} => ${getGrade(eng[index])} => ${getGpa(eng[index])}
Math => ${math[index]} => ${getGrade(math[index])} => ${getGpa(math[index])}
Science => ${s[index]} => ${getGrade(s[index])} => ${getGpa(s[index])}
Social Seience => ${ss[index]} => ${getGrade(ss[index])} => ${getGpa(ss[index])}
religion => ${reli[index]} => ${getGrade(reli[index])} => ${getGpa(reli[index])}

=====================================================
Final Result : ${isPassed(ban[index], eng[index] , math[index], s[index], ss[index] , reli[index])
?"Passed" : "Faild"
}

Grade : ${getFinalGrade(ban[index],eng[index] , math[index], s[index], ss[index] , reli[index])}

Grade : ${getFinalGPA(ban[index],eng[index] , math[index], s[index], ss[index] , reli[index]) .toFixed(2)}



    `)
});






devs.forEach((item, index) =>{
    if(item.location == "mirpur"){
        console.log(`Name = ${item.name}
        age = ${item.age}
        skill = ${item. skil}
        location = ${item.location}


        `)
       
    }else if(item.location == "dhaka"){
        console.log(`Name = ${item.name}
        age = ${item.age}
        skill = ${item. skil}
        location = ${item.location}


        `)
      
    }else if(item.age > 40){
        console.log(`Name = ${item.name}
        age = ${item.age}
        skill = ${item. skil}
        location = ${item.location}

        
        `)
      
    }
})

//console.log(devs[1])

*/
/*  *****************************************

 bloodDonors.sort((a,b) =>{
    return b.lastDonation -a.lastDonation;
 });
let bloodcheck = bloodDonors.filter((item) =>{
    if(item.lastDonation >= 110 && item.bloodGroup === "B+"){
return item;
    }
})

bloodcheck.forEach((item) =>{
    console.log(`
    Name : ${item.name}
    Age : ${item.age}
    Location : ${item.Location}
    Phone : ${item.phone}
    Bloodgroup : ${item.bloodGroup}
    Marrigsttate : ${item.marriedStates}
    Lastdonation : ${item.lastDonation}
    `)
    console.log("`History_of_previous_blood_donation`");
    item.History_of_previous_blood_donation.forEach((item) => {
        console.log(`
        Name : ${item.RecipientName}
        how_many_times : ${item.how_many_times}
        Mobile : ${item.mobile}
        `)
    })
})
*/


/*
bloodDonors.filter((item) =>{
    if(item.bloodGroup == "B+" && item.lastDonation >= 110){
       console.log(`
       Name : ${item.name}
       Age : ${item.age}
       Location : ${item.Location}
       Phone : ${item.phone}
       Bloodgroup : ${item.bloodGroup}
       Marrigsttate : ${item.marriedStates}
       Lastdonation : ${item.lastDonation}
       `
      
       )

 console.log(`History_of_previous_blood_donation`);
       item.History_of_previous_blood_donation.forEach((itemmm) =>{
      
        console.log(`
        Name : ${itemmm.RecipientName}
        how_many_times : ${itemmm.how_many_times}
        Mobile : ${itemmm.mobile}
        `)
       })
    }
})

*/