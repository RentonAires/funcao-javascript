function area (largura, altura){

    const area = largura * altura

    if(area > 20){
        console.log('valor aima do permitido: ${}' + area);
    }else{
        return area
    }

}
console.log(area(2, 2));
console.log(area(2));
console.log(area());
console.log(area(2, 3, 2, 5, 6 ));
console.log(area(5, 5));
