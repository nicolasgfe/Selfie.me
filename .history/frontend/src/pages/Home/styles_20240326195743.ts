import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    styles: {
        global: {
            'footer': {
                backgroundColor: "blue"
                backgroundSize: "cover",
                backgroundPosition: "center"
            }


        }

    }
})

export default theme;