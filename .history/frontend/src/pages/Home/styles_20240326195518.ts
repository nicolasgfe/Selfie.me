import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    styles: {
        global: {
            "custom"
            backgroundImage: "url ('../assets/HomeBackground.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center"

        }

    }
})

export default theme;