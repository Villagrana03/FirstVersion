// const questions = [
//     {
//         question: `who was my first cat?`,
//         answer: [
//             {text: `mango`, correct: false},
//             {text: `azul`, correct: false},
//             {text: `pugo`, correct: true},
//             {text: `valntina`, correct: false}
//         ]
//     },
//     {
//         question: `in what year was mango born?`,
//         answer: [
//             {text: `2003`, ccorrect: false},
//             {text: `2020`, correct: true},
//             {text: `2019`, correct: false},
//             {text: `2021`, correct: false}
//         ]
//     },
//     {
//         question: `how many siblings does azul have?`,
//         answer:[
//             {text: 1, correct: true},
//             {text: 2, correct: false},
//             {text: 3,correct: false},
//             {text: 4, correct: false}
//         ]
//     },
//     {question: `favorite mangos food?`,
//     answer:[
//         {text: `fish`, correct: false},
//         {text: `whiskas`, correct: false},
//         {text: `rice`, correct: false},
//         {text: `tuna`, correct: true}
//     ]
//     }
// ]



function sameCase(a, b){
     if(!/[a-zA-Z]/.test(a) || !/[a-zA-Z]/.test(b)){
       return -1
     }else if(a.toLowerCase() = b.toLowerCase()){
              return 1
              }
      else if(a.toUpperCase() = b.toUpperCase()){
              return 1
              }else{
     return 0;
      }
     }




function sameCase(a, b){
     if(!/[a-zA-Z]/.test(a) || !/[a-zA-Z]/.test(b)){
       return -1
     }else if(a.toLowerCase() === b.toLowerCase()){
              return 1
              }
   else{
     return 0;
      }
     }






     function sameCase(a, b){
          if(a.toLowerCase() === a.toUppercase() || b.toUpperCase() === b.toLowerCase()){
            return -1
          } else if(a === a.toLowerCase() && a === a.toUpperCase() || b === b.toLowerCase() && b === b.toUpperCase()){
            return 1
          } else{
            return 0
          }
        }

        if(a.toLowerCase() === a.toUpperCase() ||  b.toLowerCase() === b.toUpperCase()){
          return -1
        }

        if(a.toLowerCase() === a.toUppercase() || b.toLowerCase() === b.toUpperCase()){
          return -1
        }





//incorrecto
        function sameCase(a, b){
          if(a.toLowerCase() === a.toUpperCase() || b.toUpperCase() === b.toLowerCase()){
                  return -1
                } else if(a === a.toLowerCase() && a === a.toUpperCase() || b === b.toUpperCase() && b === b.toLowerCase()){
                    return 1
                }
               }
//correct
               function sameCase(a, b){
                    if(a.toLowerCase() === a.toUpperCase() || b.toUpperCase() === b.toLowerCase()){
                            return -1
                          } else if(a === a.toLowerCase() && b === b.toLowerCase() || a === a.toUpperCase() && b === b.toUpperCase()){
                              return 1
                          }else{
                              return 0
                          }
                         }






 const quarterOf = (month) => {
     if(month === 1 || month === 2 || month === 3){
     return
     } else if(month === 4 || month === 4 || month === 6){
 return                                              
 } else if(month === 7 || month === 8 || month === 9){
     return
 } else if(month === 10 || month === 11 || month === 12){
     return
 }
 }