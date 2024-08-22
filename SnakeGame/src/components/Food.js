import { Text, View } from "react-native";
import { HEADER_HEIGHT, PIXEL, BORDER } from "../consts";

const foodemojis = [
    "🍏",
    "🍎",
    "🍐",
    "🍊",
    "🍋",
    "🍌",
    "🍉",
    "🍇",
    "🍓",
    "🫐",
    "🍈",
    "🍒",
    "🍑",
    "🥭",
    "🍍",
    "🥥",
    "🥝",
    "🍅",
  ];

  const Food = ({ coords, top }) => {
    const randDomFood = foodemojis[Math.floor(Math.random() * foodemojis.length)];
    const foodStyle = {
        width: PIXEL,
        height: PIXEL,
        top: coords.y * PIXEL + HEADER_HEIGHT + top,
        left: coords.x * PIXEL + BORDER,
    };
    return (
        <View style={[{ position: "absolute" }, foodstyle]}>
            <Text>{randDomFood}</Text>
        </View>
    );
  }

  export default Food