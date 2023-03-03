const helpers = function () {};

//TailwindCSS can't work with dynamic classes, so we will take random static classes

const fromColors = [//'from-slate-400', 'from-gray-400', 'from-zinc-400', 'from-neutral-400', 'from-stone-400'
    //'from-red-400', 'from-orange-400', 'from-amber-400', 'from-yellow-400', 'from-fuchsia-400', 'from-pink-400', 'from-rose-100'
    'from-lime-400', 'from-green-400', 'from-emerald-400', 'from-teal-400', 'from-cyan-400', 'from-sky-400'
    , 'from-blue-400', 'from-indigo-400', 'from-violet-400', 'from-purple-400'];

const viaColors = [//'via-slate-200', 'via-gray-200', 'via-zinc-200', 'via-neutral-200', 'via-stone-400'
    'via-red-200', 'via-orange-200' , 'via-amber-200', 'via-yellow-200', 'via-fuchsia-200', 'via-pink-200', 'via-rose-200'
    //, 'via-lime-300', 'via-green-300', 'via-emerald-300', 'via-teal-300', 'via-cyan-300', 'via-sky-300'
    //, 'via-blue-300', 'via-indigo-300', 'via-violet-300', 'via-purple-300'
    ]; 

const toColors = [//'to-slate-400', 'to-gray-400', 'to-zinc-400', 'to-neutral-400', 'to-stone-400'
    //'to-red-400', 'to-orange-400', 'to-amber-400', 'to-yellow-400', 'to-fuchsia-400', 'to-pink-400', 'to-rose-100'
    'to-lime-400', 'to-green-400', 'to-emerald-400', 'to-teal-400', 'to-cyan-400', 'to-sky-400'
    , 'to-blue-400', 'to-indigo-400', 'to-violet-400', 'to-purple-400'];

helpers.staticGradient = () => {
    return fromColors[Math.floor(Math.random() * 17)] 
        //+ " " + viaColors[Math.floor(Math.random() * 17)] 
        + " " + toColors[Math.floor(Math.random() * 17)]
}

helpers.hoverGradient = () => {
    let fromColor = fromColors[Math.floor(Math.random() * 10)];
    let viaColor = viaColors[Math.floor(Math.random() * 7)];
    let toColor = toColors[Math.floor(Math.random() * 10)];
    return " transition-all duration-500 " + fromColor + " " + viaColor + " " + toColor + " bg-size-200 group-hover:bg-right-bottom"
}

export default helpers;