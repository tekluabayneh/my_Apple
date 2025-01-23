import firstHo from "../../data/horizontalScroll.json";
import HorizontalList from "../../components/HorizontalList/HorizontalList";
import SmallHorizontalList from "../../components/HorizontalList/SmallHorizntallScroll";
import MediumHorizontalList from "../../components/HorizontalList/meduimScroll";
import { first, four, second, third, five, six } from "./img";

export const Sections = [
  {
    title: "The latest.",
    subtitle: "Take a look at what’s new, right now.",
    component: HorizontalList,
    props: {
      item: firstHo.first,
      imageUrls: first,
      width: 22,
      blackTextIndices: [0, 4, 3],
    },
  },
  {
    title: "Help is here.",
    subtitle: "Whenever and however you need it.",
    component: HorizontalList,
    props: {
      item: firstHo.second,
      imageUrls: second,
      width: 25,
      blackTextIndices: [null],
    },
  },
  {
    title: "The Apple Store difference.",
    subtitle: "Even more reasons to shop with us.",
    component: SmallHorizontalList,
    props: { item: firstHo.third },
  },
  {
    title: "Accessories.",
    subtitle: "Essentials that pair perfectly with your favorite devices.",
    component: MediumHorizontalList,
    props: {
      item: firstHo.four,
      imageUrls: third,
      width: 17,
      blackTextIndices: [null],
    },
  },
  {
    title: "Loud and clear.",
    subtitle: "Unparalleled choices for rich, high-quality sound.",
    component: MediumHorizontalList,
    props: {
      item: firstHo.five,
      imageUrls: four,
      width: 17,
      blackTextIndices: [null],
    },
  },
  {
    title: "The Apple experience",
    subtitle: "Do even more with Apple products and services.",
    component: HorizontalList,
    props: {
      item: firstHo.six,
      imageUrls: five,
      width: 26,
      blackTextIndices: [null],
    },
  },
  {
    title: "The latest.",
    subtitle: "Take a look at what’s new, right now.",
    component: HorizontalList,
    props: {
      item: firstHo.seven,
      imageUrls: six,
      width: 22,
      blackTextIndices: [3],
    },
  },
];
