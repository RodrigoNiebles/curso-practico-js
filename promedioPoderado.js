const notas = [
    {
        curso: "matematicas",
        nota: 9,
        credit: 5,
    },
    {
        curso: "fisica",
        nota: 8,
        credit: 4,
    },
    {
        curso: "ingles",
        nota: 7,
        credit: 1,
    },

];

const notasConCredito = notas.map(function(notaObject){
    return notaObject.nota * notaObject.credit;
});

const sumaDenotasConCredito = notasConCredito.reduce(
    function (sum = 0, nueValor){
        return sum + nueValor;
    }
);

const credit = notas.map(function (notaObject){
    return notaObject.credit;
});

const sumaDeCredit = credit.reduce(
    function (sum = 0, nueValor){
        return sum + nueValor;
    }
);

const promedioPoderadoNotasConCredito = sumaDenotasConCredito / sumaDeCredit;
