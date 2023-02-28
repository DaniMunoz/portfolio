import randomGradients from '../../src/randomGradient.js';

export default function RandomGradient({id}) {
    let gradiente = randomGradients.staticGradient();
    return(
        <span id={"gradiente-" + id} className={"absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r " + gradiente}></span>
    );
}