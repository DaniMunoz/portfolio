const helpers = function () {};

//TailwindCSS can't work with dynamic classes, so we will take random static classes

const fromColors = [//'from-slate-100', 'from-gray-100', 'from-zinc-100', 'from-neutral-100', 'from-stone-100',
    'from-red-100', 'from-orange-100'
    , 'from-amber-100', 'from-yellow-100', 'from-lime-100', 'from-green-100', 'from-emerald-100', 'from-teal-100', 'from-cyan-100', 'from-sky-100'
    , 'from-blue-100', 'from-indigo-100', 'from-violet-100', 'from-purple-100', 'from-fuchsia-100', 'from-pink-100', 'from-rose-100'];

const viaColors = [//'via-slate-100', 'via-gray-100', 'via-zinc-100', 'via-neutral-100', 'via-stone-100', 
    'via-red-100', 'via-orange-100'
    , 'via-amber-100', 'via-yellow-100', 'via-lime-100', 'via-green-100', 'via-emerald-100', 'via-teal-100', 'via-cyan-100', 'via-sky-100'
    , 'via-blue-100', 'via-indigo-100', 'via-violet-100', 'via-purple-100', 'via-fuchsia-100', 'via-pink-100', 'via-rose-100']; 

const toColors = [//'to-slate-100', 'to-gray-100', 'to-zinc-100', 'to-neutral-100', 'to-stone-100', 
    'to-red-100', 'to-orange-100'
    , 'to-amber-100', 'to-yellow-100', 'to-lime-100', 'to-green-100', 'to-emerald-100', 'to-teal-100', 'to-cyan-100', 'to-sky-100'
    , 'to-blue-100', 'to-indigo-100', 'to-violet-100', 'to-purple-100', 'to-fuchsia-100', 'to-pink-100', 'to-rose-100'];

helpers.staticGradient = () => {
    return fromColors[Math.floor(Math.random() * 17)] 
        + " " + viaColors[Math.floor(Math.random() * 17)] 
        + " " + toColors[Math.floor(Math.random() * 17)];
}

export default helpers;