
// const plusElement = document.querySelectorAll('#plus');
// const imgChangeElement = document.getElementById('imgChange');


// plusElement.addEventListener('click',()=>{
//     if( 'http://127.0.0.1:5500/public/img/icones-plus.png'=== imgChangeElement.src){
//         imgChangeElement.src = '/public/img/icones-moins.png'
        
//     } else{
//         imgChangeElement.src= '/public/img/icones-plus.png'
//     }

// });

// const plusElement = document.querySelectorAll('plus');
// const imgChangeElement = document.getElementById('imgChange');

// plusElement.forEach((element) =>{
//     element.target.addEventListener('click', ()=>{
//         if( 'http://127.0.0.1:5500/public/img/icones-plus.png'=== imgChangeElement.src){
//             imgChangeElement.src = '/public/img/icones-moins.png'
            
//         } else{
//             imgChangeElement.src= '/public/img/icones-plus.png'
//         }
    
//     });

// })


// plusElement.addEventListener('click',(el)=>{
//     if( 'http://127.0.0.1:5500/public/img/icones-plus.png'=== imgChangeElement.src){
//         imgChangeElement.src = '/public/img/icones-moins.png'
        
//     } else{
//         imgChangeElement.src= '/public/img/icones-plus.png'
//     }

// })

// Sélection des éléments avec la classe 'plus'
const plusElements = document.querySelectorAll('.details-about-flowers');

// Sélection de l'élément avec l'ID 'imgChange'
const imgChangeElement = document.getElementById('imgChange');

// Boucle à travers tous les éléments sélectionnés
plusElements.forEach((element) => {
    // Ajout de l'écouteur d'événement sur chaque élément
    element.addEventListener('click', (event) => {
        console.log(event);
        // Vérification de l'élément cible de l'événement
        if (event.target === imgChangeElement) {
            // Changement de la source de l'image en fonction de son état actuel
            if (imgChangeElement.src === 'http://127.0.0.1:5500/public/img/icones-plus.png') {
                imgChangeElement.src = '/public/img/icones-moins.png';
            } else {
                imgChangeElement.src = '/public/img/icones-plus.png';
            }
        }
    });
});