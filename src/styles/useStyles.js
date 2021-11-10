import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  // General
  root: {
    minHeight: "200vh",
    backgroundImage: `url(${
      process.env.PUBLIC_URL + "/assets/background.jpg"
    })`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },

  // HEADER
  // HEADER --NAVAGATION BAR
  rootApp: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",

    fontFamily: "Nunito",
  },
  appbar: {
    background: "none",
    fontFamily: "Nunito",
  },
  
  appbarTitle: {
    flexGrow: "1",
  },
  appbarWrapper: {
    width: "80%",
    margin: "0 auto",
  },
  colorTitle: {
    color: "#5AFF3D",
  },
  icon: {
    color: "#fff",
    fontSize: "2rem",
  },

 // HEDER -- HERO
  heroTitle: {
    color: "#fff",
    textAlign: "center",
    fontSize: "4.5rem",
  },
 

  goDown: {
    color: "#5AFF3D",
    fontSize: "4rem",
  },
  heroContainer: {
    textAlign: "center",
  },


  // PLACETOVISIT
  rootPlaceToVisit: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: { flexDirection: "column" },
  },
  // PLACETOVISIT IMAGECARD
  rootCard: {
    maxWidth: 500,
    background: "rgba(0,0,0,0.5)",
    margin: "20px",
    height:'70vh'
  },
  media: {
    height: 300,
  },
  cardTitle: {
    fontFamily: "Nunito",
    fontWeight: "bold",
    fontSize: "2rem",
    color: "#fff",
  },
  cardDescription: {
    fontFamily: "Nunito",

    fontSize: "1.1rem",
    color: "#fff",
  },

}));

export default useStyles;
