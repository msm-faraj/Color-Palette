import { Stack } from "@chakra-ui/react";
import "./App.css";
import { ColorPalette } from "./ColorPalette";

function App() {
  return (
    <Stack direction={"row"}>
      <ColorPalette mainColorNumber={0}></ColorPalette>
      <ColorPalette mainColorNumber={30}></ColorPalette>
      <ColorPalette mainColorNumber={60}></ColorPalette>
      <ColorPalette mainColorNumber={90}></ColorPalette>
      <ColorPalette mainColorNumber={120}></ColorPalette>
      <ColorPalette mainColorNumber={150}></ColorPalette>
      <ColorPalette mainColorNumber={180}></ColorPalette>
      <ColorPalette mainColorNumber={210}></ColorPalette>
      <ColorPalette mainColorNumber={240}></ColorPalette>
      <ColorPalette mainColorNumber={280}></ColorPalette>
      <ColorPalette mainColorNumber={320}></ColorPalette>
    </Stack>
  );
}

export default App;
