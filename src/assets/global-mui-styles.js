const GlobalMUIStyle = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  toolbar: theme.mixins.toolbar
});

export default GlobalMUIStyle;
