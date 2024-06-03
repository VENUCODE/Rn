import Pagination from "@mui/material/Pagination";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            color: "#FE1542",
            backgroundColor: "transparent",
            "&:hover": {
              backgroundColor: "transparent",
            },
          },
          fontFamily: "Poppins",
          fontWeight: 500,
          fontSize: "14px",
          marginInline: "0px",
          paddingInline: "0px",
          color: "#225770",
          "&:hover": {
            backgroundColor: "transparent",
          },
        },
      },
    },
  },
});

function CustomPagination() {
  return (
    <ThemeProvider theme={theme}>
      <Pagination variant="text" count={7} hidePrevButton hideNextButton />
    </ThemeProvider>
  );
}

export default CustomPagination;
