const initialState = {
  addActionDialogVisible: false,
  logViewerDialogVisible: false,
  cmdLogs: [],
  logsTitle: '', // Used for logs viewer dialog
  logsDescription: '', // Used for logs viewer dialog
  cmdArgs: null, // Args provided to the current command
  execCmdPending: false,
  execCmdError: null,
};

export default initialState;
