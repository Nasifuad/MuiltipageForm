import iconArcade from "../assets/images/icon-arcade.svg";
import iconAdvanced from "../assets/images/icon-advanced.svg";
import iconPro from "../assets/images/icon-pro.svg";

export const selectPlan = [
  {
    id: 1,
    icon: iconArcade,
    title: "Arcade",
    priceMonth: "$9/mo",
    priceYear: "$90/yr",
    free: "2 months free",
  },
  {
    id: 2,
    icon: iconAdvanced,
    title: "Advanced",
    priceMonth: "$12/mo",
    priceYear: "$120/yr",
    free: "2 months free",
  },
  {
    id: 3,
    icon: iconPro,
    title: "Pro",
    priceMonth: "$15/mo",
    priceYear: "$150/yr",
    free: "2 months free",
  },
];
export const addOns = [
  {
    id: 1,
    value: "Online service",
    desc: "Acces to multiplayer games",
    price: 1,
  },
  {
    id: 2,
    value: "Larger storage",
    desc: "Extra 1TB of cloud save",
    price: 2,
  },
  {
    id: 3,
    value: "Customizable profile",
    desc: "Custom theme on your profile",
    price: 2,
  },
];
export const steps = [
  {
    id: 1,
    step: "step 1",
    title: "your info",
    linkTo: "/",
  },
  {
    id: 2,
    step: "step 2",
    title: "select plan",
    linkTo: "step2",
  },
  {
    id: 3,
    step: "step 3",
    title: "add-ons",
    linkTo: "step3",
  },
  {
    id: 4,
    step: "step 4",
    title: "summary",
    linkTo: "step4",
  },
];
