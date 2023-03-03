import randomGradients from '../../src/randomGradient.js';

export default function RandomDynamicGradient({id}) {
    let gradiente = randomGradients.hoverGradient();
    return(
        <span id={"gradiente-" + id} className={"migradiente absolute inset-x-0 bottom-0 h-3 group-hover:h-4 bg-gradient-to-r " + gradiente}></span>
    );
}