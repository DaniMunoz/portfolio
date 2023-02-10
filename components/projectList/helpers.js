const helpers = function () {};

//TailwindCSS can't work with dynamic classes, so we will take random static classes

const fromColors = [//'from-slate-300', 'from-gray-300', 'from-zinc-300', 'from-neutral-300', 'from-stone-300',
    'from-red-300', 'from-orange-300'
    , 'from-amber-300', 'from-yellow-300', 'from-lime-300', 'from-green-300', 'from-emerald-300', 'from-teal-300', 'from-cyan-300', 'from-sky-300'
    , 'from-blue-300', 'from-indigo-300', 'from-violet-300', 'from-purple-300', 'from-fuchsia-300', 'from-pink-300', 'from-rose-100'];

const viaColors = [//'via-slate-300', 'via-gray-300', 'via-zinc-300', 'via-neutral-300', 'via-stone-300', 
    'via-red-300', 'via-orange-300'
    , 'via-amber-300', 'via-yellow-300', 'via-lime-300', 'via-green-300', 'via-emerald-300', 'via-teal-300', 'via-cyan-300', 'via-sky-300'
    , 'via-blue-300', 'via-indigo-300', 'via-violet-300', 'via-purple-300', 'via-fuchsia-300', 'via-pink-300', 'via-rose-100']; 

const toColors = [//'to-slate-300', 'to-gray-300', 'to-zinc-300', 'to-neutral-300', 'to-stone-300', 
    'to-red-300', 'to-orange-300'
    , 'to-amber-300', 'to-yellow-300', 'to-lime-300', 'to-green-300', 'to-emerald-300', 'to-teal-300', 'to-cyan-300', 'to-sky-300'
    , 'to-blue-300', 'to-indigo-300', 'to-violet-300', 'to-purple-300', 'to-fuchsia-300', 'to-pink-300', 'to-rose-100'];

helpers.staticGradient = () => {
    return "bg-gradient-to-r" 
        + " " + fromColors[Math.floor(Math.random() * 17)] 
        + " " + viaColors[Math.floor(Math.random() * 17)] 
        + " " + toColors[Math.floor(Math.random() * 17)];
}

export default helpers;