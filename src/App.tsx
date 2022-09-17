import { MantineProvider, Text, CSSObject } from '@mantine/core';
import {Game} from "./pages/game";
import { Center, Container} from '@mantine/core';
import { createStyles } from '@mantine/core';
import {useViewportSize} from "@mantine/hooks";

const useStyles = createStyles((theme, _params, getRef) => ({
  wrapper: {
    // subscribe to color scheme changes right in your styles
    backgroundColor: 'blue',
    minHeight: 500,
    maxHeight: '100%',
    height: '100%'
  },
}));


export default function App() {
  const { classes } = useStyles();
  const {height, width} = useViewportSize()

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme: 'dark' }}>
      <Center sx={{height: height, width:width}}>
        <Game/>
      </Center>
    </MantineProvider>
  );
}
