import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    styles: {
        global: {
            backgroundImage: "url ('../assets/HomeBackground.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center"

        }

    }
})

export default Footer;