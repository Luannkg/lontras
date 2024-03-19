var motivos = [
  " Eles são perfeitos",
  "Gostam de Brincar",
  "Até praticam saltos ornamentais na água",
  "As lontras são fofinhas",
    "Elas gostam de nadar"
];

var imagens = [ "https://www.aen.pr.gov.br/sites/default/arquivos_restritos/files/imagem/2022-01/whatsapp_image_2022-01-31_at_08.15.03.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRavK_5Ce57DSgU1xLThv6t_Q64b0ilEFM8Ww&usqp=CAU",
  "https://i.pinimg.com/originals/c3/56/78/c35678987f3272a96af3da37cb2660ad.webp","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY9r0xwhyiaAb3qXwZo3MX1SQiwiHZ9yijig&usqp=CAU"
   ,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY-m2yvXoACrfMXX9WUJNeQKpKlZ3isk5Knw&usqp=CAU"  ,
];

var i = 0;
function proximo() {  document.getElementById("album").src = imagens[i];
    document.getElementById("texto").innerHTML = motivos[i];
    
    i++;  
   if(i>4){
     i=0;
   }
}

