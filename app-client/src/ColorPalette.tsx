import { Center, Flex } from "@chakra-ui/react";

interface Props {
  mainColorNumber: number;
}

export const ColorPalette = ({ mainColorNumber }: Props) => {
  const fontSize = 8;
  const fontW = "400";
  const boxH = 25;
  const boxW = 80;
  const borderR = 5;
  const colorS = [85, 80, 65, 60, 50, 60, 65, 90, 80, 50];
  const colorL = [90, 82, 70, 61, 50, 43, 35, 24, 21, 18];

  const hslArray: string[] = [];

  for (let i = 1; i <= colorS.length; i++) {
    hslArray.push(
      `hsl(${mainColorNumber},${colorS[i - 1]}%,${colorL[i - 1]}%)`
    );
  }
  const l = hslArray.length;

  return (
    <>
      <Flex
        flexDirection={"column-reverse"}
        h={"500px"}
        w={"full"}
        justifyContent={"flex-end"}
        alignContent={"flex-start"}
        wrap={"wrap"}
        gap={2}
      >
        {hslArray.map((hsl, index) => (
          <Center
            borderRadius={borderR}
            bg={hsl}
            w={boxW}
            h={boxH}
            fontSize={fontSize}
            fontWeight={fontW}
            color={hslArray[l - index + 1]}
          >
            {hsl}
          </Center>
        ))}
      </Flex>
    </>
  );
};
