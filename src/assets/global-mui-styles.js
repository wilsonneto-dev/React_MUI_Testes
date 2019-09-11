const GlobalMUIStyle = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  toolbar: theme.mixins.toolbar,
  appBarSpacer: theme.mixins.toolbar,
  container: {
    paddingTop: theme.spacing(3)
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
  fixedHeight: {
    height: 240
  }
});

export default GlobalMUIStyle;
