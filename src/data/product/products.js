import laptop from "@/assets/images/card-laptop.png";
import monitor from "@/assets/images/card-monitor.png";
import mouse from "@/assets/images/card-mouse.png";
import teclado from "@/assets/images/card-teclado.png";

export const products = [
    {
        id:1,
        title:"laptop profecional",
        price:3500000,
        description:"laptop de alto rendimiento para desarrollo y desaño",
        image:laptop,
        category: "perifericos"
    },
    {
        id:2,
        title:"Monitor 27 pulgadas",
        price:1200000,
        description:"Monitor IPS ideal para programación y edición",
        image:monitor,
        category:""
    },
    {
        id:3,
        title:"Mouse",
        price:80000,
        description:"Mouse ergonomico, la mejor calidad y precio",
        image:mouse,
        category:"perifericos"
    },
    {
        id:4,
        title:"Teclado Gamer",
        price: 50000,
        description:"Teclado mecanico con iluminación RGB",
        image:teclado,
        category:"perifericos"
    },
]