function comparaNumeros(num1,num2){
	const saoIguais = num1 === num2;
	const primeiraFrase = criaPrimeiraFrase(num1,num2);
	const segundaFrase = criaSegundaFrase(num1,num2);

	return `${primeiraFrase} ${segundaFrase}`;
	
}

function criaPrimeiraFrase(num1,num2) {
	let primeiraFrase = `Os numéros ${num1} e ${num2}`;
    let simNao = 'não';

    if(num1=== num2) {
		simNao = '';
	}

	return 	`${primeiraFrase} e ${simNao} são iguais.`
}

function criaSegundaFrase(num1,num2){
	const soma = num1 + num2;
	
	let comparaDez = 'menor';
	let comparaVinte = 'menor';

	if (comparaDez > 10){
		comparaDez = 'maior'
	}

	if (comparaVinte > 20){
		comparaVinte = 'maior'
	}

	return `Sua soma é ${soma}, que é ${comparaDez} que 10 e ${comparaVinte} que 20.`


	
}
console.log(comparaNumeros(1, 2));