const sections = document.querySelectorAll('section');
// for(const section of sections){
//     // console.log(section);
//     section.style.backgroundColor='lightblue';
//     section.style.border='2px solid red';
//     section.style.borderRadius='5px';
//     section.style.padding='40px';
// }

for(const section of sections){
    section.classList.add('bg');
}