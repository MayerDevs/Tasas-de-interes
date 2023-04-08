// variables
const tiempo = {
    'Mensual': 30,
    'Bimestral': 60,
    'Trimestral': 90,
    'Cuatrimestral': 120,
    'Semestral': 180,
    'Anual': 360
}
const mes = {
    'Mensual': 1,
    'Bimestral': 2,
    'Trimestral': 3,
    'Cuatrimestral': 4,
    'Semestral': 6,
    'Anual': 12,
}

// DOM
const button = document.querySelector('button').id
const informacion = document.getElementById('info')

if (button == 'btn_enviar_N_N') {
    // NOMINAL A NOMINAL
    const button_N_N = document.getElementById('btn_enviar_N_N')
    button_N_N.addEventListener('click', (e) => {
        // valor del interes
        const interes = document.getElementById('interes').value
        // valor del periodo del interes
        const periodo = document.getElementById('periodo')
        const valueInt = periodo.options[periodo.selectedIndex].value
        // periodo de capitalización
        const capitalizacion = document.getElementById('capitalizacion')
        const valueCap = capitalizacion.options[capitalizacion.selectedIndex].value

        if (mes[valueInt] < mes[valueCap]) {
            res = interes * (mes[valueCap] / mes[valueInt])
        } else {
            res = interes / (mes[valueInt] * mes[valueCap])
        }

        informacion.innerHTML = `TN${valueCap[0]} ${res} %`
        e.preventDefault()
    })
} else if (button == 'btn_enviar_N_E') {
    const button_N_E = document.getElementById('btn_enviar_N_E')
    // NOMINAL A EFECTIVA
    button_N_E.addEventListener('click', (e) => {
        // valor del interes
        const interes = document.getElementById('interes').value
        // valor del periodo del interes
        const periodoI = document.getElementById('periodo')
        const valueInt = periodoI.options[periodoI.selectedIndex].value
        // periodo de la tasa nominal 
        const periodoE = document.getElementById('periodo_efectivo')
        const valueEfe = periodoE.options[periodoE.selectedIndex].value
        // periodo de capitalización
        const capitalizacion = document.getElementById('capitalizacion')
        const valueCap = capitalizacion.options[capitalizacion.selectedIndex].value

        m = tiempo[valueEfe] / tiempo[valueCap]
        n = tiempo[valueInt] / tiempo[valueCap]
        res = ((Math.pow(1 + ((interes / 100) / n), m)) - 1) * 100
        informacion.innerHTML = `TE${valueCap[0]} ${res} %`
        e.preventDefault()
    })
} else if (button == 'btn_enviar_E_E') {
    // EFECTIVA A EFECTIVA
    const button_E_E = document.getElementById('btn_enviar_E_E')
    button_E_E.addEventListener('click', (e) => {
        // valor del interes
        const interes = document.getElementById('interes').value
        // valor del periodo del interes
        const periodoI = document.getElementById('periodo')
        const valueInt = periodoI.options[periodoI.selectedIndex].value
        // periodo de capitalización
        const capitalizacion = document.getElementById('capitalizacion')
        const valueCap = capitalizacion.options[capitalizacion.selectedIndex].value

        m = tiempo[valueCap] / tiempo[valueInt]
        res = (Math.pow(1 + (interes / 100), m) - 1) * 100
        informacion.innerHTML = `TE${valueCap[0]} ${res} %`
        e.preventDefault()
    })
} else if (button == 'btn_enviar_E_N') { // btn_enviar_E_N
    // EFECTIVA A NOMINAL
    const button_E_N = document.getElementById('btn_enviar_E_N')
    button_E_N.addEventListener('click', (e) => {
        // valor del interes
        const interes = document.getElementById('interes').value
        // valor del periodo del interes
        const periodoI = document.getElementById('periodo')
        const valueInt = periodoI.options[periodoI.selectedIndex].value
        // periodo de la tasa nominal 
        const periodoN = document.getElementById('periodo_nominal')
        const valueNom = periodoN.options[periodoN.selectedIndex].value
        // periodo de capitalización
        const capitalizacion = document.getElementById('capitalizacion')
        const valueCap = capitalizacion.options[capitalizacion.selectedIndex].value

        m = tiempo[valueCap] / tiempo[valueInt]
        n = tiempo[valueNom] / tiempo[valueCap]
        res = (n * (Math.pow(1 + (interes / 100), m) - 1)) * 100

        informacion.innerHTML = `TN${valueCap[0]} ${res} %`
        e.preventDefault()
    })
}