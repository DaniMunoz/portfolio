const helpers = function () {};

//TailwindCSS can't work with dynamic classes, so we will take random static classes

const fromColors = [//'from-slate-400', 'from-gray-400', 'from-zinc-400', 'from-neutral-400', 'from-stone-400',
    //'from-red-400', 'from-orange-400', 'from-amber-400', 'from-yellow-400', 'from-fuchsia-400', 'from-pink-400', 'from-rose-100'
    'from-lime-400', 'from-green-400', 'from-emerald-400', 'from-teal-400', 'from-cyan-400', 'from-sky-400'
    , 'from-blue-400', 'from-indigo-400', 'from-violet-400', 'from-purple-400'];

const viaColors = [//'via-slate-400', 'via-gray-400', 'via-zinc-400', 'via-neutral-400', 'via-stone-400', 
    'via-red-400', 'via-orange-400' , 'via-amber-400', 'via-yellow-400', 'via-fuchsia-400', 'via-pink-400', 'via-rose-100'
    //, 'via-lime-400', 'via-green-400', 'via-emerald-400', 'via-teal-400', 'via-cyan-400', 'via-sky-400'
    //, 'via-blue-400', 'via-indigo-400', 'via-violet-400', 'via-purple-400'
    ]; 

const toColors = [//'to-slate-400', 'to-gray-400', 'to-zinc-400', 'to-neutral-400', 'to-stone-400', 
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