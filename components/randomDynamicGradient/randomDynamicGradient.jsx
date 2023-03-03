import randomGradients from '../../src/randomGradient.js';

export default function RandomDynamicGradient({id}) {
    let gradiente = randomGradients.hoverGradient();
    return(
        <span id={"gradiente-" + id} className={" absolute inset-x-0 bottom-0 h-3 bg-gradient-to-r " + gradiente}></span>
    );
}